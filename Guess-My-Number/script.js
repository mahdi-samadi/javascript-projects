'use strict';
// console.log(
//   (document.querySelector('.message').textContent = '😎 Correct number')
// );
// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 23;

document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;
  console.log(typeof guess);
});
