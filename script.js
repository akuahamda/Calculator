//IIFE = immediately Invoked Function Expression

(function(){
    // SELECT OUR ELEMENTS
    let display = document.querySelector('#screen');
    let buttons = document.querySelectorAll('.btn');
    let equal = document.querySelector('#equalto');
    let answer = document.querySelector('#answer');
    let clear = document.querySelector('#clear');
    let deleteBtn = document.querySelector('#delete');

    // console.log(answer.dataset.name)
    // LOOP THROUGH OUR BUTTONS AND GET THE VALUE OF EACH BUTTON (ARRAY METHOD)
    buttons.forEach((eachButton)=>{
        eachButton.addEventListener("click",(e)=>{
            display.value += e.target.dataset.num; 
        })
    })

    equal.addEventListener('click',(e)=>{
        if(display.value === ""){
            display.value = ""
        }else{
            answer.textContent = eval(display.value);
        }
    });


    clear.addEventListener('click',(e)=>{
        display.value = "";
        answer.textContent = '';
    });

    deleteBtn.addEventListener('click',(e)=>{
        display.value = display.value.slice(0,-1);
    });





})(); //IIFE = immediately Invoked Function Expression