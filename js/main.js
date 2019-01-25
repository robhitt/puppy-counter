"use strict";

window.addEventListener('load', app);

function app() {
  const countDown = () => {
    if (counter <= 1) {
      clearInterval(intervalId);
      body.innerHTML = '';
      body.classList.add('sad-puppy')
    }
    counter--;
    timer.innerHTML = counter;
  }

  const stopInterval = () => {
    clearInterval(intervalId);
    body.innerHTML = '';
    body.classList.add('puppy')
  }

  const body = document.querySelector('body'),
        button = document.querySelector('.btn'),
        intervalId = setInterval(countDown, 1000);
  
  let counter = 5,
      timer = document.querySelector('.timer');
  
  timer.innerHTML = counter;
  button.addEventListener('click', stopInterval);
}