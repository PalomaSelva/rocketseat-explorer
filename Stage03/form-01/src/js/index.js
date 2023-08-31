import IMask from 'imask';

const element = document.getElementById('event-tel');
const maskOptions = {
  mask: '+{55}(00)0000-0000'
};
const mask = IMask(element, maskOptions);
console.log(mask)