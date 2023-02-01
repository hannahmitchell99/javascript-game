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
const healthContainer = document.querySelector(".game-container__health");

let userHero = "hello";
let computerHero = "hi";
let playerMove = "playermove";
let computerMove = "computer move";
let currentPlayerHealth = 0;


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
    playerMove = userHero.specialAbility
    console.log(playerMove)
    return playerMove;
    
  }else if(event.target.innerHTML === "Signature Move!"){
    playerMove = userHero.signatureMove
    console.log(playerMove)
    return playerMove;
  }
 
}

//computer move
const computerSelectMove = () =>{
  const random = Math.floor(Math.random()*2)
  if(random ===0){
    computerMove = computerHero.specialAbility
    console.log(computerMove)
    return computerMove
  } else{
    computerMove = computerHero.signatureMove
    console.log(computerMove)
    return computerMove
  }
}

// game functions

const calculatePlayerHealth = () =>{
  if (computerMove === computerHero.specialAbility){
    let computerDamage = computerHero.specialAbilityDamage;
    currentPlayerHealth -= computerDamage
    console.log(currentPlayerHealth)
    return currentPlayerHealth
  } else if (computerMove === computerHero.signatureMove) {
    let computerDamage = computerHero.signatureMoveDamage;
    currentPlayerHealth -= computerDamage
    console.log(currentPlayerHealth)
    return currentPlayerHealth
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
       <h4>Original Health:${superHeroObject.health}</h4>
       <h4>Special Ability:${superHeroObject.specialAbility}</h4>
       <h4>Signature Move:${superHeroObject.signatureMove}</h4>
   </div>
`;
playerCard.innerHTML = playerCardHTML;
};

// display opponent

const displayOpponent = (superHeroObject) => {
  const oppCardHTML = `<div class="opponent-heading">
       <h3 class="opponent-heading__name">${superHeroObject.name}</h3>
   </div>
   <img class="opponent-sprite" src="${superHeroObject.sprite}" alt="${superHeroObject.name} sprite">
   <div class="opponent-abilities">
       <h4>Original Health:${superHeroObject.health}</h4>
       <h4>Special Ability:${superHeroObject.specialAbility}</h4>
       <h4>Signature Move:${superHeroObject.signatureMove}</h4>
   </div>
`;
oppCard.innerHTML = oppCardHTML;
};

// display move choice

const displayMoveChoice = (computerMove, playerMove, currentPlayerHealth) => {
 
  const displayHTML = `<h2>You Chose: ${playerMove} </h2>
 <h2>Opponent Chose: ${computerMove} </h2>
 <h2> Your health is ${userHero.health + currentPlayerHealth}!</h2>
 <h2> Opponent took x damage!</h2>
 <h2>Their health is </h2>`;
 gameDisplay.innerHTML = displayHTML

};



// const displayPlayerChoice = () => {

//   if (displayPlayerC
//   const displayHTML = `<h2>You Chose: ${playerMove} </h2>
//   <h2> Opponent took x damage!</h2>`
//   return gameDisplay.innerHTML =displayOpponent
  
// }

// display player health

const displayPlayerHealth=()=>{
  const displayHTML = `
 <h2> You took x damage!</h2>
 <h2> Your health is ${currentPlayerHealth}</h2>`

 return healthContainer.innerHTML = displayHTML
}


// Events

selectPlayerButtons.forEach((selectPlayerButton) => {
  selectPlayerButton.addEventListener("click", selectSuperhero);
  selectPlayerButton.addEventListener("click", selectOpponent);
});

playButton.addEventListener("click", () => displaySelectedSuperhero(userHero));
playButton.addEventListener("click", () => displayOpponent(computerHero));

specialAbilityButton.addEventListener("click", playerSelectMove)
specialAbilityButton.addEventListener("click", computerSelectMove)
specialAbilityButton.addEventListener("click", calculatePlayerHealth)

signatureMoveButton.addEventListener("click", playerSelectMove)
signatureMoveButton.addEventListener("click", computerSelectMove)
signatureMoveButton.addEventListener("click", calculatePlayerHealth)


signatureMoveButton.addEventListener("click", () => displayMoveChoice(computerMove, playerMove, currentPlayerHealth))
specialAbilityButton.addEventListener("click", () => displayMoveChoice(computerMove, playerMove, currentPlayerHealth))
