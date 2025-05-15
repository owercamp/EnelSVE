import { GET_CONFIG } from "./admin/services/configServices";
import { GET_AUDIOMETRY_FILTERED, GET_SHEETS } from "./admin/services/sheetServices";

/**
 * Executes when the spreadsheet is opened.
 *
 * @param {Object} e - The event object.
 */
function onOpen(e: any) {
  try {
    const menu: any = SpreadsheetApp.getUi().createMenu('ADMINISTRACIÓN ENEL - SVE');
    const recipients: any = {
      'Generar Libro': 'TODO',
      'Informes': 'abrirInforme',
    };
    for (const [name, recipient] of Object.entries(recipients)) {
      menu.addItem(name, recipient);
    }
    menu.addToUi();
  } catch (error: any) {
    Logger.log(`${error.name}: ${error.message}`);
  }
}


/**
 * A description of the entire function.
 *
 * @return {Object} The evaluated output of the template.
 */
function doGet() {
  let template: GoogleAppsScript.HTML.HtmlTemplate = HtmlService.createTemplateFromFile('public/index.html');
  let output: GoogleAppsScript.HTML.HtmlOutput = template.evaluate()
    .setTitle("SOANDES | ENEL")
    .setFaviconUrl("https://soaics.grupoaltum.com.co/assets/media/logos/favicon.png");

  return output;
}

/**
 * Retrieves all data from the sheet named "2025" in the active spreadsheet.
 * If the sheet exists, it returns the data as a JSON string.
 *
 * @return {string | undefined} JSON string of sheet data or undefined if the sheet is not found.
 */

function getAll(year: number) {
  const spreadsheet: GoogleAppsScript.Spreadsheet.Spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const currentSheetYear: GoogleAppsScript.Spreadsheet.Sheet | null = spreadsheet.getSheetByName(String(year));
  const oldSheetYear: GoogleAppsScript.Spreadsheet.Sheet | null = spreadsheet.getSheetByName(String(year - 1));
  let registersCurrentYear: any;
  let registersOldYear: any;

  if (currentSheetYear) {
    registersCurrentYear = currentSheetYear?.getRange(1, 1, currentSheetYear.getLastRow(), currentSheetYear.getLastColumn()).getValues();
  }

  if (oldSheetYear) {
    registersOldYear = oldSheetYear?.getRange(1, 1, oldSheetYear.getLastRow(), oldSheetYear.getLastColumn()).getValues();
  }

  if (registersCurrentYear || registersOldYear) {
    const registers = {
      yearCurrent: registersCurrentYear,
      yearOld: registersOldYear
    };

    return JSON.stringify(registers);
  }

}

function abrirInforme() {
  var html: GoogleAppsScript.HTML.HtmlOutput = HtmlService.createHtmlOutput('<html>'
    + '<script>' +
    "var urlToOpen = 'https://script.google.com/macros/s/AKfycbzCUaiKWseNxqiiiMNnmZjoRWdtplXvvl8RHNoZ24OmSnJ1KV6TbOlI4n83spBbXJTp/exec';" +
    "var winRef = window.open(urlToOpen);" +
    "google.script.host.close();"
    + '</script>'
    + '</html>')
    .setWidth(90).setHeight(1);
  SpreadsheetApp.getUi().showModalDialog(html, "Abriendo Informe");
}

/**
 *  * Retrieves the best audiometry result for a given ID from multiple sheets.
 *
 * @param {string} id - The value of cholesterol.
 * @return {string} The best audiometry result.
 * @customfunction
 */
function MEJOR_AUDIOMETRIA(id: string) {
  const sheetInstance: any = GET_SHEETS.getSheets();
  const dateFormat = new Intl.DateTimeFormat('es-CO', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });
  let bestRegister: any[] = [];

  sheetInstance.map((element: any) => {
    const sheetName: string = element.getSheetName();
    const config: any = GET_CONFIG.getConfig(sheetName);
    let range = element.getDataRange().getValues().slice(config.posSlice).map((e: any, index: number) => [...e, index + config.idAument, sheetName]);
    const registers = GET_AUDIOMETRY_FILTERED.getAudioFilterOld(id, range, config.cc);
    if (registers.length > 0) {
      for (const key in registers) {
        bestRegister.push(
          [
            ...registers[key],
            parseInt(registers[key][config.gatiso].split(".")[0]),
            registers[key][config.ultimateAudio]
          ]
        );
      }
    }
  });

  if (bestRegister.length === 0) {
    return 'No se encontraron registros en años anteriores.';
  }

  const bestFilter = bestRegister.reduce((acc: any, curr: any) => {
    return (parseInt(curr[curr.length - 2]) < parseInt(acc[acc.length - 2]) || (parseInt(curr[curr.length - 1]) > parseInt(acc[acc.length - 1]) && parseInt(curr[curr.length - 2]) === parseInt(acc[acc.length - 2]))) ? curr : acc;
  }, bestRegister[0]);

  let date_register;
  switch (true) {
    case bestFilter[bestFilter.length - 3] === '2015 - 2023':
      date_register = (bestFilter[23]) ? bestFilter[23] : bestFilter[bestFilter.length - 1];
      break;
    case bestFilter[bestFilter.length - 3] === '2024':
      date_register = (bestFilter[22]) ? bestFilter[22] : bestFilter[bestFilter.length - 1];
      break;
    case parseInt(bestFilter[bestFilter.length - 3]) < parseInt(new Date().getFullYear().toString()):
      date_register = (bestFilter[18]) ? bestFilter[18] : bestFilter[bestFilter.length - 2];
      break;
  }
  return `Fecha:\n${dateFormat.format(date_register)}\nHoja:\n${bestFilter[bestFilter.length - 3]}\nFila:\n${bestFilter[bestFilter.length - 4]}`;
}

function insertInfo(register: Array<string>) {
  const year: Number = new Date().getFullYear();
  const book: GoogleAppsScript.Spreadsheet.Spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet: GoogleAppsScript.Spreadsheet.Sheet | null = book.getSheetByName(String(year));
  const lock = LockService.getScriptLock();

  try {
    lock.waitLock(30000);
    sheet?.appendRow(register);

    return register;
  } catch (error) {
    lock.releaseLock();
    return error;
  } finally {
    lock.releaseLock();
  }
}

