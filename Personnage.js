class Personnage {
    constructor(name,job,w,a){
        this.name = name;
        if(job == "w") {
            this.job = "Warrior";
            this.atk = 15;
            this.def = 18;
            this.agility = 5;
            this.magicAtk = 5;
            this.magicDef = 7;
            this.pvmax = 120;
            this.pv = 120;
            this.listSkill = [];
        }
        else if (job == "m") {
            this.job = "Magician";
            this.atk = 5;
            this.def = 9;
            this.agility = 12;
            this.magicAtk =25;
            this.magicDef = 15;
            this.pvmax = 75;
            this.pv = 75;
            this.listSkill = [];      
        }
        else if (job == "t") {
            this.job = "thief";
            this.atk = 15;
            this.def = 12;
            this.agility = 25;
            this.magicAtk =10;
            this.magicDef = 7;
            this.pvmax = 85;
            this.pv = 85;
            this.listSkill = [];      
        }
        else{
            this.job = "Warrior";
            this.atk = 15;
            this.def = 18;
            this.agility = 5;
            this.magicAtk = 5;
            this.magicDef = 7;
            this.pvmax = 120;
            this.pv = 120;
            this.listSkill = []; 
        }
        this.weapon = w;
        this.armor = a;
            
    }
    status(){
        alert(`name:${this.name} :
        pv:${this.pv} / ${this.pvmax}`  );
    }
    takeDammage(d){
        this.pv - ( - (this.armor.phyArmor + this.def ) );
    }
}