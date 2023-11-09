const counterDisplay = document.getElementById('counter');
const counterMinus = document.getElementById('minus');
const counterPlus = document.getElementById('plus');
const clickLike = document.getElementById('heart');
const makeList = document.querySelector('.likes');
const likeButton = document.getElementById('heart');

let count = parseInt(counterDisplay.textContent);

buttons.addEventListener("click", (event) =>{
    if(event.target.id === "plus"){
        time++;
        counterText.textContent = time;
    }else if(event.target.id === "minus"){
        time--;
        counterText.textContent = time;
    }else if(event.target.id === "pause"){
        toggleSwitch();
    }else if(event.target.id === "heart"){
        // !
        likes();
    }
});

function toggleSwitch(){
    counterRunning = !counterRunning;
    document.querySelectorAll("button").forEach(element => {
 
        if(element.id !== "pause"){
            element.disabled = !counterRunning;
        }else{
            if(counterRunning){
                element.textContent = "pause"
            }else{
            element.textContent = "resume"
            }
        }
    });
};