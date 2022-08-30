const btn = document.querySelector('button');

btn.style.left = window.innerWidth / 2 - btn.clientWidth / 2 + 'px';
btn.style.top = window.innerHeight / 2 - btn.clientHeight / 2 + 'px';

const padding = 12;

btn.addEventListener('click', () => {
  alert('Noo)) You did it');
});

const moveButton = () => {
  btn.style.left =
    Math.floor(Math.random() * (window.innerWidth - btn.clientWidth)) + 'px';

  btn.style.top =
    Math.floor(Math.random() * (window.innerHeight - btn.clientHeight)) + 'px';
};

document.addEventListener(
  'mousemove',
  ({ clientX: mouseX, clientY: mouseY }) => {
    const rect = btn.getBoundingClientRect();
    if (
      mouseX >= rect.x - padding &&
      mouseX <= rect.right + padding &&
      mouseY >= rect.y - padding &&
      mouseY <= rect.bottom + padding
    ) {
      moveButton();
    }
  }
);

window.addEventListener('resize', moveButton);
