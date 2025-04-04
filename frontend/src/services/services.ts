const unique = (information: any, position: number) => {
  const data: string[] = [];
  const cleanedDataSet = new Set<string>();
  const exp = /[^a-zA-Z]/g;

  information.forEach((items: any) => {
    const originalData = items[position];
    const cleanedData = originalData.replace(exp, '').toUpperCase().trim();

    if (!cleanedDataSet.has(cleanedData)) {
      data.push(originalData.toUpperCase().trim());
      cleanedDataSet.add(cleanedData);
    }
  });

  return data;
};

const filtered = (state: string, registers: any, position: number) => {
  const filtrado = registers.filter((subArray: any) => {
    const element = subArray[position];
    return element && element.includes(state);
  });

  return filtrado;
}

const filteredDifferent = (state: string[], registers: any[], position: number) => {
  return registers.filter((subArray) => {
    const element = subArray[position];

    const containsState = element && state.some(stateValue =>
      String(element).toUpperCase().includes(stateValue.toUpperCase())
    );

    return element && !containsState;
  });
};

const counterCentral = (centrals: string[], registers: any) => {
  let result: any = [];
  centrals.forEach((element: string) => {
    result.push(registers.filter((register: string) => String(register[6]).toUpperCase().trim() === String(element).toUpperCase().trim()).length);
  });
  return result;
}

const normalizeText = (text: string) => {
  return text.normalize("NFD")
    .replace(/([aeiou])([\u0300-\u036f])/gi, '$1')
    .normalize("NFC");
}

export { filtered, filteredDifferent, unique, counterCentral, normalizeText };