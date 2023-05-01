<!--Filtra tabal por botones (descarado)-->

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


const sidebarToggler = document.querySelector("#sidebar-toggler");
sidebarToggler.addEventListener("click", () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("active");
});
