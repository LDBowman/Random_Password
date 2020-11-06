var generateBtn = document.querySelector("#generate");

function genPass(){
    var specialC = confirm("Want to include Special Characters?");
    var upperC = confirm("Want to include Uppercase Letters?");
    var lowerC = confirm("Want to include Lowercase Letters?");
    var numbers = confirm("Want to include numbers?");
    var length = prompt("Enter Password Character Length");
}

generateBtn.addEventListener("click", password);
function password() {
    var password = genPass();
}