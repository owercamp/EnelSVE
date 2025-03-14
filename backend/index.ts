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
      'Verificar Intervención': 'verifiedBatched'
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