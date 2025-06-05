"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const tipocajon_routes_1 = require("./modules/tipocajon/routes/tipocajon.routes");
const usuario_routes_1 = require("./modules/usuario/routes/usuario.routes");
class Routes {
    constructor() {
        this.usuarioRoutes = new usuario_routes_1.UsuarioRoutes();
        this.tipoCajonRoutes = new tipocajon_routes_1.TipoCajonRoutes();
    }
    routes(app) {
        this.usuarioRoutes.routes(app);
        this.tipoCajonRoutes.routes(app);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map