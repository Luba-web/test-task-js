// добавление кнопок
state.forEach((item, index) => {
  const main = document.querySelector('.main');
  const box = document.createElement('div');
  const div = document.createElement('div');
  const button = document.createElement('button');

  box.className = 'main__box';

  box.style.top = `${item.x}%`;
  box.style.left = `${item.y}%`;

  div.className = 'main__hide';
  div.id = index;
  div.textContent = item.text;

  button.className = 'main__btn';
  button.id = 'id' + Math.random().toString(16).slice(2);
  button.textContent = '+';
  button.style.backgroundColor = item.colorLight;

  button.addEventListener('click', (e) => toggleDiv(e.target.id, index));

  document.body.appendChild(main).appendChild(box).append(button, div);
});

// Функция для переключения состояния кнопки и div'а
function toggleDiv(id, index) {
  const button = document.querySelector(`[id=${id}]`);
  const div = document.getElementById(index);

  div.show = !div.show;

  div.style.backgroundColor = state[index].color;
  div.className = div.show ? 'main__show' : 'main__hide';

  if (!div.show) {
    button.textContent = '+';
    button.style.borderRadius = '25px';
    button.style.backgroundColor = state[index].colorLight;
  } else {
    button.textContent = '-';
    button.style.borderRadius = '25px 0 0 25px';
    button.style.backgroundColor = state[index].color;
  }
}
