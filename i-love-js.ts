class ILoveTS {
  public areYouSure: string;

  constructor(seriously: string) {
    this.areYouSure = seriously;
  }

  public TellmeTheTruth(): string {
    return `Of course i'm telling the ${this.areYouSure} i love ts`;
  }
}

const newIloveTS = new ILoveTS("Truth");
