import superHeroArray from "./data/superheroes.js";

// DOM variables
const gameContainer = document.querySelector(".game-container");
const playerCard = document.querySelector(".game-container__player-card");
const oppCard = document.querySelector(".game-container__opponent-card");
const gameDisplay = document.querySelector(".game-container__display");
const newGameButton = document.querySelector("#new-game");
const selectPlayerButtons = document.querySelectorAll(".superhero");
const playButton = document.querySelector(".play");
const specialAbilityButton = document.querySelector("#special-ability-button");
const signatureMoveButton = document.querySelector("#signature-move-button");

let userHero = "hello";
let computerHero = "hi";

// Functions

//Assigning superhero and opponent

// user selects their superhero
const selectSuperhero = (event) => {
  for (let index = 0; index < superHeroArray.length; index++) {
    if (event.target.innerHTML === superHeroArray[index].name) {
      console.log(superHeroArray[index]);
      userHero = superHeroArray[index];
      return userHero;
    }
  }
};

// computer selected superhero

const selectOpponent = () => {
  const random = Math.floor(Math.random() * superHeroArray.length);
  console.log(superHeroArray[random]);
  computerHero = superHeroArray[random];
  return computerHero;
};

// Selecting Move functions

//player move

const playerSelectMove = (event) =>{
  if(event.target.innerHTML === "Special Ability!"){
    let playerMove = userHero.specialAbilityDamage
    console.log(playerMove)
    return playerMove
    
  }else if(event.target.innerHTML === "Signature Move!"){
    let playerMove = userHero.signatureMoveDamage
    console.log(playerMove)
    return playerMove
  }
 
}

//computer move
const computerSelectMove = () =>{
  const random = Math.floor(Math.random()*2)
  if(random ===0){
    let computerMove = computerHero.specialAbilityDamage
    console.log(computerMove)
    return computerMove
  } else{
    let computerMove = computerHero.signatureMoveDamage
    console.log(computerMove)
    return computerMove
  }
}

//Display Functions

// display selected superhero

const displaySelectedSuperhero = (superHeroObject) => {
  const playerCardHTML = `<div class="player-heading">
       <h3 class="player-heading__name">${superHeroObject.name}</h3>
   </div>
   <img class="player-sprite" src="${superHeroObject.sprite}" alt="${superHeroObject.name} sprite">
   <div class="player-abilities">
       <h4>Health:${superHeroObject.health}</h4>
       <h4>Special Ability:${superHeroObject.specialAbility}</h4>
       <h4>Signature Move:${superHeroObject.signatureMove}</h4>
   </div>
`;
  return (playerCard.innerHTML = playerCardHTML);
};

// display opponent

const displayOpponent = (superHeroObject) => {
  const oppCardHTML = `<div class="opponent-heading">
       <h3 class="opponent-heading__name">${superHeroObject.name}</h3>
   </div>
   <img class="opponent-sprite" src="${superHeroObject.sprite}" alt="${superHeroObject.name} sprite">
   <div class="opponent-abilities">
       <h4>Health:${superHeroObject.health}</h4>
       <h4>Special Ability:${superHeroObject.specialAbility}</h4>
       <h4>Signature Move:${superHeroObject.signatureMove}</h4>
   </div>
`;
  return (oppCard.innerHTML = oppCardHTML);
};

// open display
const displayMoveChoice = () => {
  const displayHTML = `<h2>You Chose:</h2>
 <h2>Opponent Chose: </h2>
 <h2> You took x damage!</h2>
 <h2> Opponent took x damage!</h2>`;
  return (gameDisplay.innerHTML = displayHTML);
};


// Events

selectPlayerButtons.forEach((selectPlayerButton) => {
  selectPlayerButton.addEventListener("click", selectSuperhero);
  selectPlayerButton.addEventListener("click", selectOpponent);
});

playButton.addEventListener("click", () => displaySelectedSuperhero(userHero));
playButton.addEventListener("click", () => displayOpponent(computerHero));

specialAbilityButton.addEventListener("click", playerSelectMove)
specialAbilityButton.addEventListener("click", computerSelectMove)

signatureMoveButton.addEventListener("click", playerSelectMove)
signatureMoveButton.addEventListener("click", computerSelectMove)