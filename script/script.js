import {el, setChildren} from '../node_modules/redom/dist/redom.es.js';
import {cvv, cvc, number, holder} from './script.test.js';

const div = el(".wrapper",
 el(".card", [el("p", {className: 'secure'} ,'Secure Checkout'),el(".credit-card",
  [el("span", {className: 'card__number'} ,'xxxx xxxx xxxx xxxx'), el(".card__personal",
  [el("span", {className: 'card__name'} ,'John Doe'), el("span", {className: 'card__date'} ,'04/24')])
]),

el("form", {action: '#', className: 'form', id: 'form'},

el(".form__input-wrap form__input-wrap_holder",
 [el("label", {className: 'form__label form__holder-label'},  "Card Holder"),
  el("input", {type: 'text', className: 'input input__holder', maxlength: '20'})]), 
  
  el(".form__input-wrap form__input-wrap_number",
  [el("label", {className: 'form__label form__number-label'},  "Card Number"),
   el("input", {type: 'text', className: 'input input__number', id: 'cardNumber', maxlength: '19'})]),

   el(".form__input-wrap form__input-wrap_date",
 [el("label", {className: 'form__label form__date-label'},  "Card Expiry"),
  el("input", {type: 'text', className: 'input input__date', maxlength: '5'})]),

  el(".form__input-wrap form__input-wrap_cvv",
 [el("label", {className: 'form__label form__cvv-label'},  "CVV"),
  el("input", {type: 'text', className: 'input input__cvv', maxlength: '3'})]),

  el("button", {className: 'form__button'}, "CHECK OUT"),

   ),
  
   el("button", {className: 'test'}, "TEST"),
   el("h2",{className: 'h2'}, ""),
  ]));

setChildren(document.body, div);

const holderInput = document.querySelector(`.input__holder`);
const numberInput = document.querySelector(`.input__number`);
const dateInput = document.querySelector(`.input__date`);
const cvvInput = document.querySelector(`.input__cvv`);

const numberText = document.querySelector(`.card__number`);
const nameText = document.querySelector(`.card__name`);
const dateText = document.querySelector(`.card__date`);

holderInput.addEventListener(`input`, () => {
  nameText.textContent = holderInput.value = holderInput.value.replace(/[а-яА-ЯёЁ0-9-?!+-=]/gi, '');
});
numberInput.addEventListener(`input`, () => {
  numberInput.value = numberInput.value.replace(/\D/g, '');
  numberText.textContent = numberInput.value = numberInput.value.replace(/(\d{4})(?=\d)/g, '$1-');
});
dateInput.addEventListener(`input`, () => {
  dateInput.value = dateInput.value.replace(/\D/g, '');
  dateText.textContent = dateInput.value = dateInput.value.replace(/(\d{2})(?=\d)/g, '$1/')
});
cvvInput.addEventListener(`input`, () => {
  cvvInput.value = cvvInput.value.replace(/[а-яА-ЯёЁa-zA-Z-+=!?&]+/g, '')
});

const test = document.querySelector(`.test`);
const h2 = document.querySelector(`.h2`);
test.addEventListener('click', () => {

  const holderValue = holder(holderInput.value);
  const numberValue = number(numberInput.value);
  const dataValue = cvc(dateInput.value);
  const cvvValue = cvv(cvvInput.value);

  if (holderValue === true &&
      numberValue === true &&
      dataValue === true &&
      cvvValue === true) {
    console.log('Всё хорошо');
  } else {
    h2.textContent = `Данные введены некорректно!`;
    setTimeout(() => {
      h2.textContent = ``;
    }, 2000);
  }
});
