let name_perso = prompt('choisi ton nom jeune homme ');
let job = prompt('choisi ton job : (w)=>Warrior  (M)=>Magic (t)=>thief ');
let choiceW = prompt("choisi ton arme ? (s)=>épée (w)=>baguette (d)=>dague");
let choiceA = prompt("choisi ton armure ? (l)=>(robe) (m)=> Armure clouté (h)=> armure lourde");
let armor;
let weapon;
//***************************choix de l'armure
if(choiceA == "s"){
  armor = {
      name:"Robe de soie",
      phyArmor: 0,
      magArmor: 8
  }
}
else if(choiceA == "m"){
    armor = {
        name:"Armure de cuir",
        phyArmor: 5,
        magArmor: 5
    }
}
else if(choiceA == "h"){
    armor = {
        name:"Armure de plate",
        phyArmor: 8,
        magArmor: 0
    }
}
else{

}
//***************************choix de l'arme
if(choiceW == "s"){
    weapon = {
       name:"épée simple",
       min: 3,
       max:15,
    }
}
else if(choiceW == "d"){
    weapon = {
        name:"dague ",
        min: 1,
        max:5,
     }
}
else if(choiceW == "w"){
    weapon = {
        name:"baguette ",
        min: 3,
        max:8,
     }
}
let player = new Personnage(name_perso,job,weapon,armor);
let goblin = new Enemy('gobelin',25,12,2,5,5,35);

fight(player,goblin);
