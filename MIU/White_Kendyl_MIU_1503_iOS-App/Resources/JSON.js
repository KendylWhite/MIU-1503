// //Ferrari
// //Data arrays
// var ferrariItems = [
	// {title: "458 Italia", description: "Engine: 4.5L V8, HP: 570, Price: $233,509", image: "images/italia.jpg",},
	// {title: "LaFerrari", description: "Engine: 6.3L V12, HP: 949, Price: $1,416,000", image: "images/laferrari.JPG",},
	// {title: "458 Spider", description: "Engine: 4.5L V8, HP: 570, Price: $257,412", image: "images/spider.jpg",},
	// {title: "FF", description: "Engine: 6.3L V12, HP: 651, Price: $295,000", image: "images/ff.JPG",},
	// {title: "Enzo", description: "Engine: 6.0L V12, HP: 660, Price: $659,330", image: "images/enzo.jpg",},
	// ];
// 
// //Header and Label
// var ferrariHeader = Ti.UI.createView({
	// background: "#d9d9d9"
// });
// 
// var ferrariLabel = Ti.UI.createLabel({
	// color: "#0041a2",
	// text: "Ferrari",
	// left: 15,
	// font: { fontSize:19 },
// });
// 
// ferrariHeader.add(ferrariLabel);
// 
// //Section
// var ferrariSection = Ti.UI.createTableViewSection({
	// headerView: ferrariHeader,
// });
// 
// //For Loop
// for(i = 0; i < ferrariItems.length; i++){
	// var ferrariRow = Ti.UI.createTableViewRow({
		// title: ferrariItems[i].title
	// });
	// ferrariSection.add(ferrariRow);
// };
// 
// //Event Listener
// ferrariRow.addEventListener('click', function(event){
	// console.log(event.source.title);
// });
// 
// //Lamborghini
// //Data arrays
// var lamboItems = [
	// {title: "Aventador", description: "Engine: 6.5L V12, HP: 720, Price: $397,500", image: "images/aventador.jpg",},
	// {title: "Huracan", description: "Engine: 5.2L V10, HP: 602, Price: $237,250", image: "images/huracan.jpg",},
	// {title: "Gallardo", description: "Engine: 5.2L V10, HP: 562, Price: $181,900", image: "images/gallardo.jpg",},
	// {title: "Diablo", description: "Engine: 6.0L V12, HP: 550, Price: $455,900", image: "images/diablo.jpg",},
	// {title: "Murcielago", description: "Engine: 6.5L V12, HP: 661, Price: $400,000", image: "images/mercy.jpg",},
	// ];
// 
// //Header and Label
// var lamboHeader = Ti.UI.createView({
	// background: "#d9d9d9"
// });
// 
// var lamboLabel = Ti.UI.createLabel({
	// color: "#0041a2",
	// text: "Lamborghini",
	// left: 15,
	// font: { fontSize:19 },
// });
// 
// lamboHeader.add(lamboLabel);
// 
// //Section
// var lamboSection = Ti.UI.createTableViewSection({
	// headerView: lamboHeader,
// });
// 
// //For Loop
// for(i = 0; i < lamboItems.length; i++){
	// var lamboRow = Ti.UI.createTableViewRow({
		// title: lamboItems[i].title
	// });
	// lamboSection.add(lamboRow);
// };
// 
// //Event Listener
// lamboRow.addEventListener('click', function(event){
	// console.log(event.source.title);
// });
// 
// //Porshe
// //Data arrays
// var porsheItems = [
	// {title: "991", description: "Engine: 3.6L V6, HP: 348, Price: $84,300", image: "images/991.jpg",},
	// {title: "Carrera GT", description: "Engine: 5.7 V10, HP: 605, Price: $448,000", image: "images/carrera.jpg",},
	// {title: "918 Spyder", description: "Engine: 4.6L V8, HP: 887, Price: $845,000", image: "images/sypder.jpg",},
	// {title: "Panamera", description: "Engine: 3.6L V6, HP: 570, Price: $78,100", image: "images/panamera.JPG",},
	// {title: "Cayman", description: "Engine: 3.6L V6, HP: 275, Price: $52,600.00", image: "images/cayman.JPG",},
	// ];
// 
// //Header and Label
// var porsheHeader = Ti.UI.createView({
	// background: "#d9d9d9"
// });
// 
// var porsheLabel = Ti.UI.createLabel({
	// color: "#0041a2",
	// text: "Porshe",
	// left: 15,
	// font: { fontSize:19 },
// });
// 
// porsheHeader.add(porsheLabel);
// 
// //Section
// var porsheSection = Ti.UI.createTableViewSection({
	// headerView: porsheHeader,
// });
// 
// //For Loop
// for(i = 0; i < porsheItems.length; i++){
	// var porsheRow = Ti.UI.createTableViewRow({
		// title: porsheItems[i].title
	// });
	// porsheSection.add(porsheRow);
// };
// 
// //Event Listener
// porsheRow.addEventListener('click', function(event){
	// console.log(event.source.title);
