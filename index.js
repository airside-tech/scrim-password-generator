const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let generateButtonEl = document.getElementById("generate-btn")
let selectPassword1ButtonEl = document.getElementById("select-password1-btn") 
let selectPassword2ButtonEl = document.getElementById("select-password2-btn") 

/* 
To be able to call with args, register eventlistener, not onclick()
*/
generateButtonEl.addEventListener("click", getNewPassword(12,true,true))

function getRandomCharacterFromAllChars() {
    /* 
    Returns a single random character for a password 
    Select from ALL characters incl. numbers/special chars
    */
    let randomNumber = Math.floor( Math.random()*characters.length )
    return characters[randomNumber]
}


function getNewPassword(length, hasSpecial, hasNumbers){
    let password = []
    for(let i = 0; i < length;i++){
        password.push(getRandomCharacterFromAllChars())
    }
    console.log(password)
    return password
}


selectPassword1ButtonEl.textContent = getNewPassword(12,true,true)

