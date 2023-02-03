import superHeroArray from "./data/superheroes.js";
import confetti from "../node_modules/canvas-confetti/dist/confetti.module.mjs"

// DOM variables

const pickPlayer = document.querySelector(".pick-player");
const playerCard = document.querySelector(".game-container__player-card");
const oppCard = document.querySelector(".game-container__opponent-card");
const gameDisplay = document.querySelector(".game-display");
const chooseMove = document.querySelector(".choose-move");
const newGameButton = document.querySelector("#new-game");
const selectPlayerButtons = document.querySelectorAll(".superhero");
const playButton = document.querySelector(".play");
const specialAbilityButton = document.querySelector("#special-ability-button");
const signatureMoveButton = document.querySelector("#signature-move-button");

let userHero = "hello";
let computerHero = "hi";
let playerMove = "playermove";
let computerMove = "computer move";
let currentPlayerDamage = 0;
let currentComputerDamage = 0;

// Functions

//Assigning superhero and opponent

// user selects their superhero
const selectSuperhero = (event) => {
  for (let index = 0; index < superHeroArray.length; index++) {
    if (event.target.innerHTML === superHeroArray[index].name) {
      userHero = superHeroArray[index];
      superHeroArray.splice(index, 1);
      return userHero;
    }
  }
};

// computer selected superhero

const selectOpponent = () => {
  const random = Math.floor(Math.random() * superHeroArray.length);
  computerHero = superHeroArray[random];
  return computerHero;
};

// Selecting Move functions

//player move

const playerSelectMove = (event) => {
  if (event.target.innerHTML === "Special Ability!") {
    playerMove = userHero.specialAbility;
    return playerMove;
  } else if (event.target.innerHTML === "Signature Move!") {
    playerMove = userHero.signatureMove;
    return playerMove;
  }
};

//computer move
const computerSelectMove = () => {
  const random = Math.floor(Math.random() * 2);
  if (random === 0) {
    computerMove = computerHero.specialAbility;
    return computerMove;
  } else {
    computerMove = computerHero.signatureMove;
    return computerMove;
  }
};

// game functions

// to make it more competitive, the computer can have an added random extra damage 

const calculatePlayerDamage = () => {
  if (computerMove === computerHero.specialAbility) {
    currentPlayerDamage -= computerHero.specialAbilityDamage + Math.floor(Math.random() * 20);
    console.log(currentPlayerDamage)
    return currentPlayerDamage;
  } else if (computerMove === computerHero.signatureMove) {
    currentPlayerDamage -= computerHero.signatureMoveDamage + Math.floor(Math.random() * 5);
    return currentPlayerDamage;
  }
};

const calculateComputerDamage = () => {
  if (playerMove === userHero.specialAbility) {
    currentComputerDamage -= userHero.specialAbilityDamage;
    return currentComputerDamage;
  } else if (playerMove === userHero.signatureMove) {
    currentComputerDamage -= userHero.signatureMoveDamage;
    return currentComputerDamage;
  }
};
//Display Functions

// display selected superhero

const displaySelectedSuperhero = (superHeroObject) => {
  playerCard.innerHTML = `<div class="player-heading">
       <h3 class="player-heading__name">${superHeroObject.name}</h3>
   </div>
   <img class="player-sprite" src="${superHeroObject.sprite}" alt="${superHeroObject.name} sprite">
   <div class="player-abilities">
    <h4>Your starting health is: </h4> <p> ${superHeroObject.health} </p>
    <h4>Your special ability is: </h4> <p>${superHeroObject.specialAbility} </p>
    <h4>Your signature move is: </h4> <p> ${superHeroObject.signatureMove}</p>
   </div>
`;
};

// display opponent

const displayOpponent = (superHeroObject) => {
  oppCard.innerHTML = `<div class="opponent-heading">
       <h3 class="opponent-heading__name">${superHeroObject.name}</h3>
   </div>
   <img class="opponent-sprite" src="${superHeroObject.sprite}" alt="${superHeroObject.name} sprite">
   <div class="opponent-abilities">
       <h4>Their starting health is: </h4> <p> ${superHeroObject.health} </p>
       <h4>Their special ability is: </h4> <p>${superHeroObject.specialAbility} </p>
       <h4>Their signature move is: </h4> <p> ${superHeroObject.signatureMove}</p>
   </div>
`;
};
// display moves

const displayMoveOptions = () =>{
  chooseMove.style.display = "grid";
}

// display move choice, calculate and display health + winners

const displayMoveChoice = (
  computerMove,
  playerMove,
  currentPlayerDamage,
  currentComputerDamage
) => {
  let totalUserHealth = userHero.health + currentPlayerDamage;
  let totalOpponentHealth = computerHero.health + currentComputerDamage;
  if (currentPlayerDamage * -1 >= userHero.health) {
    gameDisplay.innerHTML = `<h2>You Lost! Click new game to try again!</h2>`;
  } else if (currentComputerDamage * -1 >= computerHero.health) {
    gameDisplay.innerHTML = `<h2>You Won! Click new game to defend your title!</h2>`;
    confetti();
    
  } else {
    gameDisplay.innerHTML = `<h2>⚡You chose: </h2> <p> ${playerMove} </p>
    <h2>💥And your opponent chose:</h2><p> ${computerMove} </p>
    <h2>Your health is now </h2><p> ${totalUserHealth}!</p>
    <h2>Opponent health is </h2><p> ${totalOpponentHealth}!</p>`;
  }
};
//hiding items

const toggleHidden = () => {
  pickPlayer.style.display = "none";
};

// refresh function

const refreshPage = () => {
  window.location.reload();
};

// Events

selectPlayerButtons.forEach((selectPlayerButton) => {
  selectPlayerButton.addEventListener("click", selectSuperhero);
  selectPlayerButton.addEventListener("click", selectOpponent);
});

playButton.addEventListener("click", () => displaySelectedSuperhero(userHero));
playButton.addEventListener("click", () => displayOpponent(computerHero));
playButton.addEventListener("click", toggleHidden);
playButton.addEventListener("click", displayMoveOptions)

specialAbilityButton.addEventListener("click", playerSelectMove);
specialAbilityButton.addEventListener("click", computerSelectMove);
specialAbilityButton.addEventListener("click", calculatePlayerDamage);
specialAbilityButton.addEventListener("click", calculateComputerDamage);

signatureMoveButton.addEventListener("click", playerSelectMove);
signatureMoveButton.addEventListener("click", computerSelectMove);
signatureMoveButton.addEventListener("click", calculatePlayerDamage);
signatureMoveButton.addEventListener("click", calculateComputerDamage);

signatureMoveButton.addEventListener("click", () =>
  displayMoveChoice(
    computerMove,
    playerMove,
    currentPlayerDamage,
    currentComputerDamage
  )
);
specialAbilityButton.addEventListener("click", () =>
  displayMoveChoice(
    computerMove,
    playerMove,
    currentPlayerDamage,
    currentComputerDamage
  )
);

newGameButton.addEventListener("click", refreshPage);
