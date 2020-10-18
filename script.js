// Assignment Code
var generateBtn = document.querySelector("#generate");
//Password Available Content
var charsetLowSpec = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*/?";
var charsetCap = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
var charsetLow = "abcdefghijklmnopqrstuvwxyz0123456789";
var charsetCapSpec = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*/?";
// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//Generation Process
function generatePassword(){
//Character Amount Question
  var passwordLength = prompt("How many characters would you like in your password?");
    alert("Your passwords character length will be: " +passwordLength)
//Special Character Question
  var passwordSpecial = confirm("Do you want to add Special Characters? Click CANCEL to DECLINE."); {
    if(passwordSpecial === true) {
      alert("The password WILL include Special Characters.");
    }
    else if (passwordSpecial === false) {
      alert("The password WILL NOT include Special Characters.");
    }
  }
//Upper Case Question
  var passwordCase = confirm("Do you want to add Uppercase Letters? Click CANCEL to Decline."); {
    if (passwordCase === true) {
      alert("The password WILL include Upper Case.");
    }
    else if (passwordCase === false) {
      alert("The password WILL NOT include Upper Case.");
    }
  }
//Console Logs
  console.log("Password length:" +passwordLength);
  console.log("Special characters:" +passwordSpecial);
  console.log("Uppercase Letters:" +passwordCase);
//Includes Upper & Special 
  if (passwordSpecial === true && passwordCase === true) {
    var length = passwordLength,
      charset = charsetCapSpec
      passwordText = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
      passwordText += charset.charAt(Math.floor(Math.random() * n));
    }
    return passwordText;
  }
//Declines Upper & Special
  else if (passwordSpecial === false && passwordCase === false) {
    var length = passwordLength,
      charset = charsetLow
      passwordText = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
      passwordText += charset.charAt(Math.floor(Math.random() * n));
    }
    return passwordText;
  }
  //Declines Speical & Accepts Upper
  else if (passwordSpecial === false && passwordCase === true) {
    var length = passwordLength,
      charset = charsetCap
      passwordText = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
      passwordText += charset.charAt(Math.floor(Math.random() * n));
    }
    return passwordText;
  }
  //Accepts Special & Declines Upper
  else if (passwordSpecial ===  true && passwordCase === false) {
    var length = passwordLength,
      charset = charsetLowSpec
      passwordText = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
      passwordText += charset.charAt(Math.floor(Math.random() * n));
    }
    return passwordText;
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);