var coffeeImage = $('#coffee_image');

// used for calculating total drink cost
var drinksOrdered = [];
var espresso = $('#espresso');
var hotChocolate = $('#hot-chocolate');
var latte = $('#latte');
var myRevenueMessage = $('#revenue');
var prices = {
  "brew": 2.05,
  "espresso": 3.25,
  "latte": 4.15,
  "hot chocolate": 2.50
};


coffeeImage.attr("src", "static/coffee_beans.jpg");

// allow user to click image and brew coffee
var showMachine = function(drinkType) {
    coffeeImage.attr('src', 'static/coffee_machine.jpg');
    drinksOrdered.push(drinkType);
    myRevenueMessage.text(revenue());
    setTimeout(showMug, 1000);
}

var showMug = function() {
    coffeeImage.attr('src', 'static/coffee_mug.jpg');
    setTimeout(showBeans, 1500);
}

var showBeans = function () {
    coffeeImage.attr('src', 'static/coffee_beans.jpg');
}

// collect drinks ordered and add to total

// creates new functions that return the result of showMachine; and calls new functions on click
espresso.on('click', function () {return showMachine('espresso')});
hotChocolate.on('click', function () {return showMachine('hot chocolate')});
latte.on('click', function () {return showMachine('latte')});
coffeeImage.on('click', function () {return showMachine('brew')});

// for every item ordered, add item cost to item total
var revenue = function () {
  var totalCost = 0;
  console.log("beginning cost: " + totalCost);
  for (i=0; i < drinksOrdered.length; i++) {
    drinkPrice = prices[drinksOrdered[i]];
    console.log("drink price: " + drinkPrice)
    totalCost += drinkPrice;
    console.log("total cost: " +totalCost);
  }

  return totalCost;
}
