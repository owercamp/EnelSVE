class BOOK {
  protected company: string = 'NOMBRE CONTRATO';
  protected origin: string = 'ORIGEN';
  protected destiny: string = 'DESTINO';
  protected city: string = 'CIUDAD';
  protected admission: string = 'INGRESO';
  protected examType: string = 'TIPO EXAMEN';
  protected date: string = 'FECHA';
  protected patient: string = 'PACIENTE';
  protected IDNumber: string = 'NRO IDENTIFICACION';
  protected age: string = 'EDAD';
  protected age_range: string = 'RANGO_EDAD';
  protected stratum: string = 'ESTRATO';
  protected gender: string = 'GENERO';
  protected children: string = 'NRO HIJOS';
  protected race: string = 'RAZA';
  protected maritalStatus: string = 'ESTADO CIVIL';
  protected schooling: string = 'ESCOLARIDAD';
  protected position: string = 'CARGO';
  protected labDuration: string = 'LAB DURACION EN AÑOS';
  protected seniority: string = 'ANTIGUEDAD';
  protected eppAuditory: string = 'EPP ESPECIFICO / AUDITIVO';
  protected eppAuditoryCup: string = 'EPP ESPECIFICO / AUDITIVO COPA';
  protected eppAuditoryInsertion: string = 'EPP ESPECIFICO / AUDITIVO INSERCION';
  protected eppAuditoryDouble: string = 'EPP ESPECIFICO / AUDITIVO DOBLE';
  protected auricleAuricEarRight: string = 'PABELLON AURIC_ OIDO DER_';
  protected auricleAuricleRightObs: string = 'PABELLON AURIC_ OIDO DER_ OBS';
  protected auricleAuricleLeftEar: string = 'PABELLON AURIC_ OIDO IZQ_';
  protected auricleAuricleLeftEarObs: string = 'PABELLON AURIC_ OIDO IZQ_ OBS';
  protected auditoryCanalRightEar: string = 'CONDUCTO AUDIT_ OIDO DER_';
  protected auditoryCanalRightEarObs: string = 'CONDUCTO AUDIT_ OIDO DER_ OBS';
  protected auditoryCanalLeftEar: string = 'CONDUCTO AUDIT_ OIDO IZQ_';
  protected auditoryCanalLeftEarObs: string = 'CONDUCTO AUDIT_ OIDO IZQ_ OBS';
  protected tympanicMembraneLeftEar: string = 'MEMBRANA TIMP_ OIDO DER';
  protected tympanicMembraneLeftEarObs: string = 'MEMBRANA TIMP_ OIDO DER_ OBS';
  protected tympanicMembraneRightEar: string = 'MEMBRANA TIMP_ OIDO IZQ';
  protected tympanicMembraneRightEarObs: string = 'MEMBRANA TIMP_ OIDO IZQ_ OBS';
  protected typeOfExam: string = 'TIPO DE EXAMEN';
  protected od500: string = 'OD 500';
  protected od1000: string = 'OD 1000';
  protected od2000: string = 'OD 2000';
  protected od3000: string = 'OD 3000';
  protected od4000: string = 'OD 4000';
  protected od6000: string = 'OD 6000';
  protected od8000: string = 'OD 8000';
  protected ptaOd: string = 'PTA OD';
  protected oi500: string = 'OI 500';
  protected oi1000: string = 'OI 1000';
  protected oi2000: string = 'OI 2000';
  protected oi3000: string = 'OI 3000';
  protected oi4000: string = 'OI 4000';
  protected oi6000: string = 'OI 6000';
  protected oi8000: string = 'OI 8000';
  protected ptaOi: string = 'PTA OI';
  protected controlAsPerPve: string = 'CONTROL SEGUN PVE';
  protected confirmatory: string = 'CONFIRMATORIA';
  protected referralOrl: string = 'REMISION ORL';
  protected complementaryTests: string = 'PRUEBAS COMPLEMENTARIAS';
  protected earCleaning: string = 'LIMPIEZA DE OIDO';
  protected odCleaning: string = 'LIMPIEZA OD';
  protected oiCleaning: string = 'LIMPIEZA OI';
  protected extralabHearingRest: string = 'REPOSO AUDITIVO EXTRALAB';
  protected rotatingHeadset: string = 'ROTAR DIADEMA TELEFONICA';
  protected drivingWithWindowsClosed: string = 'CONDUCIR CON VENTANAS CERRADAS';
  protected useOfHearingEpp: string = 'USO DE EPP AUDITIVO';
  protected monthlyCheckUps: string = 'CONTROLES MENSUALES';
  protected bimonthlyCheckUps: string = 'CONTROLES_BIMESTRALES';
  protected quarterlyCheckUps: string = 'CONTROLES TRIMESTRALES';
  protected sixMonthCheckUps: string = 'CONTROLES 6 MESES';
  protected oneYearCheckUps: string = 'CONTROLES 1 AÑO';
  protected ppalDiag: string = 'DIAG PPAL';
  protected internalDiag: string = 'DIAG INTERNO';
  protected diagGatiso: string = 'DIAG GATI-SO';
  protected dateOfBirth: string = 'FECHA DE NACIMIENTO';
  constructor() {
    this.company;
    this.origin;
    this.destiny;
    this.city;
    this.admission;
    this.examType;
    this.date;
    this.patient;
    this.IDNumber;
    this.age;
    this.age_range;
    this.stratum;
    this.gender;
    this.children;
    this.race;
    this.maritalStatus;
    this.schooling;
    this.position;
    this.labDuration;
    this.seniority;
    this.eppAuditory;
    this.eppAuditoryCup;
    this.eppAuditoryInsertion;
    this.eppAuditoryDouble;
    this.auricleAuricEarRight;
    this.auricleAuricleRightObs;
    this.auricleAuricleLeftEar;
    this.auricleAuricleLeftEarObs;
    this.auditoryCanalRightEar;
    this.auditoryCanalRightEarObs;
    this.auditoryCanalLeftEar;
    this.auditoryCanalLeftEarObs;
    this.tympanicMembraneLeftEar;
    this.tympanicMembraneLeftEarObs;
    this.tympanicMembraneRightEar;
    this.tympanicMembraneRightEarObs;
    this.typeOfExam;
    this.od500;
    this.od1000;
    this.od2000;
    this.od3000;
    this.od4000;
    this.od6000;
    this.od8000;
    this.ptaOd;
    this.oi500;
    this.oi1000;
    this.oi2000;
    this.oi3000;
    this.oi4000;
    this.oi6000;
    this.oi8000;
    this.ptaOi;
    this.controlAsPerPve;
    this.confirmatory;
    this.referralOrl;
    this.complementaryTests;
    this.earCleaning;
    this.odCleaning;
    this.oiCleaning;
    this.extralabHearingRest;
    this.rotatingHeadset;
    this.drivingWithWindowsClosed;
    this.useOfHearingEpp;
    this.monthlyCheckUps;
    this.bimonthlyCheckUps;
    this.quarterlyCheckUps;
    this.sixMonthCheckUps;
    this.oneYearCheckUps;
    this.ppalDiag;
    this.internalDiag;
    this.diagGatiso;
    this.dateOfBirth;
  }

  public getCompany(): string {
    return this.company;
  }

  public getOrigin(): string {
    return this.origin;
  }

  public getDestiny(): string {
    return this.destiny;
  }

  public getCity(): string {
    return this.city;
  }

  public getAdmission(): string {
    return this.admission;
  }

  public getExamType(): string {
    return this.examType;
  }

  public getDate(): string {
    return this.date;
  }

  public getPatient(): string {
    return this.patient;
  }

  public getIDNumber(): string {
    return this.IDNumber;
  }

  public getAge(): string {
    return this.age;
  }

  public getAgeRange(): string {
    return this.age_range;
  }

  public getStratum(): string {
    return this.stratum;
  }

  public getGender(): string {
    return this.gender;
  }

  public getChildren(): string {
    return this.children;
  }

  public getRace(): string {
    return this.race;
  }

  public getMaritalStatus(): string {
    return this.maritalStatus;
  }

  public getSchooling(): string {
    return this.schooling;
  }

  public getPosition(): string {
    return this.position;
  }

  public getLabDuration(): string {
    return this.labDuration;
  }

  public getSeniority(): string {
    return this.seniority;
  }

  public getEppAuditory(): string {
    return this.eppAuditory;
  }

  public getEppAuditoryCup(): string {
    return this.eppAuditoryCup;
  }

  public getEppAuditoryInsertion(): string {
    return this.eppAuditoryInsertion;
  }

  public getEppAuditoryDouble(): string {
    return this.eppAuditoryDouble;
  }

  public getAuricleAuricEarRight(): string {
    return this.auricleAuricEarRight;
  }

  public getAuricleAuricleRightObs(): string {
    return this.auricleAuricleRightObs;
  }

  public getAuricleAuricleLeftEar(): string {
    return this.auricleAuricleLeftEar;
  }

  public getAuricleAuricleLeftEarObs(): string {
    return this.auricleAuricleLeftEarObs;
  }

  public getAuditoryCanalRightEar(): string {
    return this.auditoryCanalRightEar;
  }

  public getAuditoryCanalRightEarObs(): string {
    return this.auditoryCanalRightEarObs;
  }

  public getAuditoryCanalLeftEar(): string {
    return this.auditoryCanalLeftEar;
  }

  public getAuditoryCanalLeftEarObs(): string {
    return this.auditoryCanalLeftEarObs;
  }

  public getTympanicMembraneLeftEar(): string {
    return this.tympanicMembraneLeftEar;
  }

  public getTympanicMembraneLeftEarObs(): string {
    return this.tympanicMembraneLeftEarObs;
  }

  public getTympanicMembraneRightEar(): string {
    return this.tympanicMembraneRightEar;
  }

  public getTympanicMembraneRightEarObs(): string {
    return this.tympanicMembraneRightEarObs;
  }

  public getTypeOfExam(): string {
    return this.typeOfExam;
  }

  public getOd500(): string {
    return this.od500;
  }

  public getOd1000(): string {
    return this.od1000;
  }

  public getOd2000(): string {
    return this.od2000;
  }

  public getOd3000(): string {
    return this.od3000;
  }

  public getOd4000(): string {
    return this.od4000;
  }

  public getOd6000(): string {
    return this.od6000;
  }

  public getOd8000(): string {
    return this.od8000;
  }

  public getPtaOd(): string {
    return this.ptaOd;
  }

  public getOi500(): string {
    return this.oi500;
  }

  public getOi1000(): string {
    return this.oi1000;
  }

  public getOi2000(): string {
    return this.oi2000;
  }

  public getOi3000(): string {
    return this.oi3000;
  }

  public getOi4000(): string {
    return this.oi4000;
  }

  public getOi6000(): string {
    return this.oi6000;
  }

  public getOi8000(): string {
    return this.oi8000;
  }

  public getPtaOi(): string {
    return this.ptaOi;
  }

  public getControlAsPerPve(): string {
    return this.controlAsPerPve;
  }

  public getConfirmatory(): string {
    return this.confirmatory;
  }

  public getReferralOrl(): string {
    return this.referralOrl;
  }

  public getComplementaryTests(): string {
    return this.complementaryTests;
  }

  public getEarCleaning(): string {
    return this.earCleaning;
  }

  public getOdCleaning(): string {
    return this.odCleaning;
  }

  public getOiCleaning(): string {
    return this.oiCleaning;
  }

  public getExtralabHearingRest(): string {
    return this.extralabHearingRest;
  }

  public getRotatingHeadset(): string {
    return this.rotatingHeadset;
  }

  public getDrivingWithWindowsClosed(): string {
    return this.drivingWithWindowsClosed;
  }

  public getUseOfHearingEpp(): string {
    return this.useOfHearingEpp;
  }

  public getMonthlyCheckUps(): string {
    return this.monthlyCheckUps;
  }

  public getBimonthlyCheckUps(): string {
    return this.bimonthlyCheckUps;
  }

  public getQuarterlyCheckUps(): string {
    return this.quarterlyCheckUps;
  }

  public getSixMonthCheckUps(): string {
    return this.sixMonthCheckUps;
  }

  public getOneYearCheckUps(): string {
    return this.oneYearCheckUps;
  }

  public getPpalDiag(): string {
    return this.ppalDiag;
  }

  public getInternalDiag(): string {
    return this.internalDiag;
  }

  public getDiagGatiso(): string {
    return this.diagGatiso;
  }

  public getDateOfBirth(): string {
    return this.dateOfBirth;
  }

  public getAll(): Array<string> {
    return [
      this.company,
      this.origin,
      this.destiny,
      this.city,
      this.admission,
      this.examType,
      this.date,
      this.patient,
      this.IDNumber,
      this.age,
      this.age_range,
      this.stratum,
      this.gender,
      this.children,
      this.race,
      this.maritalStatus,
      this.schooling,
      this.position,
      this.labDuration,
      this.seniority,
      this.eppAuditory,
      this.eppAuditoryCup,
      this.eppAuditoryInsertion,
      this.eppAuditoryDouble,
      this.auricleAuricEarRight,
      this.auricleAuricleRightObs,
      this.auricleAuricleLeftEar,
      this.auricleAuricleLeftEarObs,
      this.auditoryCanalRightEar,
      this.auditoryCanalRightEarObs,
      this.auditoryCanalLeftEar,
      this.auditoryCanalLeftEarObs,
      this.tympanicMembraneLeftEar,
      this.tympanicMembraneLeftEarObs,
      this.tympanicMembraneRightEar,
      this.tympanicMembraneRightEarObs,
      this.typeOfExam,
      this.od500,
      this.od1000,
      this.od2000,
      this.od3000,
      this.od4000,
      this.od6000,
      this.od8000,
      this.ptaOd,
      this.oi500,
      this.oi1000,
      this.oi2000,
      this.oi3000,
      this.oi4000,
      this.oi6000,
      this.oi8000,
      this.ptaOi,
      this.controlAsPerPve,
      this.confirmatory,
      this.referralOrl,
      this.complementaryTests,
      this.earCleaning,
      this.odCleaning,
      this.oiCleaning,
      this.extralabHearingRest,
      this.rotatingHeadset,
      this.drivingWithWindowsClosed,
      this.useOfHearingEpp,
      this.monthlyCheckUps,
      this.bimonthlyCheckUps,
      this.quarterlyCheckUps,
      this.sixMonthCheckUps,
      this.oneYearCheckUps,
      this.ppalDiag,
      this.internalDiag,
      this.diagGatiso,
      this.dateOfBirth
    ];
  }

}

export default BOOK;