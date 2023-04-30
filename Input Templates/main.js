

function validarNumeros(input) {
    // Eliminar cualquier caracter que no sea un número
    input.value = input.value.replace(/\D/g, "");
}

function spinnerUp(inputClass, selectId) {
    const input = document.querySelector(`.${inputClass}`)
    const ddlAmPm = document.getElementById(selectId)
    let value = input.value

    // Eliminar cualquier caracter que no sea un número
    value = value.replace(/\D/g, "");

    //Aumenta el valor que tiene
    value = parseInt(value) + 1

    // El "icon element" tiene que tener "hour" en la clase que se pase para que esto funcione, igual para minutos.
    if(inputClass.includes("hour")){
        if (value == 13) {
            value = 1    
        }
        if(value == 12){
            if (ddlAmPm.selectedIndex == 0) {
                ddlAmPm.selectedIndex = 1
            }
    
            else if (ddlAmPm.selectedIndex == 1) {
                ddlAmPm.selectedIndex = 0
            }
        }
    }
    else if(inputClass.includes("minute")){
        if (value == 60) {
            value = 0    
        }
    }
    
    

    

    // Agregar un cero delante si la cantidad es menor que 10
    input.value = value < 10 ? `0${value}` : value;
}

function spinnerDown(inputClass) {
    const input = document.querySelector(`.${inputClass}`)
    let value = input.value

    value = value.replace(/\D/g, "");
    value = parseInt(value) - 1

    if(inputClass.includes("minute")){
        if (value < 0) {
            value = 0    
        }
    }
    else if(value < 1) {
        value = 1;
    }

    input.value = value < 10 ? `0${value}` : value;
}

function setCategory(inputId, value) {
    const input = document.querySelector(`#${inputId}`)
    input.value = value
}