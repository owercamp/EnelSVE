interface IAudioFiltered { }

interface IAudioFilteredConstructor {
  new(): IAudioFiltered;
  getAudioFilterOld(id: string, datArray: any, position: number): [];
}