const timeDisplay = document.getElementById("timeDisplay");
const startbtn = document.getElementById("startbtn");
const pausebtn = document.getElementById("pausebtn");
const resetbtn = document.getElementById("resetbtn");

const danda = document.querySelector(".danda");


let hr = 0;
let min = 0;
let sec = 0;
let start = 0;
let elapsed = 0;
let pause = true;
let intervalueid;

startbtn.addEventListener('click',()=>{
    if(pause){
        paused=false;
        start = Date.now() - elapsed;
        intervalueid = setInterval(updatetime,1000);
    }
});
pausebtn.addEventListener('click',()=>{
    pause = true;
    clearInterval(intervalueid)
    timeDisplay.textContent = `${hr}:${min}:${sec}`;
});
resetbtn.addEventListener('click',()=>{
    pause = true;
    clearInterval(intervalueid)
    hr = 0;
    min = 0;
    sec = 0;    
    start = 0;
    elapsed = 0;
    timeDisplay.textContent = "00:00:00";
});

function updatetime(){
    elapsed = Date.now() - start;
    sec = Math.floor((elapsed/1000)%60);
    min = Math.floor((elapsed/(1000*60))%60);
    hr = Math.floor((elapsed/(1000*60*60*24))%60);
    sec = pad(sec)
    min = pad(min)
    hr = pad(hr)
    
    timeDisplay.textContent = `${hr}:${min}:${sec}`;
    
    function pad(unit){
        return (("0")+unit).length>2?unit:"0"+unit
    }
}