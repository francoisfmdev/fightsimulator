class Enemy {
   
    constructor(name,atk,df,agi,ma,md,hp,sk1,sk2){
    this.name = name;
    this.atk = atk;
    this.def = df;
    this.agility = agi;
    this.magicAtk = ma;
    this.magicDef = md;
    this.pvmax = 120;
    this.pv = hp;
    this.pvmax = hp;
    this.skill1= sk1;
    this.skill2= sk2;
    }

    status(){
        alert(`name:${this.name} :
        pv:${this.pv} / ${this.pxmax}`  );
    }
    takeDammage(d){ 
        let realDammage = ( d -this.def)
        this.pv -  realDammage;
        alert(`${this.name} perd ${realDammage} pv`);
        alert(`${this.name} : ${this.pv}`);
    }
   
}