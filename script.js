// Task 1
const sentence=["sense.", "make", "all", "will", "This"]

let reverseSentence=(sentence)=>{
     return sentence.reverse();
};
console.log(reverseSentence(sentence));

//Task 2

const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

let greetAliens=(aliens)=>{
    aliens.forEach(element => {
        console.log(`Oh ${element}, we humans offer our unconditional surrender!`)
    });
}

greetAliens(aliens);

//Task 3

const coolStuff = [
    "gameboys",
    "skateboards",
    "backwards hats",
    "my room",
    "temporary tattoos"
  ];
const myStuff = [
    "sweaters",
    "skateboards",
    "family-night",
    "my room"
];

let justCoolStuff=(coolStuff,myStuff)=>{
    return coolStuff.filter(item=>
        myStuff.includes(item)
    )
}

console.log(justCoolStuff(coolStuff, myStuff));


//Task 4

const meal = [
    { name: "arugula", source: "plant" },
    { name: "tomatoes", source: "plant" },
    { name: "lemon", source: "plant" },
    { name: "olive oil", source: "plant" }
];
const dinner = [
    { name: "hamburger", source: "meat" },
    { name: "cheese", source: "dairy" },
    { name: "ketchup", source: "plant" },
    { name: "bun", source: "plant" }
];
  
let isTheDinnerVegan=(arr)=>{
    let bool = true;
    arr.forEach(element => {
        if(element.source!=='plant'){
            bool=false
        }
    });
    return bool;
}

console.log(isTheDinnerVegan(meal));
console.log(isTheDinnerVegan(dinner));
