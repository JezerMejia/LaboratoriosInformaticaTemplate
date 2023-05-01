const sidebarToggler = document.querySelector("#sidebar-toggler");
sidebarToggler.addEventListener("click", () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("active");
});