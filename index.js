//Create class
class createHero{
    constructor(heroName, heroAge, heroType){
        this.name = heroName
        this.age = heroAge
        this.type = heroType        
    }
    attackType(){
        switch(this.type){
            case "Warrior":
                return "Sword"
            case "Wizard":
            case "Mage":
                return "Magic"
            case "Monk":
                return "Martial Arts"
            case "Ninja":
                return "Shuriken"
            default:
                return "Default Attack"
        }
    }
    attack(){
        this.attack = this.attackType(this.type)
        console.log(`${this.type} has attacked using ${this.attack}`)
    }
    heroInfo(){
        console.log("==============================================")
        console.log("Hero info")
        console.log("Name: " + this.name)
        console.log("Age: " + this.age)
    }
}

//Create object
let pedroMonk = new createHero("Pedro", 24, "Monk")

//Object functions
pedroMonk.heroInfo()
pedroMonk.attack()

//Test array with different classes
let types = ["Mage", "Monk", "Warrior", "Wizard", "Ninja", "Guardian"]

for (let i in types){
    i = new createHero("Test " + types[i], (30 + parseInt(i)), types[i])
    i.heroInfo()
    i.attack()
}