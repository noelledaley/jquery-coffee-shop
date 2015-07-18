var coffeeImage = $('#coffee_image');

// used for calculating total drink cost
var drinksOrdered = [];
var espresso = $('#espresso');
var hotChocolate = $('#latte');
var latte = $('#latte');
var myRevenueMessage = $('#revenue');
var prices = {
  "brew": 2.05,
  "espresso": 3.25,
  "latte": 4.15,
  "hot chocolate": 2.50
};

// allow user to click image and brew coffee
coffeeImage.attr("src", "static/coffee_beans.jpg");

var showMachine = function(drinkType) {
    coffeeImage.attr('src', 'static/coffee_machine.jpg');
    drinksOrdered.push(drinkType);
    setTimeout(showMug, 1000);
}

var showMug = function() {
    coffeeImage.attr('src', 'static/coffee_mug.jpg');
    setTimeout(showBeans, 1500);
}

var showBeans = function () {
    coffeeImage.attr('src', 'static/coffee_beans.jpg');
}

coffeeImage.on('click', showMachine);

// collect drinks ordered via event handlerss

// creates new functions that return the result of showMachine; and calls new functions on click
espresso.on('click', function () {return showMachine('espresso')});
hotChocolate.on('click', function () {return showMachine('hotChocolate')});
latte.on('click', function () {return showMachine('latte')});

// when they click, add


// if user clicks espresso, add cost of espresso
