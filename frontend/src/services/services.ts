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
      String(element).toLowerCase().includes(stateValue.toLowerCase())
    );

    return element && !containsState;
  });
};

export { filtered, filteredDifferent };