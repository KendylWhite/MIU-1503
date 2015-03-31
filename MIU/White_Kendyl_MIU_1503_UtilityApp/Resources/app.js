//Kendyl White - Utility App

//Require
var utSports = require("array");
var utSports = require("table");
require("array");
require("table");
//Platform width
var deviceWidth = Ti.Platform.displayCaps.platformWidth;
console.log(deviceWidth);
//Main Window
var mainWin = Ti.UI.createWindow({  
    backgroundColor:'#FFFFFF',
    title : "TexasSports.com",
	layout : "vertical",
});
var navWin = Ti.UI.iOS.createNavigationWindow({
	window : mainWin
});
//Logo
var logo = Ti.UI.createImageView({
	image: "utImages/logo.png",
	height: 100,
	width: 200,
	top: 10,
});
//Add
mainWin.add(logo);

//Email and Password
var emailLabel = Ti.UI.createLabel({
	color:'#CB5727',
	text:'Email',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'left',
	top: 25,
	left: 75,
});
var passwordLabel = Ti.UI.createLabel({
	color:'#CB5727',
	text:'Password',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'left',
	top: 10,
	left: 75,
});
var email = Ti.UI.createTextField({
	color:'#75000000',
	backgroundColor: "#75CCCCCC",
	borderColor:"#CB5727",
	borderRadius:3,
	width: 225,
	font:{fontSize:18,fontFamily:'Helvetica Neue'},
	textAlign:'left',
	top: 5,
	hintText : "Enter Your Email ",
});
var password = Ti.UI.createTextField({
	color:'#75000000',
	backgroundColor: "#75CCCCCC",
	borderColor:"#CB5727",
	borderRadius:3,
	width: 225,
	font:{fontSize:18,fontFamily:'Helvetica Neue'},
	textAlign:'left',
	top: 5,
	hintText : "Enter Your Password",
	passwordMask : true,
});
//Add
mainWin.add(emailLabel);
mainWin.add(email);
mainWin.add(passwordLabel);
mainWin.add(password);

//Buttons
var dont = Ti.UI.createLabel({
	color:'#CB5727',
	text:"Don't have an account?",
	font:{fontSize:16,fontFamily:'Helvetica Neue'},
	textAlign:'left',
	top: 0,
	left: 70,
});
var loginLabel = Ti.UI.createLabel({
	text : "Log In",
	color: '#CB5727',
	font:{fontSize:18,fontFamily:'Helvetica Neue', fontWeight:'Bold'},
});
var login = Ti.UI.createView({
	top : 20,
	left : 160,
	height : 50,
	width : 100,
	backgroundColor : "#FFFFFF",
	layout : "horizontal"
});
login.add(loginLabel);

var error = Ti.UI.createLabel({
	text: "Email & Password Don't Match",
	color: "red",
	font:{fontSize:18,fontFamily:'Helvetica Neue', fontWeight:'Bold'},
	center: 0,
	top: -120
});

login.addEventListener('click', function() {
	if (password.value.length >= 6 && password.value == parseInt(password.value)) {
		for (var i = 0; i < email.value.length; i++) {
			var mail = email.value;
			if (mail[i] == '@') {
				if (mail[i + 1]) {
					navWin.openWindow(winTable);
				}
			}
		}
	} else {
		email.setValue("");
		password.setValue("");
		mainWin.add(error);
	}
});

var signLabel = Ti.UI.createLabel({
	text : "Sign Up",
	color: '#CB5727',
	font:{fontSize:16,fontFamily:'Helvetica Neue', fontWeight:'Bold'},
});
var sign = Ti.UI.createView({
	top : -21,
	left : 245,
	height : 50,
	width : 60,
	backgroundColor : "FFFFFF",
	layout : "horizontal"
});
sign.add(signLabel);
sign.addEventListener('click', function() {
	navWin.openWindow(winS);
});

//Add
mainWin.add(login);
mainWin.add(dont);
mainWin.add(sign);

