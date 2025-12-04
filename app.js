const passwordBox = document.getElementById("Password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "@#$%^&*()_+~|{}[]<>/-=";

const allCharc = upperCase + lowerCase + numbers + symbols;

function createPassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while(length > password.length) {
        password += allCharc[Math.floor(Math.random() * allCharc.length)];
    }

    passwordBox.value = password;
}

function copyPassword(){
    passwordBox.select();
    // document.execCommand("copy");  -- old way to copy
    navigator.clipboard.writeText(passwordBox.value);  // new way to copy

}