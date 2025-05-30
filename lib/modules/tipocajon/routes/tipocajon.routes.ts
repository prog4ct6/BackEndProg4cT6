import { TipoCajonController } from "../controllers/tipocajon.controller";

export class TipoCajonRoutes {
    private tipoCajonController: TipoCajonController = new TipoCajonController();

    public routes(app): void {
        app.route('/tipoCajon')
        .get(this.tipoCajonController.obtenerTipoCajons)
        .post(this.tipoCajonController.crearTipoCajon);

        app.route('/tipoCajon/:id')
        .put(this.tipoCajonController.actualizarTipoCajon)
        .delete(this.tipoCajonController.eliminarTipoCajon);
    }
}