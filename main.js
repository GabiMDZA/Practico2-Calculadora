// Seleccionamos los elementos HTML que utiliza la calculadora.
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const resultado = document.getElementById("resultado");

function suma() {
    // Verificamos que los dos campos tengan datos antes de calcular.
    if (num1.value === "" || num2.value === "") {
        resultado.textContent = "Ingrese los números";
    } else {
        resultado.textContent = Number(num1.value) + Number(num2.value);
    }
}

function resta() {
    // Verificamos que los dos campos tengan datos antes de calcular.
    if (num1.value === "" || num2.value === "") {
        resultado.textContent = "Ingrese los números";
    } else {
        resultado.textContent = Number(num1.value) - Number(num2.value);
    }
}

function multiplicacion() {
    // Verificamos que los dos campos tengan datos antes de calcular.
    if (num1.value === "" || num2.value === "") {
        resultado.textContent = "Ingrese los números";
    } else {
        resultado.textContent = Number(num1.value) * Number(num2.value);
    }
}

function division() {
    // Verificamos los campos y evitamos dividir entre cero.
    if (num1.value === "" || num2.value === "") {
        resultado.textContent = "Ingrese los números";
    } else if (Number(num2.value) === 0) {
        resultado.textContent = "No se puede dividir por cero";
    } else {
        resultado.textContent = Number(num1.value) / Number(num2.value);
    }
}

function potencia() {
    // La potencia utiliza el primer número como base y el segundo como exponente.
    if (num1.value === "" || num2.value === "") {
        resultado.textContent = "Ingrese los números";
    } else {
        resultado.textContent = Number(num1.value) ** Number(num2.value);
    }
}

function raiz() {
    // Calculamos la raíz usando los valores introducidos en los campos.
    if (num1.value === "") {
        resultado.textContent = "Ingrese un número";
    } else {
        resultado.textContent = Number(num2.value) ** (1 / Number(num1.value));
    }
}

// Escuchamos el clic de cada botón y ejecutamos su función correspondiente.
document.getElementById("sumar").addEventListener("click", suma);
document.getElementById("restar").addEventListener("click", resta);
document.getElementById("multiplicar").addEventListener("click", multiplicacion);
document.getElementById("dividir").addEventListener("click", division);
document.getElementById("potencia").addEventListener("click", potencia);
document.getElementById("raiz").addEventListener("click", raiz);