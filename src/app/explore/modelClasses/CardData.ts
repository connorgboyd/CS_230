export class CardData{
    name: string = "default name";
    mastery: string = "default mastery";
    str: number = 0;
    agi: number = 0;
    int: number = 0;
    frt: number = 0;
    chk: number = 0;
    weapon: string = "default weapon";
    creationDate: string = "28/09/2021 12:00PM";
    updateDate: string = "29/09/2021 12:00AM";

    
    constructor(name: string, mastery: string, str: number, agi: number, int: number, frt: number, chk: number, weapon: string, creationDate: string, updateDate: string){
        this.name = name;
        this.mastery = mastery;
        this.str = str;
        this.agi = agi;
        this.int = int;
        this.frt = frt;
        this.chk = chk;
        this.weapon = weapon;
        this.creationDate = creationDate;
        this.updateDate = updateDate;


    }
}
