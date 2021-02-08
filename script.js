// Assignment Code
var generateBtn = document.querySelector("#generate");
// Creating the list of possible numbers used in password generation 
var Numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// Creating the list of possible special characters used in password generation 
var specialChars = ["!","@","#","$","%","^","&","*","(",")","_","-","+","?","/","<",">"];
// Creating the list of possible lower case letters used in password generation 
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// Creating the list of possible upper case letters used in password generation 
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){

// A prompt box wich takes user input for the password length
var passLength = prompt("How many characters would you like your password to contain?");

// Condition to check if user input is a number. Prompt end if this check fails
if (isNaN(passLength) === true){
  alert('Password lenght must be provided as a number');
  return;
}
// Condition to check if user input is a number smaller than 8
if (passLength < 8) {
  alert('Password length must be at least 8 characters');
  return;
}
// Condition to check if user input is a number greater than 128
else if (passLength > 128) {
  alert('Password length must less than 129 characters');
  return;
}
// Condition to check if password must include numbers
var NumericCharacters = confirm("Click OK to confirm including numeric characters?");
// Condition to check if password must include special characters
var SpecialCharacters = confirm("Click OK to confirm including special characters?");
// Condition to check if password must include lowercase characters
var LowerCase = confirm("Click OK to confirm including lowercase?");
// Condition to check if password must include uppercase characters
var UpperCase = confirm("Click OK to confirm including uppercase?");

// Condition to check if user does not include any types of characters (numbers,special characters, lowercase, uppercase). Program ends if all four variables evaluate to false
if (
  NumericCharacters === false &&
  SpecialCharacters === false &&
  LowerCase === false &&
  UpperCase === false
) {
alert('Must select at least one character type');
return;}

// Creating an empty Array which will be used to generate the password based on what type of characters user selected 
var CharListForPass = [];

// If user selected to have numbers in his/her password add "Numbers" list to the newly created empty Array "CharListForPass"
if (NumericCharacters === true) {
  CharListForPass = CharListForPass.concat(Numbers)
  // Print "CharListForPass" after "Numbers" list was added to it 
  console.log("The CharListForPass has now the following elements: " + CharListForPass)
}
// If user did not choose to have numbers in his/her password keep the "CharListForPass" the way it is and print its content in the log   
else {console.log("The CharListForPass has now the following elements: " + CharListForPass)}

// If user selected to have special characters in his/her password add "specialChars" list to the Array "CharListForPass"
if (SpecialCharacters === true) {
  CharListForPass = CharListForPass.concat(specialChars)
  // Print "CharListForPass" after "specialChars" list was added to it 
  console.log("The CharListForPass has now the following elements: " + CharListForPass)
}
// If user did not choose to have special characters in his/her password keep the "CharListForPass" the way it is and print its content in the log   
else {console.log("The CharListForPass has now the following elements: " + CharListForPass)}

// If user selected to have lower case characters in his/her password add "lowerCase" list to the Array "CharListForPass"
if (LowerCase === true) {
  CharListForPass = CharListForPass.concat(lowerCase)
  // Print "CharListForPass" after "lowerCase" list was added to it 
  console.log("The CharListForPass has now the following elements: " +  CharListForPass)
}
// If user did not choose to have lower case characters in his/her password keep the "CharListForPass" the way it is and print its content in the log   
else {console.log("The CharListForPass has now the following elements: " +  CharListForPass)}

// If user selected to have upper case characters in his/her password add "upperCase" list to the Array "CharListForPass"
if (UpperCase === true) {
  CharListForPass = CharListForPass.concat(upperCase)
  // Print "CharListForPass" after "upperCase" list was added to it 
  console.log("The CharListForPass has now the following elements: " + CharListForPass)
}
// If user did not choose to have upper case characters in his/her password keep the "CharListForPass" the way it is and print its content in the log   
else {console.log("The CharListForPass has now the following elements: " + CharListForPass)}
  
// Print out the length of the CharListForPass
  console.log("The number of elemets in CharListForPass is " + CharListForPass.length);

// Creating an empty Array in which we will store the password created 
var randomPassword = ""

// A loop which repeats number of times that user will choose for the password lenght and picks a random element from "CharListForPass" and adds it to our final password 
for (i=0; i < passLength; i++) {
  //Generate a random number between 0 and number of elements in CharListForPass
  var Random = Math.floor(Math.random() * CharListForPass.length);
  // Print out the random number for this itteration 
  console.log("The random number in this itteration is " + Random)
  // Print out the element from CharListForPass based on the index "Random"
  console.log("The element under index " + Random + " in CharListForPass is " + CharListForPass[Random]);
  // Add the random element from CharListForPass to final password
  randomPassword += CharListForPass[Random];
  console.log("The final password has now the following elements: " + randomPassword);
}
// Printing out generated "randomPassword" to the id="password" in HTML page
document.getElementById("password").innerHTML = randomPassword
return randomPassword

}
