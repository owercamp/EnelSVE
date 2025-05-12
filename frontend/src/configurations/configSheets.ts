import { SheetDTO } from "../Dto/SheetDto";

const sheetConfig = {
  minor2024: {
    definedCase: 59,
    central: 11,
  },
  minor2025: {
    definedCase: 58,
    central: 6,
  },
  mayor2025: {
    definedCase: 50,
    central: 6,
  }
}

abstract class GET_CONFIG {
  static getSheetConfig(year: number, defined: string): SheetDTO {
    let position = 0;
    switch (defined) {
      case 'caso':
        switch (true) {
          case year <= 2023:
            position = sheetConfig.minor2024.definedCase;
            break;
          case year == 2024:
            position = sheetConfig.minor2025.definedCase;
            break;
          case year >= 2025:
            position = sheetConfig.mayor2025.definedCase;
            break;
        }
        break;
      case 'central':
        switch (true) {
          case year <= 2023:
            position = sheetConfig.minor2024.central;
            break;
          case year == 2024:
            position = sheetConfig.minor2025.central;
            break;
          case year >= 2025:
            position = sheetConfig.mayor2025.central;
            break;
        }
        break;
    }

    return new SheetDTO(position);
  }
}

export { GET_CONFIG };