
function onLoad(){


    const display1El = document.querySelector('.display-1');
    const display2El = document.querySelector('.display-2');
    const tempResultEl = document.querySelector('.temp-display');
    const operatiionEl = document.querySelectorAll('.operation');
    const numbersEl = document.querySelectorAll('.number');
    const equalEl = document.querySelector('.equal');
    const clearEl = document.querySelector('.clear-all');
    const clearLastEl = document.querySelector('.clear-last-entity');
    
    
    let disp1num = '';
    let disp2num = '';
    let result = null;
    let lastOperation = '';
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


    operatiionEl.forEach( operation => {
        operation.addEventListener('click', (e) =>{
            if (!disp2num) return;
            haveDot = false;
            const operationName = e.target.innerText;
            if (disp2num && disp1num && lastOperation){
                mathOperation();
            }else{
                result = parseFloat(disp2num)
            }
            
            clearVar(operationName);
            lastOperation = operationName;
            console.log(result);
        })
    });



    equalEl.addEventListener('click', (e) => {
        if (!disp1num && !disp2num) return;
        haveDot = false;
        mathOperation();
        clearVar();
        display2El.innerText = result;
        display1El.innerText = '';
        tempResultEl.innerText = '';
        disp1num = '';
    })


    clearEl.addEventListener('click', (e) =>{
        display1El.innerText = '0';
        display2El.innerText = '0';
        tempResultEl.innerText = '0';
    })


    function clearVar(name = ''){
        disp1num += disp2num + ' ' + name + ' ';
        display1El.innerText = disp1num;
        display2El.innerText = '';
        disp2num = '';
        tempResultEl.innerText = result;
    }

    function mathOperation(){
        if(lastOperation === 'x'){
            result = parseFloat(result) * parseFloat(disp2num);
        }   else if(lastOperation === '+'){
            result = parseFloat(result) + parseFloat(disp2num);
        }   else if(lastOperation === '-'){
            result = parseFloat(result) - parseFloat(disp2num);
        }   else if(lastOperation === '%'){
            result = parseFloat(result) % parseFloat(disp2num);
        }   else if(lastOperation === '/'){
            result = parseFloat(result) / parseFloat(disp2num);
        }}
    


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