const carPush = document.querySelector('#carPush');
const carPop = document.querySelector('#carPop');
const carUnshift = document.querySelector('#carUnshift');
const carShift = document.querySelector('#carShift');

const carDisplay = [];

carPush.addEventListener('click', function () {
  let inputCar = document.querySelector('#inputCar');
  carDisplay.push(inputCar.value);
  let carDisplayElement = document.querySelector('#carDisplay');
  carDisplayElement.textContent = carDisplay;
  inputCar.value = '';
});

carPop.addEventListener('click', function () {
  carDisplay.pop();
  let carDisplayElement = document.querySelector('#carDisplay');
  carDisplayElement.textContent = carDisplay;
  let inputCar = document.querySelector('#inputCar');
  inputCar.value = '';
});

carUnshift.addEventListener('click', function () {
  let inputCar = document.querySelector('#inputCar');
  carDisplay.unshift(inputCar.value);
  let carDisplayElement = document.querySelector('#carDisplay');
  carDisplayElement.textContent = carDisplay;
  inputCar.value = '';
});

carShift.addEventListener('click', function () {
  carDisplay.shift();
  let carDisplayElement = document.querySelector('#carDisplay');
  carDisplayElement.textContent = carDisplay;
  let inputCar = document.querySelector('#inputCar');
  inputCar.value = '';
});