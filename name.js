const form = document.querySelector(".js-form"),
    input = document.querySelector("input");

const user_local = "currentUser"

function loadName(){
    const currentUser = localStorage.getItem(user_local);
    if (currentUser === null){  //user가 없을 때 하는 행동

    }else{  //user가 있을때 하는 행동

    }
}
function init(){}

init();