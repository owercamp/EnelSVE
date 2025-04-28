class sheetDto implements ISheet {
  array_Sheets: GoogleAppsScript.Spreadsheet.Sheet[] = [];
  constructor(arrays: GoogleAppsScript.Spreadsheet.Sheet[]) {
    this.array_Sheets = arrays;
  }
}

export default sheetDto;