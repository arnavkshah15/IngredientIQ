const form = document.querySelector('#calorie-form');

form.addEventListener('submit', event => {
  event.preventDefault();
  const mincal = document.querySelector('#mincal').value;
  const maxcal = document.querySelector('#maxcal').value;
  window.location.href = `calrecipe.html?maxcal=${maxcal}&mincal=${mincal}`;
});