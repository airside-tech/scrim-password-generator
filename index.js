const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let generateButtonEl = document.getElementById("generate-btn")
let selectPassword1ButtonEl = document.getElementById("select-password1-btn") 
let selectPassword2ButtonEl = document.getElementById("select-password2-btn")
let statusEl = document.getElementById("status") 

/* 
To be able to call with args, register eventlistener, not onclick()
*/
generateButtonEl.addEventListener("click", generateTwoNewPasswords)
selectPassword1ButtonEl.addEventListener("click", copyPassword1)
selectPassword2ButtonEl.addEventListener("click", copyPassword2)


//TODO: Arguments with options --> set as variables?
let hasSpecial = true
let hasNumbers = true
let passwordLength = 12

function generateTwoNewPasswords(){
    let pw1 = createNewPassword(passwordLength, hasSpecial, hasNumbers)
    let pw2 = createNewPassword(passwordLength, hasSpecial, hasNumbers)

    /* update the text on the buttons */
    selectPassword1ButtonEl.textContent = pw1
    selectPassword2ButtonEl.textContent = pw2

    statusEl.textContent = "Generated new passwords.."
}


function getRandomCharacterFromAllChars() {
    /* 
    Returns a single random character for a password 
    Select from ALL characters incl. numbers/special chars
    */
    let randomNumber = Math.floor( Math.random()*characters.length )
    return characters[randomNumber]
}


function createNewPassword(length, hasSpecial, hasNumbers){
    let password = []
    for(let i = 0; i < length;i++){
        password.push(getRandomCharacterFromAllChars())
    }
    return password
}


function copyPassword1(){
    copyPasswordToClipBoard(1)
}

function copyPassword2(){
    copyPasswordToClipBoard(2)
}

function copyPasswordToClipBoard(passwordNumber){
    /* Copies textcontent of password 1 to the clipboard */
    let textToCopy = ""

    if (passwordNumber === 1){
        // Get the text content of the button
        textToCopy = selectPassword1ButtonEl.textContent
    }
    else if (passwordNumber === 2){
        // Get the text content of the button
        textToCopy = selectPassword2ButtonEl.textContent
    }

    // Use the Clipboard API to copy the text
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            // Update the status to show success
            let successText = "Password " + passwordNumber + " copied to clipboard!"
            statusEl.textContent = successText
        })
        .catch((err) => {
            // Handle errors (e.g., if the Clipboard API is not supported)
            let errText = "Failed to copy Password " + passwordNumber
            console.error(errText, err)
            statusEl.textContent = errText
        })
}
