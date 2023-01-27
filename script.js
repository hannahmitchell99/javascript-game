import superHeroArray from "./data/superheroes.js";

// DOM variables
const gameContainer = document.querySelector(".game-container");
const playerCard = document.querySelector(".game-container__player-card");
const oppCard = document.querySelector(".game-container__opponent-card");
const gameDisplay = document.querySelector(".game-container__display");
const newGameButton = document.querySelector("#new-game");
const selectPlayerButtons = document.querySelectorAll(".superhero");

// const harleyQuinn = document.querySelector("#harley-quinn")
// const storm = document.querySelector("#storm")
// const wonderWoman = document.querySelector("#wonder-woman")
// const spiderMan = document.querySelector("#spider-man")
// const theHulk = document.querySelector("#the-hulk")
// const wolverine = document.querySelector("#wolverine")

// Functions

let userHero = ""
const selectSuperhero = (event) => {
  for (let index = 0; index < superHeroArray.length; index++) {
    if (event.target.innerHTML === superHeroArray[index].name) {
      console.log(superHeroArray[index].name)
      return userHero = superHeroArray[index].name
    }
  }
};


// Events

selectPlayerButtons.forEach((selectPlayerButton) => {
  selectPlayerButton.addEventListener("click", selectSuperhero);
});

console.log(userHero)

//console.log(superHeroArray[0].signatureMove)
