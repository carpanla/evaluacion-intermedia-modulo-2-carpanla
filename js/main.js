'use strict';

const inputNumber = document.querySelector('.form__input');
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
    const inputNumberValue = parseInt(inputNumber.value);
    
    if (inputNumberValue > 100) {
        console.log('El número debe estar entre 1 y 100');
        return clue.innerHTML = "El número debe estar entre 1 y 100.";
    }
    else if (inputNumberValue < 1) {
        console.log('El número debe estar entre 1 y 100');
        return clue.innerHTML = "El número debe estar entre 1 y 100.";
    }
    else if (inputNumberValue > randomNumber) {
        console.log('El número es demasiado alto');
        clue.innerHTML = "El número es demasiado alto.";
    }
    else if (inputNumberValue < randomNumber) {
        console.log('El número es demasiado bajo');
        clue.innerHTML = "El número es demasiado bajo.";
    }
    else  if (inputNumberValue === randomNumber){
        clue.innerHTML = "¡¡¡Has ganado campeona!!!";
    }
};
/*if (userNumberValue > 100) {
    console.log('El número debe estar entre 0 y 100.');
    return tipMessage.innerHTML = 'El número debe estar entre 0 y 100.';
} else if (userNumberValue === randomNumber) {
    console.log('Has ganado');
    return tipMessage.innerHTML = 'Has ganado campeona!!!';
} else if (userNumberValue < randomNumber) {
    console.log('Demasiado bajo.');
    return tipMessage.innerHTML = `Demasiado bajo.`;
} else if (userNumberValue > randomNumber) {
    console.log('Demasiado alto.');
    return tipMessage.innerHTML = `Demasiado alto.`;
}*/
button.addEventListener('click', compareNumbers);

//Hago la función contador para que me indique el número de intentos 

function numberCounter (){
    counter = counter + 1;

    textCounter.innerHTML = `Número de intentos: ${counter}`;
}

button.addEventListener('click', numberCounter);