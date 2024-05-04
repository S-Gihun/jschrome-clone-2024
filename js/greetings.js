const loginForm= document.querySelector("#form-login");
const loginInput = document.querySelector("#form-login input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"
const USERNMAE_KEY = "usename"

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNMAE_KEY, username)
    paintsGreetings(username)
}

function paintsGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME)
}

const SavedUsername = localStorage.getItem(USERNMAE_KEY)

if(SavedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else{
    paintsGreetings(SavedUsername);
}