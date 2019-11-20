'use strict';

const button = document.querySelector('.form__button');
const inputNumber = document.querySelector('.form__input');
let counter = 0;
const clue = document.querySelector('.text__clue');
const textCounter = document.querySelector('.text__counter');

//Primero hay que generar el número aleatorio

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

const randomNumber = getRandomNumber(100);
console.log(randomNumber);

button.addEventListener('click', getRandomNumber);

//Necesito comparar el número introducido con el número generado, ya que en función de eso aparecerá un texto u otro.

function compareNumbers () {
    if (inputNumber > 100){
        clue.innerHTML = "El número debe estar entre 1 y 100.";
    }
    else if (inputNumber < 1) {
        clue.innerHTML = "El número debe estar entre 1 y 100.";
    }
    else if (inputNumber > randomNumber) {
        clue.innerHTML = "El número es demasiado bajo";
    }
    else if (inputNumber < randomNumber) {
        clue.innerHTML = "El número es demasiado bajo";
    }
    console.log(compare());
}
