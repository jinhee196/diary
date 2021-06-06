const note1 = document.querySelector('.note1');
const note2 = document.querySelector('.note2');
const note3 = document.querySelector('.note3');

const main = document.querySelector('#main');
const morning = document.querySelector('#morning');
// note1.addEventListener('click', () => {

// });

note2.addEventListener('click', ()=>{
      main.style.display = 'none';
      morning.style.display = 'block';
      
});