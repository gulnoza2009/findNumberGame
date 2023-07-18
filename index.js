let randomNumber = Math.trunc(Math.random() * 20 + 1) // [0;20) [1;20]
let score = 5;
console.log(randomNumber);

// constants
const inputNumber = document.querySelector('.myNumber');
const checkerBtn = document.querySelector('.check');
const notification = document.querySelector(".notification") 
const computerNumber = document.querySelector(".random-number");
const scoreSpan = document.querySelector(".scoreSpan");
const highScore = document.querySelector(".highScore");
const resetBtn = document.querySelector(".reset");

scoreSpan.textContent = score;

checkerBtn.addEventListener('click', ()=>{
    let val = inputNumber.value;
    if(val < randomNumber){
        notification.textContent = 'Too low';
        score--;
        if(score == 0){
            notification.textContent = 'Game Over';
            inputNumber.disabled = true;
        };
        scoreSpan.textContent = score;
        checkerBtn.disabled = true;
        
    }
    else if(val > randomNumber){
        notification.textContent = 'Too high';
        score--;
        if(score == 0){
            notification.textContent = 'Game Over';
            inputNumber.disabled = true;
        };
        scoreSpan.textContent = score;
        checkerBtn.disabled = true;
    }
    else{
        notification.textContent = 'Congrutulation';
        document.body.style.backgroundColor = 'green';
        computerNumber.textContent = randomNumber;
        checkerBtn.disabled = true;
        if(highScore.textContent < score)
            highScore.textContent = score;
        inputNumber.disabled = true;
    }
});

resetBtn.addEventListener('click', ()=>{
    randomNumber = Math.trunc(Math.random() * 20 + 1);
    console.log(randomNumber);
    document.body.style.backgroundColor = 'indigo';
    notification.textContent = '';
    computerNumber.textContent = '?';
    score = 5;
    scoreSpan.textContent = score;
    inputNumber.value = '';
    inputNumber.disabled = false;
})

inputNumber.addEventListener('change', ()=>{
    if(inputNumber.value){
        checkerBtn.disabled = false;
    }
    else{
        checkerBtn.disabled = true;
    }
});