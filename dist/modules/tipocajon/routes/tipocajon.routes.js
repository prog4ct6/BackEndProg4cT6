"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoCajonRoutes = void 0;
const tipocajon_controller_1 = require("../controllers/tipocajon.controller");
class TipoCajonRoutes {
    constructor() {
        this.tipoCajonController = new tipocajon_controller_1.TipoCajonController();
    }
    routes(app) {
        app.route('/tipoCajon')
            .get(this.tipoCajonController.obtenerTipoCajons)
            .post(this.tipoCajonController.crearTipoCajon);
        app.route('/tipoCajon/:id')
            .put(this.tipoCajonController.actualizarTipoCajon)
            .delete(this.tipoCajonController.eliminarTipoCajon);
    }
}
exports.TipoCajonRoutes = TipoCajonRoutes;
//# sourceMappingURL=tipocajon.routes.js.map