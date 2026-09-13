const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const resultado = document.getElementById("resultado");

function suma() {
    if (num1.value === "" || num2.value === "") {
        resultado.textContent = "Ingrese dos números";
    } else {
        resultado.textContent = Number(num1.value) + Number(num2.value);
    }
}

function resta() {
    if (num1.value === "" || num2.value === "") {
        resultado.textContent = "Ingrese dos números";
    } else {
        resultado.textContent = Number(num1.value) - Number(num2.value);
    }
}

function multiplicacion() {
    if (num1.value === "" || num2.value === "") {
        resultado.textContent = "Ingrese dos números";
    } else {
        resultado.textContent = Number(num1.value) * Number(num2.value);
    }
}

function division() {
    if (num1.value === "" || num2.value === "") {
        resultado.textContent = "Ingrese dos números";
    } else if (Number(num2.value) === 0) {
        resultado.textContent = "No se puede dividir por cero";
    } else {
        resultado.textContent = Number(num1.value) / Number(num2.value);
    }
}

function potencia() {
    if (num1.value === "" || num2.value === "") {
        resultado.textContent = "Ingrese dos números";
    } else {
        resultado.textContent = Number(num1.value) ** Number(num2.value);
    }
}

function raiz() {
    if (num1.value === "") {
        resultado.textContent = "Ingrese un número";
    } else if (Number(num1.value) < 0) {
        resultado.textContent = "No existe raíz real de un número negativo";
    } else {
        resultado.textContent = Math.sqrt(Number(num1.value));
    }
}

document.getElementById("sumar").addEventListener("click", suma);
document.getElementById("restar").addEventListener("click", resta);
document.getElementById("multiplicar").addEventListener("click", multiplicacion);
document.getElementById("dividir").addEventListener("click", division);
document.getElementById("potencia").addEventListener("click", potencia);
document.getElementById("raiz").addEventListener("click", raiz);