var gold = 0;

var clickers = 0;
var fastClickers = 0;

var manualUpgrades = 0;

var goldPerSecond = 0;
var goldPerClick = 1;

var clickerCost = Math.floor(10 * Math.pow(1.1, clickers));
var fastClickerCost = Math.floor(50 * Math.pow(1.1, fastClickers));

var manualUpgradeCost = Math.floor(5 * Math.pow(1.05, manualUpgrades + 1));
var manualBiggerUpgradeCost = Math.floor(47 * Math.pow(1.07, manualUpgrades + 1));


document.getElementById("clickerCost").innerHTML = clickerCost;
document.getElementById("fastClickerCost").innerHTML = fastClickerCost;
document.getElementById("manualUpgradeCost").innerHTML = manualUpgradeCost;
document.getElementById("manualBiggerUpgradeCost").innerHTML = manualBiggerUpgradeCost;



//function for adding gold
function giveGold(number) {
    gold = gold + number;
    document.getElementById("gold").innerHTML = Math.round(gold);
};

//function for manual clicking
function clickGold() {
    giveGold(goldPerClick);
}

//Function for first Clicker
function buyClicker() {
    var clickerCost = Math.floor(10 * Math.pow(1.1, clickers));
    if (gold >= clickerCost) {
        clickers = clickers + 1;
        gold = gold - clickerCost;
        document.getElementById("clickers").innerHTML = clickers;
        document.getElementById("gold").innerHTML = gold;
    };
    var clickerCost = Math.floor(10 * Math.pow(1.1, clickers));
    document.getElementById("clickerCost").innerHTML = clickerCost;
    calculateGPS();
};

//Function for second Clicker
function buyFastClicker() {
    var fastClickerCost = Math.floor(50 * Math.pow(1.1, fastClickers));
    if (gold >= fastClickerCost) {
        fastClickers = fastClickers + 1;
        gold = gold - fastClickerCost;
        document.getElementById("fastClickers").innerHTML = fastClickers;
        document.getElementById("gold").innerHTML = gold;
    };
    var fastClickerCost = Math.floor(50 * Math.pow(1.1, fastClickers));
    document.getElementById("fastClickerCost").innerHTML = fastClickerCost;
    calculateGPS();
};

function buyClickUpgrade() {
    manualUpgradeCost = Math.floor(5 * Math.pow(1.05, manualUpgrades + 1));
    if (gold >= manualUpgradeCost) {
        manualUpgrades = manualUpgrades + 1;
        gold = gold - manualUpgradeCost;
        document.getElementById("gpc").innerHTML = goldPerClick;
        document.getElementById("gold").innerHTML = gold;
		goldPerClick = goldPerClick + 1;
    };
    
    manualUpgradeCost = Math.floor(5 * Math.pow(1.05, manualUpgrades + 1));
    document.getElementById("manualUpgradeCost").innerHTML = manualUpgradeCost;

};
function buyBiggerClickUpgrade() {
    manualBiggerUpgradeCost = Math.floor(47 * Math.pow(1.07, manualUpgrades + 1));
    if (gold >= manualBiggerUpgradeCost) {
        manualUpgrades = manualUpgrades + 1;
        gold = gold - manualBiggerUpgradeCost;
        document.getElementById("gpc").innerHTML = goldPerClick;
        document.getElementById("gold").innerHTML = gold;
		goldPerClick = goldPerClick + 15;
    };
    
    manualBiggerUpgradeCost = Math.floor(5 * Math.pow(1.05, manualUpgrades + 1));
    document.getElementById("manualBiggerUpgradeCost").innerHTML = manualBiggerUpgradeCost;

};

//recalculate Gold per second and update screen
function calculateGPS() {
    goldPerSecond =
        (clickers * 1) +
        (fastClickers * 10);
    document.getElementById("gps").innerHTML = goldPerSecond;
};

window.setInterval(function () {
    giveGold(goldPerSecond / 4);
    if (gold >= manualUpgradeCost) {
        document.getElementById("clickUpgrade1").style.color = 'black';
    }
    else {
        document.getElementById("clickUpgrade1").style.color = 'red';
    }
	if (gold >= manualBiggerUpgradeCost) {
        document.getElementById("clickUpgrade2").style.color = 'black';
    }
    else {
        document.getElementById("clickUpgrade2").style.color = 'red';
    }

    if (gold >= clickerCost) {
        document.getElementById("autoUpgrade1").style.color = 'black';
    }
    else {
        document.getElementById("autoUpgrade1").style.color = 'red';
    }

    if (gold >= fastClickerCost) {
        document.getElementById("autoUpgrade2").style.color = 'black';
    }
    else {
        document.getElementById("autoUpgrade2").style.color = 'red';
    }

}, 250);





