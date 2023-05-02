/* Búsqueda por nombre de Laboratorio */
$(document).ready(function () {
  $("#myInput").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $(".card").each(function (index) {
      var card = $(this);
      var name = card.find(".card-lab").text().toLowerCase();
      if (name.indexOf(value) !== -1) {
        card.show();
      } else {
        card.hide();
      }
    });
  });
});
/* Búsqueda por nombre de Laboratorio */

/* Side bar script */

const sidebarToggler = document.querySelector("#sidebar-toggler");
sidebarToggler.addEventListener("click", () => {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.toggle("active");
});

/* Side bar script */

/* Date picker script */

$(function () {
  $("#datepicker").datepicker();
});

// Date picker script-->
// TimePicker-inicio-->

const upButtonI = document.querySelector(".up-arrow");
const downButtonI = document.querySelector(".down-arrow");
const quantityInputI = document.querySelector("#quantity");
const amPmButton = document.querySelector(".btn-time-picker-inicio");
let amPmState = "AM";

function updateQuantityInput(amount) {
  // Actualiza la cantidad en el input de cantidad y cambia de PM a AM si es necesario
  let newQuantity =
    ((parseInt(quantityInputI.value) + amount - 1 + 12) % 12) + 1;
  quantityInputI.value = (newQuantity < 10 ? "0" : "") + newQuantity;

  if (newQuantity === 12) {
    amPmState = amPmState === "AM" ? "PM" : "AM";
    amPmButton.innerText = amPmState;
  }
}

// Agrega un evento de clic a los botones de incremento y decremento
upButtonI.addEventListener("click", () => {
  updateQuantityInput(1);
});
downButtonI.addEventListener("click", () => {
  updateQuantityInput(-1);
});

const upButton = document.querySelector(".up-arrow-l");
const downButton = document.querySelector(".down-arrow-l");
const quantityInput = document.querySelector("#quantity-l");
const quantityInput3 = document.querySelector("#quantity");
const amPmButton1 = document.querySelector(".btn-time-picker-inicio");
let amPmState1 = "AM";

function updateQuantity(delta) {
  const currentValue = parseInt(quantityInput.value);
  const newValue = (currentValue + delta + 60) % 60;

  quantityInput.value = newValue < 10 ? "0" + newValue : newValue;

  if (newValue === 0) {
    if (delta < 0) {
      quantityInput3.value = parseInt(quantityInput3.value) - 1;
    }
    if (delta > 0) {
      quantityInput3.value = parseInt(quantityInput3.value) + 1;
    }

    if (parseInt(quantityInput3.value) < 1) {
      quantityInput3.value = "12";
    }
    if (parseInt(quantityInput3.value) < 10) {
      quantityInput3.value = "0" + quantityInput3.value;
    }
  } else if (newValue === 45) {
    quantityInput3.value = ((parseInt(quantityInput3.value) - 1 + 11) % 11) + 1;
    if (parseInt(quantityInput3.value) < 10) {
      quantityInput3.value = "0" + quantityInput3.value;
    }
  }

  if (quantityInput3.value === "12" && newValue === 0) {
    amPmState1 = amPmState1 === "AM" ? "PM" : "AM";
    amPmButton1.innerText = amPmState1;
  }
}

upButton.addEventListener("click", () => {
  updateQuantity(15);
});

downButton.addEventListener("click", () => {
  updateQuantity(-15);
});

/* TimePicker 2 */

const upButtonF = document.querySelector(".up-arrow-f");
const downButtonF = document.querySelector(".down-arrow-f");
const quantityInputF = document.querySelector("#quantity-f");
const amPmButtonF = document.querySelector(".btn-time-picker-final");
let amPmStateF = "AM";

function updateQuantityInput2(amount) {
  // Actualiza la cantidad en el input de cantidad y cambia de PM a AM si es necesario
  let newQuantity =
    ((parseInt(quantityInputF.value) + amount - 1 + 12) % 12) + 1;
  quantityInputF.value = (newQuantity < 10 ? "0" : "") + newQuantity;

  if (newQuantity === 12) {
    amPmStateF = amPmStateF === "AM" ? "PM" : "AM";
    amPmButtonF.innerText = amPmStateF;
  }
}

// Agrega un evento de clic a los botones de incremento y decremento
upButtonF.addEventListener("click", () => {
  updateQuantityInput2(1);
});
downButtonF.addEventListener("click", () => {
  updateQuantityInput2(-1);
});

const upButtonFL = document.querySelector(".up-arrow-f-l");
const downButtonFL = document.querySelector(".down-arrow-f-l");
const quantityInputFL = document.querySelector("#quantity-f-l");
const quantityInputFF = document.querySelector("#quantity-f");
const amPmButtonFL = document.querySelector(".btn-time-picker-final");
let amPmStateFL = "AM";

function updateQuantity2(delta2) {
  const currentValue = parseInt(quantityInputFL.value);
  const newValue = (currentValue + delta2 + 60) % 60;

  quantityInputFL.value = newValue < 10 ? "0" + newValue : newValue;

  if (newValue === 0) {
    if (delta2 < 0) {
      quantityInputFF.value = parseInt(quantityInputFF.value) - 1;
    }
    if (delta2 > 0) {
      quantityInputFF.value = parseInt(quantityInputFF.value) + 1;
    }

    if (parseInt(quantityInputFF.value) < 1) {
      quantityInputFF.value = "12";
    }
    if (parseInt(quantityInputFF.value) < 10) {
      quantityInputFF.value = "0" + quantityInputFF.value;
    }
  } else if (newValue === 45) {
    quantityInputFF.value =
      ((parseInt(quantityInputFF.value) - 1 + 11) % 11) + 1;
    if (parseInt(quantityInputFF.value) < 10) {
      quantityInputFF.value = "0" + quantityInputFF.value;
    }
  }

  if (quantityInputFF.value === "12" && newValue === 0) {
    amPmStateFL = amPmStateFL === "AM" ? "PM" : "AM";
    amPmButtonFL.innerText = amPmStateFL;
  }
}

upButtonFL.addEventListener("click", () => {
  updateQuantity2(15);
});

downButtonFL.addEventListener("click", () => {
  updateQuantity2(-15);
});

/* TimePicker 2 */

/* Vista previa de imagen */

 // Esperamos a que se cargue el documento
 $(document).ready(function() {
  // Escuchamos el evento change del input file
  $("#input-imagenAdd, #input-imagenEdit").change(function() {
    // Creamos un objeto FileReader para leer el archivo seleccionado
    var reader = new FileReader();
    // Escuchamos el evento load del FileReader
    reader.onload = function() {
      // Asignamos la imagen cargada al src del elemento img
      $("#img-previewAdd, #img-previewEdit").attr("src", reader.result);
      // Ocultamos el label
      $(".custom-file-uploadAdd").show();
      $(".custom-file-uploadEdit").show();
    };
    // Leemos el archivo seleccionado como URL de datos
    reader.readAsDataURL(this.files[0]);
  });
});

$(document).ready(function() {
  $('#ModalAddSoftware').on('show.bs.modal', function() {
    $('#img-previewAdd').attr('src', '');
    $(".custom-file-uploadAdd, .custom-file-uploadEdit").show();
  });
});