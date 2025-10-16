let timerDisplay= document.querySelector(".timerDisplay")
let startButton = document.querySelector("#startBtn");
let stopButton = document.querySelector("#stopBtn");
let resetButton = document.querySelector("#resetBtn");

let msec=0
let sec=0
let min=0
let hour=0
let timerId= null;//timerId =null means it has no value as of now but can have some value in future
//start button click
startButton.addEventListener('click',()=>{
    if(timerId!=null){
        clearInterval(timerId)
    }
   timerId =setInterval(startTimer,10);

})
//stop button

stopButton.addEventListener('click',()=>{
    if(timerId!=null){
        clearInterval(timerId)
    }
})
//reset button
resetButton.addEventListener('click',()=>{
    if(timerId!=null){
        clearInterval(timerId)
    }
    timerDisplay.innerHTML='00:00:00:00';
})

//main logic of the code
function startTimer(){
if(timerId!=null){
    msec++;
}
    if(msec==100){
        msec=0;
        sec++;
    }
    if(sec==60){
        sec=0
    
min++;
}
if(min==60){
        min=0;
        hour++;
    }


//when less then 10 single disgit will have 0 bef0re it
let hourstring=hour < 10 ? `0${hour}` : hour;
let msecString = msec < 10 ? `0${msec}` : msec;
let secString  = sec  < 10 ? `0${sec}`  : sec;
let minString  = min  < 10 ? `0${min}`  : min;


timerDisplay.innerHTML=`${hourstring}:${minString}:${secString}:${msecString}`;



}


