const inputElement1 = document.querySelector('.input1');
const inputElement2 = document.querySelector('.input2');
const inputElement3 = document.querySelector('.input3');
const inputElement4 = document.querySelector('.input4');

const letters = 'qwertyuiopasdfghjklzxcvbnm';
const numbers = '123456789012345';
const symbols = '`~!@#$%^&*()_-+={}[]:;",./?>|<\\*/';
let html = '';
    
inputElement1.addEventListener('click',() => {
        inputElement1.classList.toggle('checked')
        if(inputElement1.classList.contains('checked')) {html += letters.toUpperCase()}
        else(html = html.replace(letters.toUpperCase(),""));
})

inputElement2.addEventListener('click',() => {
        inputElement2.classList.toggle('checked')
        if(inputElement2.classList.contains('checked')) {html += letters.toLowerCase()}
        else(html = html.replace(letters.toLowerCase(),""));
})

inputElement3.addEventListener('click',() => {
        inputElement3.classList.toggle('checked')
        if(inputElement3.classList.contains('checked')) {html += numbers}
        else(html = html.replace(numbers,""));
})

inputElement4.addEventListener('click',() => {
        inputElement4.classList.toggle('checked')
        if(inputElement4.classList.contains('checked')) {html += symbols}
        else(html = html.replace(symbols,""));
})
let password = '';

let result = document.querySelector('.password-result');
result.style.display = 'none';

function generatePassword() {
    if(html === '') {
        password = 'Check some inputs';
    } else {
        for(let i = 1;i<=score;i++) {
        let randomLetter = html[Math.floor(Math.random() * (html.length))];
        password += randomLetter;
}
    }

result.style.display = 'block';
result.innerHTML = password;
password = '';
}

let score = 5;
changeScore();
function changeScore() {
    if(score < 5) {score = 5}
    if(score > 15) {score = 15}
    document.querySelector('.length').innerHTML = score;
}

function copyText() {
    let text = document.querySelector('.password-result');
    navigator.clipboard.writeText(text.innerHTML);
}