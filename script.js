const celciusToFarenheit = function () {
    const celcius = document.getElementById("c").value;
    document.getElementById("f").value = (celcius * 9 / 5) + 32;
}

const farenheitToCelcius = function () {
    const farenheit = document.getElementById("f").value;
    document.getElementById("c").value = (farenheit - 32) * 5 / 9;
}

const kilogramsToPounds = function () {
    const kilograms = document.getElementById("kg").value;
    document.getElementById("lbs").value = kilograms * 2.205;
}

const poundsToKilograms = function () {
    const pounds = document.getElementById("lbs").value;
    document.getElementById("kg").value = pounds / 2.205;
}

const kilometersToMiles = function () {
    const kilometers = document.getElementById("km").value;
    document.getElementById("m").value = kilometers / 1.609;
}

const milesToKilometers = function () {
    const miles = document.getElementById("m").value;
    document.getElementById("km").value = miles * 1.609;
}