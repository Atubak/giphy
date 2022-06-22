import './style.css';

async function fetchGif(searchTerm = 'lol') {
  const url = `https://api.giphy.com/v1/gifs/translate?api_key=rpbWQ0CSEoOJ4QMjk94L3bhXndUqX44E&s=${searchTerm}`;

  const response = await fetch(url, { mode: 'cors' });
  const gifData = await response.json();
  img.src = gifData.data.images.original.url;
}

function inputGif(e) {
  e.preventDefault();
  // use this keyword to get the dom element that had the eventlistener on it
  // and find the first input element.
  const searchTerm = this.input.value ? this.input.value : 'idk';
  fetchGif(searchTerm);
}

function render() {
  const img = document.createElement('img');
  img.id = 'img';

  const form = document.createElement('form');
  form.id = 'form';

  const btn = document.createElement('input');
  btn.id = 'btn';
  btn.textContent = 'click for another one!';
  btn.type = 'submit';

  const input = document.createElement('input');
  input.id = 'input';

  form.appendChild(input);
  form.appendChild(document.createElement('br'));
  form.appendChild(btn);

  document.body.appendChild(img);
  document.body.appendChild(document.createElement('br'));
  document.body.appendChild(form);

  form.addEventListener('submit', inputGif);
}

render();
fetchGif();
