const note1 = document.querySelector('.note1');
const note2 = document.querySelector('.note2');

const main = document.querySelector('#main');
const morning = document.querySelector('#morning');
const list = document.querySelector('#list');

const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__submit');
const back = document.querySelector('.fa-chevron-left');

const daily = document.querySelector('#daily');
const daily__weather = document.querySelector('.daily__weather');
const daily__emotion = document.querySelector('.daily__emotion');
const daily__Note = document.querySelector('.daily__Note');
const daily__submit = document.querySelector('.daily__submit');
const textarea = document.querySelector('.daily__text');
const daily__title = document.querySelector('.daily__title');
const endPoint = 8;

let qIdx;
note1.addEventListener('click', () => {
  main.style.animation = "fadeOut 1s";
  setTimeout(() => {
    daily.style.animation = "fadeIn 1s";
    daily__weather.style.animation = "fadeIn 1s";
    setTimeout(() => {
      main.style.display = "none";
      daily.style.display = "block";
      daily__weather.style.display = "block";
    }, 450)
    qIdx = 0;
    dailyNext(qIdx);
  }, 450);
});


function addAnswer(answerText, qIdx){
  const answer = document.createElement('button');
  answer.classList.add('answerList');
  daily__weather.appendChild(answer);
  answer.innerHTML = `<img src="${answerText}" alt=""></img>`;


  answer.addEventListener('click', ()=>{
    let children = document.querySelectorAll('.answerList');
    for( let i = 0; i < children.length; i++) {
         children[i].disabled = true;
        //  children[i].style.display = 'none';
         daily__weather.innerHTML = '';
    }

    dailyNext(++qIdx);
  });

}


function dailyNext(qIdx){
  if(qIdx === 2){
    goResult();
    return;
  }
    const dailyQ = document.createElement('h2');
    dailyQ.setAttribute('class', 'daily__weather-Q');
    daily__weather.appendChild(dailyQ);
    dailyQ.innerHTML = dailyNote[qIdx].q;
    for(let i in dailyNote[qIdx].a){
      addAnswer(dailyNote[qIdx].a[i].answer, qIdx);
    }
  }



function goResult() {
  console.log('result');
  daily__weather.style.display = 'none';
  daily__emotion.style.display = 'none';
  daily__Note.style.display = 'block';
  textarea.focus();
}

daily__submit.addEventListener('click', ()=>{
  alert('저장되었습니다.');
});

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



function goNext(qIdx){
  if(qIdx === endPoint){
    console.log('end');
    return;
  }
  const qna = createQna(qIdx);
  items.appendChild(qna);
  qna.scrollIntoView({ block: 'center' });
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

input.addEventListener('keypress', event => {
  if (event.key === 'Enter') {
    onAdd();
  }
});

back.addEventListener('click', () => {
  main.style.animation = "fadeIn 1s";
  input.value = '';
  items.innerHTML = '';
  textarea.value = '';
  daily__title.value = '';
  daily__emotion.innerHTML = '';
  daily__weather.innerHTML = '';
  
  setTimeout(() => {
    list.style.animation = "fadeOut 1s";
    morning.style.animation = "fadeOut 1s";
    daily.style.animation = "fadeOut 1s";
    setTimeout(() => {
      main.style.display = "flex";
      list.style.display = "none";
      morning.style.display = "none";
      daily.style.display = 'none';
      daily__Note.style.display = 'none';
    }, 450)
  }, 450);
  
});



