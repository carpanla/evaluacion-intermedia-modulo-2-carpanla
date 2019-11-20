'use strict';

const inputNumber = document.querySelector('.form__input').value;
const button = document.querySelector('.form__button');
const clue = document.querySelector('.text__clue');
const textCounter = document.querySelector('.text__counter');
let counter = 0;

//Primero hay que generar el número aleatorio

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

const randomNumber = getRandomNumber(100);
console.log(randomNumber);

button.addEventListener('click', getRandomNumber);

//Necesito comparar el número introducido con el número generado, ya que en función de eso aparecerá un mensaje u otro.

function compareNumbers () {
    console.log('llamando');
    if (inputNumber < randomNumber) {
        clue.innerHTML = "El número es demasiado bajo.";
    } 
    else if (inputNumber > randomNumber) {
        clue.innerHTML = "El número es demasiado alto.";
    }
    else if (inputNumber < 1) {
        clue.innerHTML = "El número debe estar entre 1 y 100.";
    }
    else if (inputNumber > 100) {
        clue.innerHTML = "El número debe estar entre 1 y 100.";
    }
    else {
        clue.innerHTML = "¡¡¡Has ganado campeona!!!";
    }
};

button.addEventListener('click', compareNumbers);

//Hago la función contador para que me indique el número de intentos 

function numberCounter (){
    counter = counter + 1;

    textCounter.innerHTML = `Número de intentos: ${counter}`;
}

button.addEventListener('click', numberCounter);