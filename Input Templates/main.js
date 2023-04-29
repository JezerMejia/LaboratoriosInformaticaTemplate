const btnSpinnerUp = document.querySelector('.btn--spinner-up')
const btnSpinnerDown = document.querySelector('.btn--spinner-down')
const ddlAmPm = document.getElementById('ddlAmPm')

function validarNumeros(input) {
    // Eliminar cualquier caracter que no sea un número
    input.value = input.value.replace(/\D/g, "");
}

function spinnerUp(inputClass){
    const input = document.querySelector(`.${inputClass}`)
    let value = input.value

    // Eliminar cualquier caracter que no sea un número
    value = value.replace(/\D/g, "");

    //Aumenta el valor que tiene
    value = parseInt(value) + 1

    // Agregar un cero delante si la cantidad es menor que 10
    if (value < 10) {
        value = "0" + value;
    }

    if(value == 13){
        value = 1
        if(ddlAmPm.selectedIndex == 0){
            ddlAmPm.selectedIndex = 1
        }

        else if(ddlAmPm.selectedIndex == 1){
            ddlAmPm.selectedIndex = 0
        }
         
    }

    input.value = value
}

function spinnerDown(inputClass){
    const input = document.querySelector(`.${inputClass}`)
    let value = input.value

    value = value.replace(/\D/g, "");
    value = parseInt(value) - 1

    if (value < 10) {
        value = "0" + value;
    }

    input.value = value
}

function setCategory(inputId, value){
    const input = document.querySelector(`#${inputId}`)
    console.log("Hola")
    input.value = value
}