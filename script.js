var generateBtn = document.querySelector("#generate");
var specialChar = "!'*+,-./:;<=>?@^_`#@~";
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var numbersChar ="0123456789";

function genPass(){
    var specialC = confirm("Want to include Special Characters?");
    var upperC = confirm("Want to include Uppercase Letters?");
    var lowerC = confirm("Want to include Lowercase Letters?");
    var numbers = confirm("Want to include Numbers?");
    var length = prompt("Enter Password Character Length");
    
        if (specialC, upperC, lowerC, numbers == true) {
        alert("Your password is: " + length + " digits long & will consist of Special Characters, Uppercase, Lowercase & Numbers.");
            charset = specialChar += upperChar += lowerChar += numbersChar
            passwordInfo = "";
            console.log(specialChar, upperChar, lowerChar, numbersChar);
            for (var i = 0, b = charset.length; i < length; ++i) {
                passwordInfo += charset.charAt(Math.floor(Math.random() * b));
            }
            return passwordInfo;
        }

        else if (specialC, upperC, lowerC == true && numbers == false) {
        alert("Your password is: " + length + " digits long & will consist of Special Characters, Uppercase & Lowercase.");
            console.log(specialChar, upperChar, lowerChar);
            charset = specialChar += upperChar += lowerChar
            passwordInfo = "";
            for (var i = 0, b = charset.length; i < length; ++i) {
            passwordInfo += charset.charAt(Math.floor(Math.random() * b));
            }
            return passwordInfo;
        }
}

generateBtn.addEventListener("click", password);
function password() {
    var password = genPass();
    var passwordInfo = document.querySelector("#password");
    passwordInfo.value = password;
}