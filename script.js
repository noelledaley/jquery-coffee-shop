var coffeeImage = $('#coffee_image')

coffeeImage.attr("src", "static/coffee_beans.jpg");

var showMachine = function() {
    coffeeImage.attr('src', 'static/coffee_machine.jpg');
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