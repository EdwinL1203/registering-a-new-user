// project: create a function that register a user on your previous login
// application. Make sure its on the same page and doent refresh when clicked,
// since we're not staring the data yet, test to ensure that the username is 
// already taken and that the password is at least 8 characters.
var objPeople = [
	{
		username: "sam",
	    password: "password888"

	},
	{
		username: "matt",
		password: "password88"
	},
	{
		username: "chris",
		password: "password3"
	}
]

//login functionality
function login(){
//retrieve data input from the form
var username = document.getElementById("username").value
var password = document.getElementById("password").value

//loop through all the user objects and confirm if the username and password are correct
for(i = 0; i < objPeople.length; i++){
	if(username == objPeople[i].username && password == objPeople[i].password){
		console.log(username + " is logged in!!!")
		return
	}
}

//error if username and password do not match
console.log("incorrect username or password")

}

function registerUser(){
	var registerUser = document.getElementById("newUser").value
    var registerPassword = document.getElementById("newPassword").value
    var newUser = {
    	username: registerUser,
    	password: registerPassword

    }
    for(i = 0; i < objPeople.length; i++){
    	if(registerUser == objPeople[i].username){
    		alert("that username is already in use")
    		return
    	} else if(registerPassword.length < 8){
    		alert("that password is too short, include 8 or more character")
    		return
    	}
    }
    
	
	objPeople.push(newUser)
	console.log(objPeople)
}