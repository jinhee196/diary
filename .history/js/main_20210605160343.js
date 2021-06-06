const note1 = document.querySelector('.note1');
const note2 = document.querySelector('.note2');
const note3 = document.querySelector('.note3');

const main = document.querySelector('#main');
const morning = document.querySelector('#morning');
const list = document.querySelector('#list');

const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');

// note1.addEventListener('click', () => {

// });


note2.addEventListener('click', ()=>{
    main.style.animation = "fadeOut 1s";
    setTimeout(() => {
      morning.style.animation = "fadeIn 1s";
      setTimeout(() => {
        main.style.display = "none";
        morning.style.display = "block";
        input.focus();
      }, 450)
      let qIdx = 0;
      goNext(qIdx);
    }, 450);
    
});

note3.addEventListener('click', ()=>{
    main.style.animation = "fadeOut 1s";
    setTimeout(() => {
      list.style.animation = "fadeIn 1s";
      setTimeout(() => {
        main.style.display = "none";
        list.style.display = "block";
        input.focus();
      }, 450)
      let qIdx = 0;
      goNext(qIdx);
    }, 450);
    input.focus();
});

function goNext(qIdx){
 
  var item = document.querySelector('.item');
  item.innerHTML = qnaList[qIdx].q;
  for(let i in qnaList[qIdx].a){
    addAnswer(qnaList[qIdx].a[i].answer, qIdx);
  }
}

function onAdd() {
  const text = input.value;
  if (text === '') {
    input.focus();
    return;
  }
  const item = createItem(text); //function
  items.appendChild(item);
  item.scrollIntoView({ block: 'center' });
  input.value = '';
  input.focus();
}

function createItem(text) {
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'item-sub');
  itemRow.innerHTML = text;
  return itemRow;
}

addBtn.addEventListener('click', () => {
  onAdd();
});

input.addEventListener('keypress', event => {
  if (event.key === 'Enter') {
    onAdd();
  }
});

