
function onLoad(){
    const display1El = document.querySelector('.display-1');
    const display2El = document.querySelector('.display-2');
    const tempResultEl = document.querySelector('.temp-result');
    const operatiionEl = document.querySelectorAll('.operation');
    const numbersEl = document.querySelectorAll('.number');
    const equalEl = document.querySelector('.equal');
    const clearEl = document.querySelector('.clear-all');
    const clearLastEl = document.querySelector('.clear-last-entity');
    
    
    let disp1num = '';
    let disp2num = '';
    let result = null;
    let letLastOperation = '';
    let haveDot = false;
    
    
    numbersEl.forEach( number => {
        number.addEventListener('click', (e) => {
            if(e.target.innerText === '.' && !haveDot){
                haveDot = true;
            } else if( e.target.innerText === '.' && haveDot){
                return;
            }
            disp2num += e.target.innerText;
            display2El.innerText = disp2num;
        })
    });
}


window.onload = onLoad
// const display1El = document.querySelector('.dispaly-1');
// const display2El = document.querySelector('.dispaly-2');
// const tempResultEl = document.querySelector('.temp-result');
// const operatiionEl = document.querySelectorAll('.operation');
// const numbersEl = document.querySelectorAll('.number');
// const equalEl = document.querySelector('.equal');
// const clearEl = document.querySelector('.clear-all');
// const clearLastEl = document.querySelector('.clear-last-entity');


// let disp1num = '';
// let disp2num = '';
// let result = null;
// let letLastOperation = '';
// let haveDot = false;


// numbersEl.forEach( number => {
//     number.addEventListener('click', (e) => {
//         if(e.target.innerText === '.' && !haveDot){
//             haveDot = true;
//         } else if( e.target.innerText === '.' && haveDot){
//             return;
//         }
//         disp2num += e.target.innerText;
//         display2El.innerText = disp2num;
//     })
// });