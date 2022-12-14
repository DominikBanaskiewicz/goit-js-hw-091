const btnStart = document.querySelector('body :nth-child(2)');
const btnStop = document.querySelector('body :nth-child(3)');
const body = document.querySelector('body');
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let intervalId = null;

const stopInterval = () => {
  clearInterval(intervalId);
};
const startInterval = () => {
  if (intervalId) clearInterval(intervalId);

  intervalId = setInterval(() => {
    body.setAttribute('style', 'background-color:' + getRandomHexColor());
  }, 1000);
};

btnStart.addEventListener('click', () => {
  btnStart.disabled = true;
  btnStart.setAttribute('style', 'pointer-events: ' + 'none;');
  startInterval();
});

btnStop.addEventListener('click', () => {
  btnStart.disabled = false;
  btnStart.removeAttribute('style', 'pointer-events: ' + 'none;');
  stopInterval(intervalId);
});
