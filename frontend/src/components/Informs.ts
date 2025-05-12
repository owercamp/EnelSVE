import STATUS from "../../models/Status";
import { GET_CONFIG } from "../configurations/configSheets";
import { counterCentral, filtered, filteredDifferent, normalizeText, unique } from "../services/services";
import { verifiedZero } from "../services/verified";

const states = new STATUS();
const year = new Date().getFullYear();

const consult_for_central = (central: string, information: object) => {
  let { yearCurrent, yearOld }: object | any = information;
  let series = [];
  yearCurrent = filtered(central, yearCurrent.slice(1), GET_CONFIG.getSheetConfig(year, 'central')['position']);
  yearOld = filtered(central, yearOld.slice(1), GET_CONFIG.getSheetConfig(year, 'central')['position']);

  const labels = states.getAllStates();

  const counter_for_central_year_current = counterState(states, yearCurrent, GET_CONFIG.getSheetConfig(year, 'caso')['position']);
  const counter_for_central_year_before = counterState(states, yearOld, GET_CONFIG.getSheetConfig(year - 1, 'caso')['position']);

  series.push({
    name: year,
    data: [
      counter_for_central_year_current['SANO'],
      counter_for_central_year_current['SOSPECHOSO'],
      counter_for_central_year_current['PROBABLE'],
      counter_for_central_year_current['CONFIRMADO'],
      counter_for_central_year_current['DIFFERENCE']
    ]
  });

  series.push({
    name: year - 1,
    data: [
      counter_for_central_year_before['SANO'],
      counter_for_central_year_before['SOSPECHOSO'],
      counter_for_central_year_before['PROBABLE'],
      counter_for_central_year_before['CONFIRMADO'],
      counter_for_central_year_before['DIFFERENCE']
    ]
  });

  return [
    labels,
    series
  ];
}

const counterState = (states: any, registers: string[][], pos: number) => {
  let filtering: string[][];
  const { healthy, suspect, likely, confirm } = states;
  const numberState: any = {
    SANO: [],
    SOSPECHOSO: [],
    PROBABLE: [],
    CONFIRMADO: [],
    DIFFERENCE: []
  }

  //? SANO
  filtering = filtered(healthy, registers, pos);
  const resultHealthy = verifiedZero(filtering, states.length);
  if (resultHealthy !== undefined) {
    numberState.SANO = 0;
  };

  if (resultHealthy === undefined) {
    const healthy = filtering.length;
    numberState.SANO = healthy;
  }

  //? SOSPECHOSO
  filtering = filtered(suspect, registers, pos);
  const resultSuspect = verifiedZero(filtering, states.length);
  if (resultSuspect !== undefined) {
    numberState.SOSPECHOSO = 0;
  };

  if (resultSuspect === undefined) {
    const suspect = filtering.length;
    numberState.SOSPECHOSO = suspect;
  }

  //? PROBABLE
  filtering = filtered(likely, registers, pos);
  const resultLikely = verifiedZero(filtering, states.length);
  if (resultLikely !== undefined) {
    numberState.PROBABLE = 0;
  };

  if (resultLikely === undefined) {
    const likely = filtering.length;
    numberState.PROBABLE = likely;
  }

  //? CONFIRMADO
  filtering = filtered(confirm, registers, pos);
  const resultConfirm = verifiedZero(filtering, states.length);
  if (resultConfirm !== undefined) {
    numberState.CONFIRMADO = 0;
  };

  if (resultConfirm === undefined) {
    const confirm = filtering.length;
    numberState.CONFIRMADO = confirm;
  }

  filtering = filteredDifferent([healthy, suspect, likely, confirm], registers, pos);
  const resultDifferent = verifiedZero(filtering, states.length);
  if (resultDifferent !== undefined) {
    numberState.DIFFERENCE = 0;
  };

  if (resultDifferent === undefined) {
    const different = filtering.length;
    numberState.DIFFERENCE = different;
  }

  return numberState;
}

const initInforms = (information: any): Array<[]> => {
  let series = [];
  let data_series: any = [];
  let info_for_table: any = [];

  const state_number = counterState(states, information['yearCurrent'].slice(1), GET_CONFIG.getSheetConfig(year, 'caso')['position']);
  let centralsCurrentYear = unique(information['yearCurrent'].slice(1), GET_CONFIG.getSheetConfig(year, 'central')['position']);
  let centralsOldYear = unique(information['yearOld'].slice(1), GET_CONFIG.getSheetConfig(year - 1, 'central')['position']);
  let unionCemtrals = [...centralsCurrentYear, ...centralsOldYear];
  const cleanedDataSet = new Set<string>();


  const centrals = unionCemtrals.filter((element: string) => {
    let normalize = normalizeText(element.toLocaleLowerCase().trim()).replace(/(\w)-(\w)/g, '$1 - $2').replace(/[\-]+/g, " - ").replace(/(\s{2,})/g, " ");

    if (!cleanedDataSet.has(normalize) && element !== '') {
      cleanedDataSet.add(normalize);
      let my_return = element.replace(/(\w)-(\w)/g, '$1 - $2').replace(/^[\-]+/g, " - ").replace(/(\s{2,})/g, " ");
      return my_return;
    }
  });

  const counter_for_central_year_current = counterCentral(centrals.sort(), information['yearCurrent'].slice(1));
  const counter_for_central_year_before = counterCentral(centrals.sort(), information['yearOld'].slice(1));

  const labels = states.getAllStates();

  Object.keys(state_number).forEach((element: string) => {
    data_series.push(state_number[element]);
  });

  series.push({
    name: new Date().getFullYear(),
    data: data_series,
  })

  for (const key in centrals.sort()) {
    info_for_table.push({
      title: centrals[key],
      yearNew: counter_for_central_year_current[key],
      yearOld: counter_for_central_year_before[key]
    })
  }

  const info = [
    info_for_table,
    [
      labels,
      series
    ]
  ]

  return info;
}

export { initInforms, consult_for_central };