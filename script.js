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
        
        if (specialC == true) {
            alert("Your password is: " + length + " digits long & will consist of Special Characters, Uppercase & Lowercase.");
                charset = specialChar
                passwordInfo = ""
                return randomGen(), passwordInfo;
        }
     
        else if (upperC == true) {
            alert("Your password is: " + length + " digits long & will consist of Special Characters, Uppercase & Lowercase.");
                charset = upperChar
                passwordInfo = ""
                return randomGen(), passwordInfo;
        }
        
        else if (numbers == true) {
            alert("Your password is: " + length + " digits long & will consist of Special Characters, Uppercase & Lowercase.");
                charset = numbersChar
                passwordInfo = ""
                return randomGen(), passwordInfo;
        }
    
        else if (lowerC == true) {
            alert("Your password is: " + length + " digits long & will consist of Special Characters, Uppercase & Lowercase.");
                charset = lowerChar
                passwordInfo = ""
                return randomGen(), passwordInfo;
        }
    
        function randomGen(){
            for (var i = 0, b = charset.length; i < length; ++i) {
            passwordInfo += charset.charAt(Math.floor(Math.random() * b));
            }
        }
}

generateBtn.addEventListener("click", password);

function password() {
    var password = genPass();
    var passwordInfo = document.querySelector("#password");
    passwordInfo.value = password;
}