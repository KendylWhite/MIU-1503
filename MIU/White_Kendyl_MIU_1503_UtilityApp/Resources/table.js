// //Table Window
//Require
var array = require('array');
//Function
var detail = function(info) {
	var texasDetail = Ti.UI.createWindow({
		backgroundColor : "#CB5727",
		title : info.name,
	});
	var texasRow = Ti.UI.createLabel({
		text : info.description,
		top : 300,
		color:'#FFFFFF',
		font:{fontSize:24,fontFamily:'Helvetica Neue'},
	});
	var texasImage = Ti.UI.createView({
		backgroundImage : info.image,
		top : 0,
		width : deviceWidth,
		height : '250',
	});
	texasDetail.add(texasRow);
	texasDetail.add(texasImage);

	navWin.openWindow(texasDetail);
};
//Array
var utArray = [];
for (n in array.utSports) {

	var section = Ti.UI.createTableViewSection({
		headerTitle : array.utSports[n].title,
	});
	for (var i = 0; i < array.utSports[n].items.length; i++) {
		var item = array.utSports[n].items[i];

		var row = Ti.UI.createTableViewRow({
			title : array.utSports[n].items[i].name,
			data : item
		});
		row.addEventListener('click', function(event) {
			detail(event.source.data);
		});
		section.add(row);
	}
	utArray.push(section);
}
//Table
var utTable = Ti.UI.createTableView({
	separatorColor : "#CB5727",
	headerTitle : "Texas Longhorns Athletics",
	top : 0,
});
utTable.setData(utArray);

exports.utTable = utTable;