const warning = document.querySelector('.warning');
const button = document.querySelector('.warning__button');
const preamble = document.querySelector('.preamble');
const logo = document.querySelector('.logo');
const textPart1 = document.querySelector('.part1');
const textPart2 = document.querySelector('.part2');
const textPart3 = document.querySelector('.part3');
const audio = document.querySelector('.audio');
button.addEventListener('click', () => {
  warning.style.visibility = 'hidden';
  preamble.classList.add('preamble_animation');
  logo.classList.add('logo_animation');
  textPart1.classList.add('part1_animation');
  textPart2.classList.add('part2_animation');
  textPart3.classList.add('part3_animation');
  const interval = 0;
  setTimeout(() => {
    audio.volume = 0.90;
    audio.muted = false;
    audio.play();
    setTimeout(() => {
      const dv = audio.volume / 15;
      interval = setInterval(() => { audio.volume -= dv }, 200)
    }, 102000);
    setTimeout(() => { audio.pause() }, 105000);
  }, 5000);
  clearInterval(interval);
});