// });
// 
// //Maserati
// //Data arrays
// var ratiItems = [
	// {title: "Quattroporte", description: "Engine: 3.0L V6, HP: 530, Price: $106,900", image: "images/quatt.jpg",},
	// {title: "Ghibli", description: "Engine: 3.0L V6, HP: 490, Price: $69,800", image: "images/ghibli.JPG",},
	// {title: "GranTurismo", description: "Engine: 3.0L V6, HP: 454, Price: $132,825", image: "images/granT.jpg",},
	// {title: "GranCabrio", description: "Engine: 4.6L V8, HP: 554, Price: $152,630", image: "images/granC.jpg",},
	// {title: "Alfieri", description: "Engine: 4.7L V8, HP: 600, Price: $200,000", image: "images/alfieri.jpg",},
	// ];
// 
// //Header and Label
// var ratiHeader = Ti.UI.createView({
	// background: "#d9d9d9"
// });
// 
// var ratiLabel = Ti.UI.createLabel({
	// color: "#0041a2",
	// text: "Maserati",
	// left: 15,
	// font: { fontSize:19 },
// });
// 
// ratiHeader.add(ratiLabel);
// 
// //Section
// var ratiSection = Ti.UI.createTableViewSection({
	// headerView: ratiHeader,
// });
// 
// //For Loop
// for(i = 0; i < ratiItems.length; i++){
	// var ratiRow = Ti.UI.createTableViewRow({
		// title: ratiItems[i].title
	// });
	// ratiSection.add(ratiRow);
// };
// 
// //Event Listener
// ratiRow.addEventListener('click', function(event){
	// console.log(event.source.title);
// });
// 
// //Audi
// //Data arrays
// var audiItems = [
	// {title: "R8", description: "Engine: 5.2L V10, HP: 570, Price: $115,900", image: "images/r8.jpg",},
	// {title: "A8", description: "Engine: 4.2L V8, HP: 500, Price: $77,400", image: "images/a8.jpg",},
	// {title: "RS7", description: "Engine: 4.0L V8, HP: 560, Price: $108,900", image: "images/rs7.jpg",},
	// {title: "A5", description: "Engine: 3.0L V6, HP: 360, Price: $40,000", image: "images/a5.jpg",},
	// {title: "TT RS", description: "Engine: 2.5L V6, HP: 360, Price: $47,000", image: "images/ttrs.jpg",},
	// ];
// 
// //Header and Label
// var audiHeader = Ti.UI.createView({
	// background: "#d9d9d9"
// });
// 
// var audiLabel = Ti.UI.createLabel({
	// color: "#0041a2",
	// text: "Audi",
	// left: 15,
	// font: { fontSize:19 },
// });
// 
// audiHeader.add(audiLabel);
// 
// //Section
// var audiSection = Ti.UI.createTableViewSection({
	// headerView: audiHeader,
// });
// 
// //For Loop
// for(i = 0; i < audiItems.length; i++){
	// var audiRow = Ti.UI.createTableViewRow({
		// title: audiItems[i].title
	// });
	// audiSection.add(audiRow);
// };
// 
// //Event Listener
// lamboRow.addEventListener('click', function(event){
	// console.log(event.source.title);
// });
// 
// //Ford
// //Data arrays
// var fordItems = [
	// {title: "GT", description: "Engine: 5.4L V8, HP: 650, Price: $139,995", image: "images/fgt.jpg",},
	// {title: "Shleby GT 500", description: "Engine: 5.8L V8, HP: 662, Price: $55,110", image: "images/gt500.jpg",},
	// {title: "Shelby Cobra 1000", description: "Engine: 5.8L V10, HP: 1000+, Price: $154,995", image: "images/1000.jpg",},
	// {title: "F-150 Raptor", description: "Engine: 6.2L V8, HP: 411, Price: $46,190", image: "images/raptor.jpg",},
	// {title: "'67 Mustang Fastback", description: "Engine: 5.4L V8, HP: 375, Price: $75,000", image: "images/67.jpg",},
	// ];
// 
// //Header and Label
// var fordHeader = Ti.UI.createView({
	// background: "#d9d9d9"
// });
// 
// var fordLabel = Ti.UI.createLabel({
	// color: "#0041a2",
	// text: "Ford",
	// left: 15,
	// font: { fontSize:19 },
// });
// 
// fordHeader.add(fordLabel);
// 
// //Section
// var fordSection = Ti.UI.createTableViewSection({
	// headerView: fordHeader,
// });
// 
// //For Loop
// for(i = 0; i < lamboItems.length; i++){
	// var fordRow = Ti.UI.createTableViewRow({
		// title: fordItems[i].title
	// });
	// fordSection.add(fordRow);
// };
// 
// //Event Listener
// fordRow.addEventListener('click', function(event){
	// console.log(event.source.title);
// });
// 
// //Table
// var carTable = Ti.UI.createTableView({
	// style: Ti.UI.iPhone.TableViewStyle.GROUPED,
	// data: [ferrariSection, lamboSection, porsheSection, ratiSection, audiSection, fordSection],
	// separatorColor: "#0041a2",
// });
// 
// winCars.add(carTable);

//exports. = winCars;