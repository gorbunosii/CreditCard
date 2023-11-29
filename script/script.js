import {el, setChildren} from '../node_modules/redom/dist/redom.es.js';

const div = el(".wrapper",
 el(".card", [el("p", {className: 'secure'} ,'Secure Checkout'),el(".credit-card",
  [el("span", {className: 'card__number'} ,'xxxx xxxx xxxx xxxx'), el(".card__personal",
  [el("span", {className: 'card__name'} ,'John Doe'), el("span", {className: 'card__date'} ,'04/24')])
]),

el("form", {action: '#', className: 'form', id: 'form'},

el(".form__input-wrap form__input-wrap_holder",
 [el("label", {className: 'form__label form__holder-label'},  "Card Holder"),
  el("input", {type: 'text', className: 'input input__holder'})]), 
  
  el(".form__input-wrap form__input-wrap_number",
  [el("label", {className: 'form__label form__number-label'},  "Card Number"),
   el("input", {type: 'text', className: 'input input__number', id: 'cardNumber', maxlength: '16'})]),

   el(".form__input-wrap form__input-wrap_date",
 [el("label", {className: 'form__label form__date-label'},  "Card Expiry"),
  el("input", {type: 'text', className: 'input input__date', maxlength: '4'})]),

  el(".form__input-wrap form__input-wrap_cvv",
 [el("label", {className: 'form__label form__cvv-label'},  "CVV"),
  el("input", {type: 'text', className: 'input input__cvv'})]),

  el("button", {className: 'form__button'}, "CHECK OUT")

   )]));

setChildren(document.body, div);

const holder = document.querySelector(`.input__holder`);
const number = document.querySelector(`.input__number`);
const date = document.querySelector(`.input__date`);

const numberText = document.querySelector(`.card__number`);
const nameText = document.querySelector(`.card__name`);
const dateText = document.querySelector(`.card__date`);

holder.addEventListener(`input`, () => {
  nameText.textContent = holder.value = holder.value.replace(/[\w-]/gi, '');
});
number.addEventListener(`input`, () => {
  number.value = number.value.replace(/\D/g, '');
  numberText.textContent = number.value.replace(/(\d{4})(?=\d)/g, '$1-');
});
date.addEventListener(`input`, () => {
  date.value = date.value.replace(/\D/g, '');
  dateText.textContent = date.value.replace(/(\d{2})(?=\d)/g, '$1/')
});