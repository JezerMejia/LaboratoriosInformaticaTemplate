$(document).ready(function () {
    $("#myInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#dtTable tbody tr").each(function (index) {
            var row = $(this);
            var text = row.text().toLowerCase();
            if (text.indexOf(value) !== -1) {
                row.show();
            } else {
                row.hide();
            }
        });
    });
});


$(document).ready(function () {
    $('button[data-filter]').on('click', function () {
        var filter = $(this).data('filter');
        $('tbody tr').each(function () {
            var item = $(this).data('filter-item');
            if (filter === 'all' || filter === item) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });
});

function CambiarBotonActivo(botonClass){
    const boton = document.querySelector(`.${botonClass}`)
    boton.classList.toggle('btn-activo')

    if (botonClass === 'all'){
        const botonAceptados = document.querySelector('.accept')
        botonAceptados.classList.remove('btn-activo')
    }else{
        const botonTodo = document.querySelector('.all')
        botonTodo.classList.remove('btn-activo')
    }
}

document.addEventListener('click', function (event){
    if (!event.target.classList.contains('element-option') && !event.target.classList.contains('menu-container')){
        ocultarMenuOpciones()
    }
})

function ocultarMenuOpciones(){
    const MenusOpciones = document.querySelectorAll('.menu-container')

    MenusOpciones.forEach((menu) => {
        menu.style.display = 'none';
    })
}
function MostrarMenuOpciones(claseContenedor){
    const contenedor = document.querySelector(`.${claseContenedor}`)

    //Busca dentro si dentro del contenedor padre hay un elemento con la clase menu-container
    const MenusExistente = contenedor.querySelector('.menu-container')
    console.log(MenusExistente)

    if (MenusExistente !== null){
        ocultarMenuOpciones()
        MenusExistente.style.display = 'block'
    }else{
        ocultarMenuOpciones()
        const menuContainer = document.createElement("div")
        menuContainer.className = "menu-container w-75 position-absolute"

        const card = document.createElement("div")
        card.className = "card border-0 rounded-xl shadow d-flex align-items-center"

        const cancel = document.createElement("button")
        cancel.className = "w-100 text-center mt-1 mb-0 py-1 border-0 bg-white"
        cancel.innerText = "Cancelar"
        cancel.dataset.toggle = "modal"
        cancel.dataset.target = "#cancelar-modal"

        const approve = document.createElement("button")
        approve.className = "w-100 text-center py-1 m-0 border-0 bg-white"
        approve.innerText = "Aceptar"
        approve.dataset.toggle = "modal"
        approve.dataset.target = "#aceptar-modal"

        const reject = document.createElement("button")
        reject.className = "w-100 text-center py-1 m-0 mb-1 border-0 bg-white"
        reject.innerText = "Rechazar"
        reject.dataset.toggle = "modal"
        reject.dataset.target = "#rechazar-modal"

        card.appendChild(cancel)
        card.appendChild(approve)
        card.appendChild(reject)

        menuContainer.appendChild(card)

        contenedor.appendChild(menuContainer)
    }
}

$(function () {
    $('#datepicker').datepicker({
        autoclose: true,
        format: 'yyyy-mm-dd',
        todayHighlight: true,
        orientation: "bottom auto"
    });
});


$(function () {
    $('#timepicker').datetimepicker({
        format: 'LT'
    });
});

<!--TimePicker-inicio-->


const upButtonI = document.querySelector('.up-arrow');
const downButtonI = document.querySelector('.down-arrow');
const quantityInputI = document.querySelector('#quantity');
const amPmButton = document.querySelector('.btn-time-picker-inicio');
let amPmState = 'AM';

function updateQuantityInput(amount) {
    // Actualiza la cantidad en el input de cantidad y cambia de PM a AM si es necesario
    let newQuantity = ((parseInt(quantityInputI.value) + amount - 1 + 12) % 12) + 1;
    console.log(newQuantity);
    quantityInputI.value = (newQuantity < 10 ? '0' : '') + newQuantity;

    if (newQuantity === 12) {
        amPmState = (amPmState === 'AM') ? 'PM' : 'AM';
        amPmButton.innerText = amPmState;
    }
}

// Agrega un evento de clic a los botones de incremento y decremento
upButtonI.addEventListener('click', () => {
    updateQuantityInput(1);
});
downButtonI.addEventListener('click', () => {
    updateQuantityInput(-1);
});


const upButton = document.querySelector('.up-arrow-l');
const downButton = document.querySelector('.down-arrow-l');
const quantityInput = document.querySelector('#quantity-l');
const quantityInput3 = document.querySelector('#quantity');
const amPmButton1 = document.querySelector('.btn-time-picker-inicio');
let amPmState1 = 'AM';

function updateQuantity(delta) {
    const currentValue = parseInt(quantityInput.value);
    const newValue = (currentValue + delta + 60) % 60;
    console.log(newValue);

    quantityInput.value = newValue < 10 ? '0' + newValue : newValue;

    if (newValue === 0) {

        if (delta < 0) {
            quantityInput3.value = parseInt(quantityInput3.value) - 1;
        }
        if (delta > 0) {
            quantityInput3.value = parseInt(quantityInput3.value) + 1;
        }

        if (parseInt(quantityInput3.value) < 1) {
            quantityInput3.value = '12';
        }
        if (parseInt(quantityInput3.value) < 10) {
            quantityInput3.value = '0' + quantityInput3.value;
        }
    } else if (newValue === 45) {
        quantityInput3.value = (parseInt(quantityInput3.value) - 1 + 11) % 11 + 1;
        if (parseInt(quantityInput3.value) < 10) {
            quantityInput3.value = '0' + quantityInput3.value;
        }
    }

    if (quantityInput3.value === '12' && newValue === 0) {
        amPmState1 = amPmState1 === 'AM' ? 'PM' : 'AM';
        amPmButton1.innerText = amPmState1;
    }
}

upButton.addEventListener('click', () => {
    updateQuantity(15);
});

downButton.addEventListener('click', () => {
    updateQuantity(-15);
});

<!--TimePicker 2-->


const upButtonF = document.querySelector('.up-arrow-f');
const downButtonF = document.querySelector('.down-arrow-f');
const quantityInputF = document.querySelector('#quantity-f');
const amPmButtonF = document.querySelector('.btn-time-picker-final');
let amPmStateF = 'AM';

function updateQuantityInput2(amount) {
    // Actualiza la cantidad en el input de cantidad y cambia de PM a AM si es necesario
    let newQuantity = ((parseInt(quantityInputF.value) + amount - 1 + 12) % 12) + 1;
    console.log(newQuantity);
    quantityInputF.value = (newQuantity < 10 ? '0' : '') + newQuantity;

    if (newQuantity === 12) {
        amPmStateF = (amPmStateF === 'AM') ? 'PM' : 'AM';
        amPmButtonF.innerText = amPmStateF;
    }
}

// Agrega un evento de clic a los botones de incremento y decremento
upButtonF.addEventListener('click', () => {
    updateQuantityInput2(1);
});
downButtonF.addEventListener('click', () => {
    updateQuantityInput2(-1);
});


const upButtonFL = document.querySelector('.up-arrow-f-l');
const downButtonFL = document.querySelector('.down-arrow-f-l');
const quantityInputFL = document.querySelector('#quantity-f-l');
const quantityInputFF = document.querySelector('#quantity-f');
const amPmButtonFL = document.querySelector('.btn-time-picker-final');
let amPmStateFL = 'AM';

function updateQuantity2(delta2) {
    const currentValue = parseInt(quantityInputFL.value);
    const newValue = (currentValue + delta2 + 60) % 60;
    console.log(newValue);

    quantityInputFL.value = newValue < 10 ? '0' + newValue : newValue;

    if (newValue === 0) {

        if (delta2 < 0) {
            quantityInputFF.value = parseInt(quantityInputFF.value) - 1;
        }
        if (delta2 > 0) {
            quantityInputFF.value = parseInt(quantityInputFF.value) + 1;
        }

        if (parseInt(quantityInputFF.value) < 1) {
            quantityInputFF.value = '12';
        }
        if (parseInt(quantityInputFF.value) < 10) {
            quantityInputFF.value = '0' + quantityInputFF.value;
        }
    } else if (newValue === 45) {
        quantityInputFF.value = (parseInt(quantityInputFF.value) - 1 + 11) % 11 + 1;
        if (parseInt(quantityInputFF.value) < 10) {
            quantityInputFF.value = '0' + quantityInputFF.value;
        }
    }

    if (quantityInputFF.value === '12' && newValue === 0) {
        amPmStateFL = amPmStateFL === 'AM' ? 'PM' : 'AM';
        amPmButtonFL.innerText = amPmStateFL;
    }
}

upButtonFL.addEventListener('click', () => {
    updateQuantity2(15);
});

downButtonFL.addEventListener('click', () => {
    updateQuantity2(-15);
});

<!--XD-->

$('.input-picker').on('input', function () {
    var x = $(this).val();
    if (x < 10) x = '0' + x;
    $(this).val(x);
});


const sidebarToggler = document.querySelector("#sidebar-toggler");
sidebarToggler.addEventListener("click", () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("active");
});