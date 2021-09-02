const validatePassword = require('./passwordvalidation'); //import the function


// Your code goes here!

var readline = require('readline'); 
var r1 = readline.createInterface(process.stdin, process.stdout); 
valInval(); 

function valInval() {
r1.question('Enter a password to validate (or :q to quit)\n', (password) => {

  
  if(password == ':q'){
	r1.close(); 
	console.log('Goodbye'); 
  }

  else if (validatePassword(password)) {
  console.log('The password is valid: ' + password); 
  valInval(); 
  }
  else{
	console.log('The password is invalid: ' + password); 
	valInval(); 
  }
 })
 }
  
  



