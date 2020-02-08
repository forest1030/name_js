const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const user_local = "currentUser",
    showing_class = "showing";



function saveName(){
    localStorage.setItem(user_local,text);
}

function handleSubmit(){
    event.preventDefault(); //새로고침이 되는 것을 막아줌
    const currentValue = input.value;
    paintName(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(showing_class);
    form.addEventListener("submit", handleSubmit)
}

function paintName(text){
    form.classList.remove(showing_class);
    greeting.classList.add(showing_class);
    greeting.innerText = `Hello ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(user_local);
    if (currentUser === null){  //user가 없을 때 하는 행동
        askForName();
    }
    else{  //user가 있을때 하는 행동
        paintName(currentUser);
    }
}
function init(){
    loadName();
}
init();