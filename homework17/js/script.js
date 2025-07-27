
const textInput = document.getElementById('text-input');
const changeTextBtn = document.getElementById('change-text-btn');

changeTextBtn.addEventListener('click', () => {
    changeTextBtn.textContent = textInput.value;
});

const imageToChange = document.getElementById('image-to-change');
imageToChange.src = 'https://via.placeholder.com/300/FF0000';

const linkToChange = document.getElementById('link-to-change');
linkToChange.href = 'https://www.bing.com';

const imageForAlt = document.getElementById('image-for-alt');
imageForAlt.alt = 'Новий опис зображення';

const listToChange = document.getElementById('list-to-change');
const firstListItem = listToChange.querySelector('li');
firstListItem.textContent = 'Новий текст першого елемента';