//Sign Up Window
var winS = Ti.UI.createWindow({  
    backgroundColor : "#FFFFFF",
	title : "TexasSports.com"
});
//Logo
var logoS = Ti.UI.createImageView({
	image: "utImages/logo.png",
	height: 100,
	width: 200,
	top: 10,
});
//Add
winS.add(logoS);

//Name, Email and Password
var required = Ti.UI.createLabel({
	color:'#CB5727',
	text:'*Required Fields',
	font:{fontSize:12,fontFamily:'Helvetica Neue', fontWeight:'Bold'},
	textAlign:'left',
	top: 125,
	left: 75,
});
var emailLabelS = Ti.UI.createLabel({
	color:'#CB5727',
	text:'Email*',
	font:{fontSize:18,fontFamily:'Helvetica Neue'},
	textAlign:'left',
	top: 150,
	left: 75,
});
var passwordLabelS = Ti.UI.createLabel({
	color:'#CB5727',
	text:'Password*',
	font:{fontSize:18,fontFamily:'Helvetica Neue'},
	textAlign:'left',
	top: 200,
	left: 75,
});var confirmLabel = Ti.UI.createLabel({
	color:'#CB5727',
	text:'Confirm Password*',
	font:{fontSize:18,fontFamily:'Helvetica Neue'},
	textAlign:'left',
	top: 250,
	left: 75,
});
var emailS = Ti.UI.createTextField({
	color:'#75000000',
	backgroundColor: "#75CCCCCC",
	borderColor:"#CB5727",
	borderRadius:3,
	width: 225,
	font:{fontSize:18,fontFamily:'Helvetica Neue'},
	textAlign:'left',
	top: 170,
	hintText : "Valid Email Address",
});
var passwordS = Ti.UI.createTextField({
	color:'#75000000',
	backgroundColor: "#75CCCCCC",
	borderColor:"#CB5727",
	borderRadius:3,
	width: 225,
	font:{fontSize:18,fontFamily:'Helvetica Neue'},
	textAlign:'left',
	top: 220,
	hintText : "6+ Digit Password ",
	passwordMask : true,
});
var confirm = Ti.UI.createTextField({
	color:'#75000000',
	backgroundColor: "#75CCCCCC",
	borderColor:"#CB5727",
	borderRadius:3,
	width: 225,
	font:{fontSize:18,fontFamily:'Helvetica Neue'},
	textAlign:'left',
	top: 270,
	hintText : "Confirm Password",
	passwordMask : true,
});
//Add
winS.add(required);
winS.add(emailLabelS);
winS.add(emailS);
winS.add(passwordLabelS);
winS.add(passwordS);
winS.add(confirmLabel);
winS.add(confirm);

//Button
var loginLabelS = Ti.UI.createLabel({
	text : "Sign Up",
	color: '#CB5727',
	font:{fontSize:18,fontFamily:'Helvetica Neue', fontWeight:'Bold'},
});
var loginS = Ti.UI.createView({
	center : 0,
	top: 300,
	height : 50,
	width : 100,
	backgroundColor : "#FFFFFF",
});

loginS.add(loginLabelS);

//var pokedex = require("table");

var errorS = Ti.UI.createLabel({
	text: "Email or Password Incorrect",
	color: "red",
	font:{fontSize:18,fontFamily:'Helvetica Neue', fontWeight:'Bold'},
	center: 0
});

loginS.addEventListener('click', function() {
	if (passwordS.value.length >= 6 && passwordS.value === confirm.value) {
		for (var i = 0; i < emailS.value.length; i++) {
			var mailS = emailS.value;
			if (mailS[i] == '@') {
				if (mailS[i + 1]) {
					navWin.openWindow(winTable);
				}
			}
		}
	} else {
		emailS.setValue("");
		passwordS.setValue("");
		winS.add(errorS);
	}
});
//Add
winS.add(loginS);
//Table
var winTable = Ti.UI.createWindow({
	backgroundColor : "#FFFFFF",
	title : "TexasSports.com"
});
//Add
winTable.add(utSports.utTable);

navWin.open();