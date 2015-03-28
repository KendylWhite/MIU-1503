//Kendyl White - Utility App

//Require
var ut = require("array");
//Backgorund
Ti.UI.setBackgroundColor('#CB5727');
//Main Window
var mainWin = Ti.UI.createWindow({  
    title:'TexasSports.com',
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
//Add
mainWin.add(signIn);
mainWin.add(dont);
mainWin.add(signUp);


// create controls tab and root window

// var win2 = Titanium.UI.createWindow({  
    // title:'Tab 2',
    // backgroundColor:'#fff'
// });
// var tab2 = Titanium.UI.createTab({  
    // icon:'KS_nav_ui.png',
    // title:'Tab 2',
    // window:win2
// });
// 
// var label2 = Titanium.UI.createLabel({
	// color:'#999',
	// text:'I am Window 2',
	// font:{fontSize:20,fontFamily:'Helvetica Neue'},
	// textAlign:'center',
	// width:'auto'
// });
// 
// win2.add(label2);


mainWin.open();
