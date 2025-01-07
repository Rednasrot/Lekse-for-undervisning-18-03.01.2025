const carPush = document.querySelector('#carPush');
const carPop = document.querySelector('#carPop');
const carUnshift = document.querySelector('#carUnshift');
const carShift = document.querySelector('#carShift');

const carDisplay = [];

carPush.addEventListener('click', function () {
  let inputCar = document.querySelector('#inputCar');
  carDisplay.push(inputCar.value);

  let carDisplay = document.querySelector('#carDisplay');
  carDisplay.textContent = carDisplay;

  inputCar.value = '';
});

carPop.addEventListener('click', function () {
  let inputCar = document.querySelector('#inputCar');
  carDisplay.pop(inputCar.value);

  let carDisplay = document.querySelector('#carDisplay');
  carDisplay.textContent = carDisplay;

  inputCar.value = '';
});

carUnshift.addEventListener('click', function () {
  let inputCar = document.querySelector('#inputCar');
  parkingLot.unshift(inputCar.value);

  let carDisplay = document.querySelector('#carDisplay');
  carDisplay.textContent = carDisplay;

  inputCar.value = '';
});

carShift.addEventListener('click', function () {
  let inputCar = document.querySelector('#inputCar');
  carDisplay.shift(inputCar.value);

  let = document.querySelector('#carDisplay');
  carDisplay.textContent = carDisplay;

  inputCar.value = '';
});
