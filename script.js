// Assignment Code
var generateBtn = document.querySelector("#generate");

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
  var special = ["!","@","#","$","%","^","&","*","(",")","-","_","+","=","<",">"]
  //user input for length
  passwordLength = prompt("how long do you want your password to be? (between 8 and 128 characters)" );
  console.log("Password length is " + passwordLength);

  //parameters of input input
  if(!passwordLength){
    alert("cancelled password generation");
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
  };

//creation of new array(userchoice) via concat given user input

if(!confirmLowerCase && !confirmNumber && !confirmSpecial && !confirmUpperCase){
  alert("password invalid, please input criteria");
}else if(confirmLowerCase && confirmNumber && confirmSpecial && confirmUpperCase){
  userchoice = lowerCase.concat(upperCase, numbers, special);
  console.log(userchoice);
}else if(confirmLowerCase && confirmNumber && confirmUpperCase){
  userchoice = lowerCase.concat(upperCase, numbers);
  console.log(userchoice);
}else if(confirmLowerCase && confirmNumber && confirmSpecial){
  userchoice = lowerCase.concat(numbers && special);
  console.log(userchoice);
}else if(confirmLowerCase && confirmSpecial && confirmUpperCase){
  userchoice = lowerCase.concat(upperCase && special);
  console.log(userchoice);
}else if(confirmNumber && confirmSpecial && confirmUpperCase){
  userchoice = numbers.concat(upperCase && special);
  console.log(userchoice);
}else if(confirmLowerCase && confirmNumber){
  userchoice = lowerCase.concat(numbers);
  console.log(userchoice);
}else if(confirmLowerCase && confirmSpecial){
  userchoice = lowerCase.concat(special);
  console.log(userchoice);
}else if(confirmLowerCase && confirmUpperCase){
  userchoice = lowerCase.concat(upperCase);
  console.log(userchoice);
}else if(confirmNumber && confirmSpecial){
  userchoice = numbers.concat(special);
  console.log(userchoice);
}else if(confirmNumber && confirmUpperCase){
  userchoice = numbers.concat(upperCase);
  console.log(userchoice);
}else if(confirmSpecial && confirmUpperCase){
  userchoice = special.concat(upperCase);
  console.log(userchoice);
}else if(confirmUpperCase){
  userchoice = upperCase;
  console.log(userchoice);
}else if(confirmLowerCase){
  userchoice = lowerCase;
  console.log(userchoice);
}else if(confirmNumber){
  userchoice = numbers;
  console.log(userchoice);
}else if(confirmSpecial){
  userchoice = special;
  console.log(userchoice);
}

//new array to hold all new generation for my for loop
var randomPassword =[];
//for loop for random generation 
for(var i=0; i<passwordLength; i++){
  var randomPasswordvalue = userchoice[Math.floor(Math.random()* userchoice.length)];
  console.log(randomPasswordvalue);
  randomPassword.push(randomPasswordvalue);
  console.log(randomPassword);
}

return randomPassword;
}