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