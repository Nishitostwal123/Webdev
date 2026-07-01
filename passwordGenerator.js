function passwordGenerator(containsLowerCase, containsUpperCase, containsNumbers, containsSymbols, length) {
    
    const lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789"
    const symbolChars = "!@#$%^&*()_+-="

    let allowedChars = ``;
    let password = ``;

    allowedChars += containsLowerCase ? lowerCaseCharacters : ``;
    allowedChars += containsUpperCase ? upperCaseCharacters : ``;
    allowedChars += containsNumbers ? numberChars : ``;
    allowedChars += containsSymbols ? symbolChars : ``;

    if(length<=0) {
        return `Password must have 1 character.`;
    }

    else if (allowedChars.length === 0) {
        return `Password must contain 1 set of characters.`;
    }

    for (let i = 0 ; i < length ; i++) {
        const randomIndex = Math.floor(Math.random()*allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

const length = 12;
const containsLowerCase = true;
const containsUpperCase = true;
const containsNumbers = true;
const containsSymbols = true;

const password = passwordGenerator(containsLowerCase, containsUpperCase, containsNumbers, containsSymbols, length);
console.log(password);