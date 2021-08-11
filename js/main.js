const app = new ProductoController(new ProductoModel(), new ProductoView());

$(window).on("load", function () {
    router();
});

$(window).on("hashchange", function () {
    router();
});