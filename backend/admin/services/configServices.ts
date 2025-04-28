const objectConfig = {
  menor2023: {
    name: '2015 - 2023',
    posSlice: 2,
    idAument: 3,
    cc: 4,
    gatiso: 58,
    ultimateAudio: 24
  },
  2024: {
    name: '2024',
    posSlice: 1,
    idAument: 2,
    cc: 3,
    gatiso: 57,
    ultimateAudio: 23
  },
  mayor2024: {
    name: '2025',
    posSlice: 1,
    idAument: 2,
    cc: 2,
    gatiso: 52,
    ultimateAudio: 19
  }
}

abstract class GET_CONFIG {
  static getConfig(name: string): configDto | null {
    let info: any[] = [];
    switch (true) {
      case objectConfig.menor2023.name === name:
        info.push(objectConfig.menor2023.name);
        info.push(objectConfig.menor2023.posSlice);
        info.push(objectConfig.menor2023.idAument);
        info.push(objectConfig.menor2023.cc);
        info.push(objectConfig.menor2023.gatiso);
        info.push(objectConfig.menor2023.ultimateAudio);
        break;
      case objectConfig[2024].name === name:
        info.push(objectConfig[2024].name);
        info.push(objectConfig[2024].posSlice);
        info.push(objectConfig[2024].idAument);
        info.push(objectConfig[2024].cc);
        info.push(objectConfig[2024].gatiso);
        info.push(objectConfig[2024].ultimateAudio);
        break;
      case parseInt(objectConfig.mayor2024.name) < parseInt(name):
        info.push(objectConfig.mayor2024.name.toString());
        info.push(objectConfig.mayor2024.posSlice);
        info.push(objectConfig.mayor2024.idAument);
        info.push(objectConfig.mayor2024.cc);
        info.push(objectConfig.mayor2024.gatiso);
        info.push(objectConfig.mayor2024.ultimateAudio);
        break;
    }
    return new configDto(info[0], info[1], info[2], info[3], info[4], info[5]);
  }
}

export { GET_CONFIG }