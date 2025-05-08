class STATUS {
  protected healthy: string = 'SANO';
  protected suspect: string = 'SOSPECHOSO';
  protected likely: string = 'PROBABLE';
  protected confirm: string = 'PERDIDA AUDITIVA LABORAL CONFIRMADA';
  protected difference: string = 'SIN ESTADO';

  constructor() {
    {
      this.healthy;
      this.suspect;
      this.likely;
      this.confirm;
      this.difference;
    }
  }

  public getHealthy(): string {
    return this.healthy;
  }

  public getSuspect(): string {
    return this.suspect;
  }

  public getLikely(): string {
    return this.likely;
  }

  public getConfirm(): string {
    return this.confirm;
  }

  public getDifference(): string {
    return this.difference;
  }

  public getAllStates(): string[] {
    return [
      this.healthy,
      this.suspect,
      this.likely,
      this.confirm,
      this.difference
    ];
  }

}

export default STATUS;