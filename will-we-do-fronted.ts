class Probably {
    youSure: string;

    constructor(yesIm: string) {
        this.youSure = yesIm;
    }

    public trolom():string {
        return `Are you sure that you will work as fronted developer with react and TS? ${this.youSure}`
    }

}

const newP = new Probably('Yes sir');
