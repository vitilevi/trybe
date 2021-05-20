const btn = document.getElementById('btn');
const result = document.getElementById('result');

let clickCount = 0;

btn.addEventListener('click', () => {
  clickCount += 1;
  result.innerText = clickCount;
});