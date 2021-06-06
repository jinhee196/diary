const note1 = document.querySelector('.note1');
const note2 = document.querySelector('.note2');
const note3 = document.querySelector('.note3');

const main = document.querySelector('#main');
const morning = document.querySelector('#morning');
const list = document.querySelector('#list');
// note1.addEventListener('click', () => {

// });

note2.addEventListener('click', ()=>{
    main.style.animation = "fadeOut 1s";
    setTimeout(() => {
      morning.style.animation = "fadeIn 1s";
      setTimeout(() => {
        main.style.display = "none";
        morning.style.display = "block"
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
        list.style.display = "block"
      }, 450)
      let qIdx = 0;
      goNext(qIdx);
    }, 450);
});

function goNext(qIdx){
 
  var q = document.querySelector('.qBox');
  q.innerHTML = qnaList[qIdx].q;
  for(let i in qnaList[qIdx].a){
    addAnswer(qnaList[qIdx].a[i].answer, qIdx);
  }
  var status = document.querySelector('.statusBar');
  status.style.width = (100/endPoint) * (qIdx+1) + '%';
}