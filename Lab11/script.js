var numbers = [];

// Функция для запроса пользователю ввода элементов массива
function promptArrayElements() {
    numbers = [];
    var arrayLengthInput = document.getElementById("arrayLength");
    var arrayLength = parseInt(arrayLengthInput.value);
    for (var i = 0; i < arrayLength; i++) {
        var element = parseFloat(prompt("Введите элемент массива #" + (i + 1) + ":"));
        numbers.push(element);
    }
    calculateAverage();
}

// Функция для вычисления арифметического среднего элементов массива
function calculateAverage() {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    var average = sum / numbers.length;
    alert("Арифметическое среднее элементов массива: " + average);
}