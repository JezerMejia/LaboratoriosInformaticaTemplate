function cambiarBotonActivo(btnClass) {
  const boton = document.querySelector(`.${btnClass}`);

  document.querySelectorAll(".btn-label").forEach((btn) => {
    btn.classList.remove("btn-activo");
  });
  boton.classList.toggle("btn-activo");
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("button[data-filter]").forEach((button) => {
    button.addEventListener("click", (event) => {
      const filter = event.target.dataset.filter;

      document.querySelectorAll("tbody tr").forEach((el) => {
        const item = el.dataset.filterItem;
        if (filter === "all" || filter === item) {
          el.classList.remove("d-none");
        } else {
          el.classList.add("d-none");
        }
      });
    });
  });
});
