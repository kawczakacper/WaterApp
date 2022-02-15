import '../scss/main.scss';
// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();
const buttonAdd = document.querySelector('.button-add--js');
const buttonRemove = document.querySelector('.button-remove--js');
const buttonHistory = document.querySelector('.button-history--js');
const value = document.querySelector('.glass__value--js');
const date = new Date().toISOString().slice(0, 10);
if (!localStorage.getItem(date)) {
  localStorage.setItem(date, 0)
  value.innerHTML = '0';
} else {
value.innerHTML = localStorage.getItem(date);
}
buttonAdd.addEventListener('click', (e) => {
  localStorage.setItem(date, parseInt(localStorage.getItem(date)) + 1)
  value.innerHTML = localStorage.getItem(date);
})
buttonRemove.addEventListener('click', (e) => {
  const currentValue = parseInt(localStorage.getItem(date));
  if(value.innerHTML == 0 ){
      alert("Nie możesz ustawić liczby na minusie!")
  } else {
    localStorage.setItem(date, localStorage.getItem(date) - 1)
    value.innerHTML = localStorage.getItem(date);
}
})



