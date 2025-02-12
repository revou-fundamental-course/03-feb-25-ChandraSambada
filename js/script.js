document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.getElementById("main-input");
    const convertButton = document.querySelector("button[type='submit']");
    const resetButton = document.querySelector(".Reset");
    const resultField = document.getElementById("main-result");
    const explanationDiv = document.querySelector(".explanation");

    // Membuat kolom Fahrenheit tidak dapat diinput
    resultField.setAttribute("readonly", true);

    convertButton.addEventListener("click", function (event) {
        event.preventDefault();
        const celsius = parseFloat(inputField.value);
        
        if (isNaN(celsius)) {
            resultField.value = "";
            explanationDiv.innerHTML = "<p style='color: red;'>Masukkan angka yang valid!</p>";
            return;
        }

        const fahrenheit = (celsius * 9/5) + 32;
        resultField.value = fahrenheit.toFixed(2);
        explanationDiv.innerHTML += `<p>Cara menghitung: (${celsius} × 9/5) + 32 = ${fahrenheit.toFixed(2)}°F</p>`;
    });

    resetButton.addEventListener("click", function () {
        inputField.value = "";
        resultField.value = "";
        explanationDiv.innerHTML = "";
    });
});
