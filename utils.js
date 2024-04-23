function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function celciusToFarenheit(celcuis) {
    return (celcuis * 9)/5 + 32;
}

module.exports = {
    generateRandomNumber,
    celciusToFarenheit
}