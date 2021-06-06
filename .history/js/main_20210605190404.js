const note1 = document.querySelector('.note1');
const note2 = document.querySelector('.note2');
const note3 = document.querySelector('.note3');

const main = document.querySelector('#main');
const morning = document.querySelector('#morning');
const list = document.querySelector('#list');

const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__submit');
const back = document.querySelector('.fa-chevron-left');
const endPoint = 7;
// note1.addEventListener('click', () => {

// });
let qIdx;
note2.addEventListener('click', ()=>{
    main.style.animation = "fadeOut 1s";
    setTimeout(() => {
      morning.style.animation = "fadeIn 1s";
      setTimeout(() => {
        main.style.display = "none";
        morning.style.display = "block";
        input.focus();
      }, 450)
      qIdx = 0;
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
      
    }, 450);
});


function goNext(qIdx){
  const qna = createQna(qIdx);
  items.appendChild(qna);
  qna.scrollIntoView({ block: 'center' });
  if(qIdx === endPoint){
    console.log('end');
     return;
  }
}
 
function createQna(qIdx) {
  const qnaRow = document.createElement('li');
  qnaRow.setAttribute('class', 'item');
  qnaRow.innerHTML = morningList[qIdx].q;
  console.log(qIdx);
 
  return qnaRow;
  
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
  goNext(++qIdx);

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

back.addEventListener('click', () => {
  main.style.animation = "fadeIn 1s";
  input.value = '';
  items.removeChild();
  
  setTimeout(() => {
    list.style.animation = "fadeOut 1s";
    morning.style.animation = "fadeOut 1s";
    setTimeout(() => {
      main.style.display = "flex";
      list.style.display = "none";
      morning.style.display = "none";
    }, 450)
  }, 450);
});

input.addEventListener('keypress', event => {
  if (event.key === 'Enter') {
    onAdd();
  }
});

