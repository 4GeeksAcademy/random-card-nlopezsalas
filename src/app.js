/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //01 | SOLUCIÓN CON ARRAYS
  // let numeros = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  // let suits = ["spade", "heart", "diamond", "club"];

  //01.1 - PRINT CARD - Generar número aleatorio
  //01.2 - PRINT CARD - Generar palo aleatorio

  // function printCard() {
  //   // document.querySelector(#card).classList.add(generateRandomCard(numeros));
  //   // document.querySelector("#number").innerHTML = generateRandomCard(suits);
  // };

  //02 | SOLUCIÓN CON OBJETO CARTA

  let card = {
    numbers: ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"],
    suits: ["spade", "heart", "diamond", "club"]
  };

  function printCard() {
    document.querySelector("#card").className =
      "card " + generateRandomCard(card.suits);
    document.querySelector("#number").innerHTML = generateRandomCard(
      card.numbers
    );
  }

  printCard();

  //BOTÓN
  let button = document.getElementById("btnGenerateCard");
  button.addEventListener("click", function(e) {
    printCard();
  });

  //TEMPORIZADOR CADA 10 Miliseg
  // setInterval(printCard, 10000);

  //TEMPORIZADOR EN UNA PROGRESS BAR
  let progreso = 0;

  let idIterval = setInterval(function() {
    // Aumento en 10 el progeso
    progreso += 10;
    let progressBar = document.getElementById("bar");
    progressBar.style.width = progreso + "%";

    //Si llegó a 100 elimino el interval
    if (progreso == 100) {
      printCard();
      clearInterval(idIterval);
    }
  }, 100);

  const height = document.getElementById("selectHeight");
  const width = document.getElementById("selectWidth");
  const currentCard = document.getElementById("card");

  height.addEventListener("change", updateDimensions);
  width.addEventListener("change", updateDimensions);

  function updateDimensions(e) {
    const dimensionType = e.target.id.includes("Height") ? "height" : "width";
    currentCard.style[dimensionType] =
      e.target.value + (dimensionType === "width" ? "" : "px");
  }
};

function generateRandomCard(array) {
  let indexRandom = Math.floor(Math.random() * array.length);
  return array[indexRandom];
}

//03 | SOLUCIÓN CON DOS FUNCIONES SEPARADAS

//03.1 - Generar número aleatorio
// function generateRamdomNumber() {
//   let numeros = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
//   let indexRandomNum = Math.floor(Math.random() * numeros.length);
//   console.log(indexRandomNum);
//   console.log("Numero de la carta: " + numeros[indexRandomNum]);
//   return numeros[indexRandomNum];
// }

//03.2 - Generar palo aleatorio
// function generateRamdomSuits() {
//   let suits = ["spade", "heart", "diamond", "club"];
//   let indexRandomSuit = Math.floor(Math.random() * suits.length);
//   console.log("Palo: " + suits[indexRandomSuit]);
//   return suits[indexRandomSuit];
// }
