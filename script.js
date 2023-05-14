// Assignment Code
var generateBtn = document.querySelector("#generate");
//declaring of my variables
var passwordLength;
var confirmLowerCase;
var confirmUpperCase;
var confirmNumber;
var confirmSpecial;
var userchoice;
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = [0,1,2,3,4,5,6,7,8,9];
var special = ["!","@","#","$","%","^","7","*","(",")","-","_","+","=","<",">"]

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//generation of the password given via parameters
function generatePassword(){
  //user input for length
  passwordLength = prompt("how long do you want your password to be? (between 8 and 128 characters)" );
  console.log("Password length is " + passwordLength);

  //parameters of input
  if(!passwordLength){
    alert("no value");
    console.log("no inputed value");
  } else if(passwordLength < 8 || passwordLength > 128){
    passwordLength = prompt("you must choose between 8 and 128 characters");
  } else{
    confirmLowerCase = confirm("Will this contain lower case letters?");
    console.log("Lower case = " + confirmLowerCase);
    confirmUpperCase = confirm("Will this contain upper case letters?");
    console.log("Upper case = " + confirmUpperCase);
    confirmNumber = confirm("Will this contain numbers?");
    console.log("Number = " + confirmNumber);
    confirmSpecial = confirm("Will this contain special characters?");
    console.log("Special Character = " + confirmSpecial);
  }


}