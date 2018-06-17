var gold = 0;

var clickers = 0;
var fastClickers = 0;

var goldPerSecond = 0;

var clickerCost = Math.floor(10 * Math.pow(1.1,clickers));
var fastClickerCost = Math.floor(50 * Math.pow(1.1,fastClickers));


document.getElementById("clickerCost").innerHTML = clickerCost;
document.getElementById("fastClickerCost").innerHTML = fastClickerCost;


//function for adding gold
function giveGold(number){
	gold = gold + number;
	document.getElementById("gold").innerHTML = gold;
};

//Function for first upgrade
function buyClicker(){
	var clickerCost = Math.floor(10 * Math.pow(1.1,clickers));
	if (gold >= clickerCost){
		clickers = clickers + 1;
		gold = gold - clickerCost;
		document.getElementById("clickers").innerHTML = clickers;
		document.getElementById("gold").innerHTML = gold;};
	var clickerCost = Math.floor(10 * Math.pow(1.1,clickers));
	document.getElementById("clickerCost").innerHTML = clickerCost;
	calculateGPS();
};

//Function for second Upgrade
function buyFastClicker(){
	var fastClickerCost = Math.floor(50 * Math.pow(1.1,fastClickers));
	if (gold >= fastClickerCost){
		fastClickers = fastClickers + 1;
		gold = gold - fastClickerCost;
		document.getElementById("fastClickers").innerHTML = fastClickers;
		document.getElementById("gold").innerHTML = gold;};
	var fastClickerCost = Math.floor(50 * Math.pow(1.1,fastClickers));
	document.getElementById("fastClickerCost").innerHTML = fastClickerCost;
	calculateGPS();
};

//recalculate Gold per second and update screen
function calculateGPS(){
		goldPerSecond =
			(clickers * 1) +
			(fastClickers * 10);
		document.getElementById("gps").innerHTML = goldPerSecond;
};

window.setInterval(function(){
	giveGold(goldPerSecond/4);
}, 250);
		

	
		
		
		