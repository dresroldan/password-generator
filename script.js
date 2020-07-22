// Assignment Code
var generateBtn = document.querySelector("#generate");


// listed character variables 

var onlyUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var onlyLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var onlySpecial = ['#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '['];
var onlyNumeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];



function writePassword() {

    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    // passwordText.value = password;
}



function generatePassword() {

    // userOptions takes in prompt and confirm info from passwordOptions
    var usersOptions = passwordOptions();
    console.log(usersOptions)

    var chosenLength = usersOptions[0];
    for (var i = 0; i < chosenLength; i++) {}

    var passwordCharacters = [];
    console.log(passwordCharacters)

    // Listed below are attempts to loop and push userOptions to my passwordCharacters array where 

    // if (usersOptions.includeLowerCharacters) {

    //     var chosenLowercase = usersOptions[1];

    //     for (var i = 0; i < chosenLowercase; ++i) {
    //         passwordCharacters.push(onlyLower[i]);
    //     }
    // }

    // if (usersOptions.includeNumericCharacters) {
    //     for (i = 0; i < onlyNumeric.length; ++i) {
    //         passwordCharacters.push(onlyNumeric[i]);
    //     }
    // }
    // if (usersOptions.includeLowerCharacters) {
    //     for (i = 0; i < onlyLower.length; ++i) {
    //         passwordCharacters.push(onlyLower[i]);
    //     }
    // }
    // if (usersOptions.includeUppercaseCharacters) {
    //     for (i = 0; i < onlyUpper.length; ++i) {
    //         passwordCharacters.push(onlyUpper[i]);
    //     }
    // }

}

function passwordOptions() {

    var optionsArray = [];

    // set password length 

    var passwordLength = prompt("How many characters would you like your password to contain?")

    passwordLength = parseInt(passwordLength)


    if (Number(passwordLength < 8) | Number(passwordLength > 128) | isNaN(passwordLength)) {
        alert("Please enter a number between 8 and 128!");
        return;
    }

    optionsArray.push(passwordLength)


    // confirm the rest of the character conditions

    var includeLowerCharacters = confirm("Would you like to include lowercase characters?");
    optionsArray.push(includeLowerCharacters)

    var includeUppercaseCharacters = confirm("Would you like to include uppercase characters?");
    optionsArray.push(includeUppercaseCharacters)

    var includeNumericCharacters = confirm("Would you like to include numeric characters?");
    optionsArray.push(includeNumericCharacters)

    var includeSpecialCharacters = confirm("Would you like to include special characters?");
    optionsArray.push(includeSpecialCharacters)

    if (!includeLowerCharacters && !includeUppercaseCharacters && !includeNumericCharacters && !includeSpecialCharacters) {
        alert("Your password must contain at least one lowercase, uppercase, numeric, or special character");
        return;
    }


    // return array with user options so other functions can use them
    return optionsArray;
}



// click function to trigger password prompts and confirms

generateBtn.addEventListener("click", writePassword);