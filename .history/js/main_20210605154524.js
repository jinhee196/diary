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
      target.style.animation = "fadeIn 1s";
      setTimeout(() => {
        main.style.display = "none";
        target.style.display = "block"
      }, 450)
      let qIdx = 0;
      goNext(qIdx);
    }, 450);
});

note3.addEventListener('click', ()=>{
    main.style.animation = "fadeOut 1s";
    setTimeout(() => {
      qna.style.animation = "fadeIn 1s";
      setTimeout(() => {
        main.style.display = "none";
        qna.style.display = "block"
      }, 450)
      let qIdx = 0;
      goNext(qIdx);
    }, 450);
});

function begin(){
    main.style.animation = "fadeOut 1s";
    setTimeout(() => {
      qna.style.animation = "fadeIn 1s";
      setTimeout(() => {
        main.style.display = "none";
        qna.style.display = "block"
      }, 450)
      let qIdx = 0;
      goNext(qIdx);
    }, 450);
  }