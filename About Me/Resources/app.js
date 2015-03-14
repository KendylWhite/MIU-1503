//Kendyl White

//Window
var winTexas = Titanium.UI.createWindow({
    backgroundColor: '#D40202',
    title: 'Texas'
});

var winT = Titanium.UI.iOS.createNavigationWindow({
   window: winTexas
});

var winTX = Titanium.UI.createWindow({
    backgroundColor: '#0041A2',
    title: 'God Bless Texas'
});

//Data Arrays
var txArray = [
	{title: "State Bird: The Mockingbird"},
	{title: "State Flower: The Bluebonnet"},
	{title: "State Tree: The Pecan Tree"},
	{title: "State Dish: Chili"},
	{title: "State Mammal: Longhorn"},
	{title: "State Pepper: The Jalapeño"},
	{title: "State Pie: Pecan Pie"},
	{title: "State Snack: Tortilla Chips and Salsa"},
	];
	
//Table, Sections, Rows
//Header
var txHeader = Ti.UI.createView({
	backgroundColor: "#D40202"
});

var txLabel = Ti.UI.createLabel({
	color: "#0041A2",
	//need to change color
	text: "State Symbols",
});

txHeader.add(txLabel);

//Section
var txSection = Ti.UI.createTableViewSection({
	headerView: txHeader
});

//For Loop
for(i = 0; i < txArray.length; i++){
	var rowT = Ti.UI.createTableViewRow({
		title: txArray[i].title
	});
	txSection.add(rowT);
};

//Table
var tableT = Ti.UI.createTableView({
	style: Ti.UI.iPhone.TableViewStyle.GROUPED,
	data: [txSection],
	separatorColor: "#0041A2",
});

//Button
var buttonT = Titanium.UI.createButton({
    title: 'God Bless Texas',
    top: 100,
});

buttonT.addEventListener('click', function(){
    winT.openWindow(winTX, {animated:true});
});

//Add
winTexas.add(buttonT);
winTX.add(tableT);
//Open
winT.open();
