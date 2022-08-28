const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const counter = document.getElementById("counter")
const heart = document.getElementById("heart")
const likesDes = document.querySelector(".likes")
const pause = document.getElementById("pause")



// console.log(likesDes[0].textContent)
plus.addEventListener("click", increment);
minus.addEventListener("click", decrement);
heart.addEventListener("click", likeFn);
pause.addEventListener("click", pauseFn)

// increment counter

function increment(){
    counter.textContent++;
}

// decrrement counter

function decrement(){
    counter.textContent--;
}

// like function

function likeFn(){

    let li = document.createElement("li");
    li.textContent = `${counter.textContent} has been liked ${1} time.`
    likesDes.appendChild(li)
}


// pause function

let ticking = true;
function pauseFn (){
    if(ticking){
        clearInterval(interval),
this.textContent = "resume"
ticking = false;
    }
    else{
this.textContent = "pause"
ticking = true
incrementCounter()
    }
}


// incrementing counter every second

let seconds = 0;
let incrementSeconds = ()=>{
    seconds +=1;
    counter.textContent = seconds
}
let interval 
function incrementCounter(){
 interval = setInterval(incrementSeconds,1000);
}
incrementCounter()