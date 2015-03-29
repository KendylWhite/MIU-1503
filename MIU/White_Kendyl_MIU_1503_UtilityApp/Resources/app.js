//Kendyl White - Utility App

//Require
var ut = require("array");
//Platform width
var deviceWidth = Ti.Platform.displayCaps.platformWidth;
console.log(deviceWidth);
//Backgorund
Ti.UI.setBackgroundColor('#CB5727');
//Main Window
var mainWin = Ti.UI.createWindow({  
    backgroundColor:'#FFFFFF'
});
//Title and Logo
var headerT = Ti.UI.createLabel({
	color:'#CB5727',
	text:'TexasSports.com',
	font:{fontSize:30,fontFamily:'Helvetica Neue'},
	textAlign:'left',
	top: 30,
});
var logo = Ti.UI.createImageView({
	image: "utImages/logo.png",
	height: 100,
	width: 200,
	top: 75,
});
//Add
mainWin.add(logo);
mainWin.add(headerT);

//Email and Password
var emailLabel = Ti.UI.createLabel({
	color:'#CB5727',
	text:'Email',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'left',
	top: 225,
	left: 75,
});
var passwordLabel = Ti.UI.createLabel({
	color:'#CB5727',
	text:'Password',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'left',
	top: 300,
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
	top: 250,
});
var password = Ti.UI.createTextField({
	color:'#75000000',
	backgroundColor: "#75CCCCCC",
	borderColor:"#CB5727",
	borderRadius:3,
	width: 225,
	font:{fontSize:18,fontFamily:'Helvetica Neue'},
	textAlign:'left',
	top: 325,
});
//Add
mainWin.add(emailLabel);
mainWin.add(email);
mainWin.add(passwordLabel);
mainWin.add(password);

//Buttons
var signIn = Ti.UI.createButton({
	title:'Log In',
	color: '#CB5727',
	font:{fontSize:18,fontFamily:'Helvetica Neue', fontWeight:'Bold'},
	top: 360,
});
var dont = Ti.UI.createLabel({
	color:'#CB5727',
	text:"Don't have an account?",
	font:{fontSize:16,fontFamily:'Helvetica Neue'},
	textAlign:'left',
	top: 397,
	left: 70,
});
var signUp = Ti.UI.createButton({
	title:'Sign Up',
	color: '#CB5727',
	font:{fontSize:16,fontFamily:'Helvetica Neue', fontWeight:'Bold'},
	top: 390,
	left: 245
});
signUp.addEventListener('click', function(){
    winS.open();
});
//Add
mainWin.add(signIn);
mainWin.add(dont);
mainWin.add(signUp);

//Sign Up Window
var winS = Ti.UI.createWindow({  
    backgroundColor:'#FFFFFF'
});
//Title and Logo
var headerTS = Ti.UI.createLabel({
	color:'#CB5727',
	text:'TexasSports.com',
	font:{fontSize:30,fontFamily:'Helvetica Neue'},
	textAlign:'left',
	top: 20,
});
var logoS = Ti.UI.createImageView({
	image: "utImages/logo.png",
	height: 100,
	width: 200,
	top: 65,
});
//Add
winS.add(logoS);
winS.add(headerTS);

//Name, Email and Password
var required = Ti.UI.createLabel({
	color:'#CB5727',
	text:'*Required Fields',
	font:{fontSize:12,fontFamily:'Helvetica Neue', fontWeight:'Bold'},
	textAlign:'left',
	top: 180,
	left: 75,
});
var nameLabel = Ti.UI.createLabel({
	color:'#CB5727',
	text:'First and Last Name*',
	font:{fontSize:18,fontFamily:'Helvetica Neue'},
	textAlign:'left',
	top: 195,
	left: 75,
});
var emailLabelS = Ti.UI.createLabel({
	color:'#CB5727',
	text:'Email*',
	font:{fontSize:18,fontFamily:'Helvetica Neue'},
	textAlign:'left',
	top: 240,
	left: 75,
});
var passwordLabelS = Ti.UI.createLabel({
	color:'#CB5727',
	text:'Password*',
	font:{fontSize:18,fontFamily:'Helvetica Neue'},
	textAlign:'left',
	top: 285,
	left: 75,
});var confirmLabel = Ti.UI.createLabel({
	color:'#CB5727',
	text:'Confirm Password*',
	font:{fontSize:18,fontFamily:'Helvetica Neue'},
	textAlign:'left',
	top: 330,
	left: 75,
});
var name = Ti.UI.createTextField({
	color:'#75000000',
	backgroundColor: "#75CCCCCC",
	borderColor:"#CB5727",
	borderRadius:3,
	width: 225,
	font:{fontSize:18,fontFamily:'Helvetica Neue'},
	textAlign:'left',
	top: 215,
});
var emailS = Ti.UI.createTextField({
	color:'#75000000',
	backgroundColor: "#75CCCCCC",
	borderColor:"#CB5727",
	borderRadius:3,
	width: 225,
	font:{fontSize:18,fontFamily:'Helvetica Neue'},
	textAlign:'left',
	top: 260,
});
var passwordS = Ti.UI.createTextField({
	color:'#75000000',
	backgroundColor: "#75CCCCCC",
	borderColor:"#CB5727",
	borderRadius:3,
	width: 225,
	font:{fontSize:18,fontFamily:'Helvetica Neue'},
	textAlign:'left',
	top: 305,
});
var confirm = Ti.UI.createTextField({
	color:'#75000000',
	backgroundColor: "#75CCCCCC",
	borderColor:"#CB5727",
	borderRadius:3,
	width: 225,
	font:{fontSize:18,fontFamily:'Helvetica Neue'},
	textAlign:'left',
	top: 350,
});
//Add
winS.add(required);
winS.add(nameLabel);
winS.add(name);
winS.add(emailLabelS);
winS.add(emailS);
winS.add(passwordLabelS);
winS.add(passwordS);
winS.add(confirmLabel);
winS.add(confirm);

//Button
var create = Ti.UI.createButton({
	title:'Sign Up',
	color: '#CB5727',
	font:{fontSize:16,fontFamily:'Helvetica Neue', fontWeight:'Bold'},
	top: 375,
});
//Add
winS.add(create);

//Table Window
// var winTable = Ti.UI.createWindow({  
    // backgroundColor:'#FFFFFF'
// });
// //Table
// var table = Ti.UI.createTableView({
	// style: Ti.UI.iPhone.TableViewStyle.GROUPED,
	// data: [utSports],
	// separatorColor: "#CB5727",
// });
// winTable.add(table);

mainWin.open();
//winS.open();
//winTable.open();
