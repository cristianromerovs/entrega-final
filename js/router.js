// LISTA DE RUTAS (ASOCIAR A CADA ACCION)
const routes = [{
        path: "/",
        action: "agregar"
    },
    {
        path: "/listar",
        action: "listar"
    },
    {
        path: "/buscar",
        action: "buscar"
    },
];

// OBTENER LA RUTA ACTUAL (USAMOS EL OBJETO LOCATION Y SU PROPIEDAD HASH).
// SI "" || '/'  ENTONCES parseLocation = '/'
const parseLocation = () => location.hash.slice(1).toLowerCase() || "/";

// BUSCAMOS LA ACCIÓN EN EL ARRAY routes
// QUE CORRESPONDE A LA RUTA CON FIND
const findActionByPath = (path, routes) => routes.find((r) => r.path == path || undefined);

const router = (customPath) => {
    console.log("ejecuto router()");
    //OBTENER RUTA ACTUAL
    let path = parseLocation();
    if (customPath) path = customPath;
    const divContenido = "#app";

    const {
        action = "error"
    } = findActionByPath(path, routes) || {};

    // LLAMAMOS AL MÈTODO CORRESPONDIENTE PARA LA ACCIÒN ENCONTRADA
    switch (action) {
        case "agregar":
            app.agregar(divContenido);
            break;
        case "listar":
            app.listar(divContenido);
            break;
        case "buscar":
            app.buscar(divContenido);
            break;
        default:
            ErrorComponent(divContenido);
            break;
    }
};