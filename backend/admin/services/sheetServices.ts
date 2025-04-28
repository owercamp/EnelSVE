import sheetDto from "../Dto/SheetDto";

abstract class GET_SHEETS {
  constructor() { }

  static getSheets(): sheetDto | any {
    let spreadsheet: GoogleAppsScript.Spreadsheet.Spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    let sheets: GoogleAppsScript.Spreadsheet.Sheet[] = spreadsheet.getSheets();
    return sheets.filter((sheet: GoogleAppsScript.Spreadsheet.Sheet) => {
      const sheetName = sheet.getSheetName();
      return sheetName !== 'INGRESOS' && sheetName !== 'CONFIRMATORIAS' && sheetName !== 'TABLAS MAESTRAS' && sheetName !== 'GRAFICAS' && sheetName !== String(new Date().getFullYear());
    })
  }
}

abstract class GET_AUDIOMETRY_FILTERED implements IAudioFiltered {
  static getAudioFilterOld(id: string, datArray: any, position: number) {
    return datArray.filter((element: any) => parseInt(element[position]) === parseInt(id))
  }
}

export { GET_SHEETS, GET_AUDIOMETRY_FILTERED };