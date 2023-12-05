const convertTemperature = function () {
    const celcius = document.getElementById("c").value;
    document.getElementById("f").value = (celcius * 9 / 5) + 32;
}

const convertWeight = function () {
    const kilograms = document.getElementById("kg").value;
    document.getElementById("lbs").value = kilograms *2.205;
}

const convertDistance = function () {
    const kilometers = document.getElementById("km").value;
    document.getElementById("m").value = kilometers / 1.609;
}