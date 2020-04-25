console.log('hello suhas')

let time = document.getElementById('time') 
let name = document.getElementById('name')
let focusa = document.getElementById('focus')
let greeting =document.getElementById('greeting')

name.addEventListener('blur',setName)
focusa.addEventListener('blur',setFocus)



function setName(e){
   localStorage.setItem('name',e.target.innerHTML)
    
}

function setFocus(e){
    localStorage.setItem('focus',e.target.innerHTML)
     
 }
function updateClock(){
    let currentTIme = new Date();
    let hours = currentTIme.getHours();
    let minutes = currentTIme.getMinutes();
    let seconds = currentTIme.getSeconds();

    minutes=(minutes<10 ? "0":"") + minutes;
    seconds=(seconds<10 ? "0":"") + seconds;
    
    hours=(hours>12) ? hours-12: hours;
    hours=(hours==00) ? 12:hours;

    time.innerHTML=hours+":"+minutes+":"+seconds;

    
}
// get name

function getName(){
    if(localStorage.getItem('name')===null){
        name.innerHTML='[Enter Text]'

    }
    else{
        name.innerHTML=localStorage.getItem('name');

    }
}

function getFocus(){
    
if(localStorage.getItem('focus')===null){
    focusa.innerHTML='[Enter Text]';

}
else{
    focusa.innerHTML=localStorage.getItem('focus')
}
}

function bg(){
    let time = new Date()
    let currentHours = time.getHours();
    if(currentHours<12){
        document.body.style.backgroundImage=`url('morning.jpg')`
        greeting.textContent='Good Morning'
    }
    else if(currentHours<18){
        document.body.style.backgroundImage=`url('afternoon.jpg')`
        greeting.textContent='Good Afternoon'
    }
    else{
        document.body.style.backgroundImage=`url('evening.jpg')`
        greeting.textContent='Good Evening'
    }
}
// updateClock();
getName();
getFocus();
bg()
