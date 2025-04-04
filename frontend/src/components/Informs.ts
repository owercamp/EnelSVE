import { counterCentral, filtered, filteredDifferent, normalizeText, unique } from "../services/services";
import { verifiedZero } from "../services/verified";

const counterState = (states: any, registers: any) => {
  let filtering: any;
  const { SANO, SOSPECHOSO, PROBABLE, CONFIRMADO, DIFFERENCE } = states;
  const numberState: any = {
    SANO: [],
    SOSPECHOSO: [],
    PROBABLE: [],
    CONFIRMADO: [],
    DIFFERENCE: []
  }

  //? SANO
  filtering = filtered(SANO, registers, 50);
  const resultHealthy = verifiedZero(filtering, states.length);
  if (resultHealthy !== undefined) {
    numberState.SANO = 0;
  };

  if (resultHealthy === undefined) {
    const healthy = filtering.length;
    numberState.SANO = healthy;
  }

  //? SOSPECHOSO
  filtering = filtered(SOSPECHOSO, registers, 50);
  const resultSuspect = verifiedZero(filtering, states.length);
  if (resultSuspect !== undefined) {
    numberState.SOSPECHOSO = 0;
  };

  if (resultSuspect === undefined) {
    const suspect = filtering.length;
    numberState.SOSPECHOSO = suspect;
  }

  //? PROBABLE
  filtering = filtered(PROBABLE, registers, 50);
  const resultLikely = verifiedZero(filtering, states.length);
  if (resultLikely !== undefined) {
    numberState.PROBABLE = 0;
  };

  if (resultLikely === undefined) {
    const likely = filtering.length;
    numberState.PROBABLE = likely;
  }

  //? CONFIRMADO
  filtering = filtered(CONFIRMADO, registers, 50);
  const resultConfirm = verifiedZero(filtering, states.length);
  if (resultConfirm !== undefined) {
    numberState.CONFIRMADO = 0;
  };

  if (resultConfirm === undefined) {
    const confirm = filtering.length;
    numberState.CONFIRMADO = confirm;
  }

  filtering = filteredDifferent([SANO, SOSPECHOSO, PROBABLE, CONFIRMADO], registers, 50);
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

const initInforms = (information: any) => {
  let series = [];
  let data_series: any = [];
  let info_for_table: any = [];
  const states: any = {
    SANO: 'SANO',
    SOSPECHOSO: 'SOSPECHOSO',
    PROBABLE: 'PROBABLE',
    CONFIRMADO: 'PERDIDA AUDITIVA LABORAL CONFIRMADA',
    DIFFERENCE: 'SIN ESTADO'
  }

  const state_number = counterState(states, information['yearCurrent'].slice(1));
  let centralsCurrentYear = unique(information['yearCurrent'].slice(1), 6);
  let centralsOldYear = unique(information['yearOld'].slice(1), 6);
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
  // console.log(counter_for_central);

  const labels = [states.SANO, states.SOSPECHOSO, states.PROBABLE, states.CONFIRMADO, states.DIFFERENCE];

  Object.keys(state_number).forEach((element: string) => {
    data_series.push(state_number[element]);
  });

  series.push({
    name: new Date().getFullYear(),
    data: data_series,
  })

  // console.log(centrals.sort(), counter_for_central_year_current, counter_for_central_year_before);

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

export { initInforms };