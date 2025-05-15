class InsertDTO {
  protected search: string;
  protected state: string;
  protected id: string;
  protected names: string;
  protected position: string;
  protected typePosition: string;
  protected centralWork: string;
  protected management: string;
  protected dateEgress: string;
  protected yearSeniority: string;
  protected birthOfDate: string;
  protected age: string;
  protected pavilionRight: string;
  protected pavilionLeft: string;
  protected rightDuct: string;
  protected leftDuct: string;
  protected rightMembrane: string;
  protected leftMembrane: string;
  protected audiometryDate: string;
  protected audiometryYear: string;
  protected audiometryMonth: string;
  protected typeExam: string;
  protected D500: string;
  protected D1000: string;
  protected D2000: string;
  protected D3000: string;
  protected D4000: string;
  protected D6000: string;
  protected D8000: string;
  protected I500: string;
  protected I1000: string;
  protected I2000: string;
  protected I3000: string;
  protected I4000: string;
  protected I6000: string;
  protected I8000: string;
  protected currentDbSum: string;
  protected hearingTrend: string;
  protected rightBasalAudio: string;
  protected leftBasalAudio: string;
  protected rightClassification: string;
  protected leftClassification: string;
  protected rightGatiso: string;
  protected leftGatiso: string;
  protected rightCuat: string;
  protected leftCuat: string;
  protected rightCuap: string;
  protected leftCuap: string;
  protected worstEarResult: string;
  protected gatisoResult: string;
  protected caseDefinition: string;
  protected confirmedCase: string;
  protected diagnosis: string;
  protected rightPta: string;
  protected leftPta: string;
  protected lastValidAudiometry: string;
  protected yearlyAudiometry: string;
  protected restAudiometry: string;
  protected confirmatoryAudiometry: string;
  protected orlReferral: string;
  protected reinforceControls: string;
  protected training: string;
  protected riskAssessment: string;
  protected doubleProtection: string;
  protected eppInspection: string;
  protected quietArea: string;
  protected previousAudio: string;

  constructor(
    search: string,
    state: string,
    id: string,
    names: string,
    position: string,
    typePosition: string,
    centralWork: string,
    management: string,
    dateEgress: string,
    yearSeniority: string,
    birthOfDate: string,
    age: string,
    pavilionRight: string,
    pavilionLeft: string,
    rightDuct: string,
    leftDuct: string,
    rightMembrane: string,
    leftMembrane: string,
    audiometryDate: string,
    audiometryYear: string,
    audiometryMonth: string,
    typeExam: string,
    D500: string,
    D1000: string,
    D2000: string,
    D3000: string,
    D4000: string,
    D6000: string,
    D8000: string,
    I500: string,
    I1000: string,
    I2000: string,
    I3000: string,
    I4000: string,
    I6000: string,
    I8000: string,
    currentDbSum: string,
    hearingTrend: string,
    rightBasalAudio: string,
    leftBasalAudio: string,
    rightClassification: string,
    leftClassification: string,
    rightGatiso: string,
    leftGatiso: string,
    rightCuat: string,
    leftCuat: string,
    rightCuap: string,
    leftCuap: string,
    worstEarResult: string,
    gatisoResult: string,
    caseDefinition: string,
    confirmedCase: string,
    diagnosis: string,
    rightPta: string,
    leftPta: string,
    lastValidAudiometry: string,
    yearlyAudiometry: string,
    restAudiometry: string,
    confirmatoryAudiometry: string,
    orlReferral: string,
    reinforceControls: string,
    training: string,
    riskAssessment: string,
    doubleProtection: string,
    eppInspection: string,
    quietArea: string,
    previousAudio: string,
  ) {
    this.search = search;
    this.state = state;
    this.id = id;
    this.names = names;
    this.position = position;
    this.typePosition = typePosition;
    this.centralWork = centralWork;
    this.management = management;
    this.dateEgress = dateEgress;
    this.yearSeniority = yearSeniority;
    this.birthOfDate = birthOfDate;
    this.age = age;
    this.pavilionRight = pavilionRight;
    this.pavilionLeft = pavilionLeft;
    this.rightDuct = rightDuct;
    this.leftDuct = leftDuct;
    this.rightMembrane = rightMembrane;
    this.leftMembrane = leftMembrane;
    this.audiometryDate = audiometryDate;
    this.audiometryYear = audiometryYear;
    this.audiometryMonth = audiometryMonth;
    this.typeExam = typeExam;
    this.D500 = D500;
    this.D1000 = D1000;
    this.D2000 = D2000;
    this.D3000 = D3000;
    this.D4000 = D4000;
    this.D6000 = D6000;
    this.D8000 = D8000;
    this.I500 = I500;
    this.I1000 = I1000;
    this.I2000 = I2000;
    this.I3000 = I3000;
    this.I4000 = I4000;
    this.I6000 = I6000;
    this.I8000 = I8000;
    this.currentDbSum = currentDbSum;
    this.hearingTrend = hearingTrend;
    this.rightBasalAudio = rightBasalAudio;
    this.leftBasalAudio = leftBasalAudio;
    this.rightClassification = rightClassification;
    this.leftClassification = leftClassification;
    this.rightGatiso = rightGatiso;
    this.leftGatiso = leftGatiso;
    this.rightCuat = rightCuat;
    this.leftCuat = leftCuat;
    this.rightCuap = rightCuap;
    this.leftCuap = leftCuap;
    this.worstEarResult = worstEarResult;
    this.gatisoResult = gatisoResult;
    this.caseDefinition = caseDefinition;
    this.confirmedCase = confirmedCase;
    this.diagnosis = diagnosis;
    this.rightPta = rightPta;
    this.leftPta = leftPta;
    this.lastValidAudiometry = lastValidAudiometry;
    this.yearlyAudiometry = yearlyAudiometry;
    this.restAudiometry = restAudiometry;
    this.confirmatoryAudiometry = confirmatoryAudiometry;
    this.orlReferral = orlReferral;
    this.reinforceControls = reinforceControls;
    this.training = training;
    this.riskAssessment = riskAssessment;
    this.doubleProtection = doubleProtection;
    this.eppInspection = eppInspection;
    this.quietArea = quietArea;
    this.previousAudio = previousAudio;
  }
}

export default InsertDTO;