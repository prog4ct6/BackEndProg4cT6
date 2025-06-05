import { TipoCajonRoutes } from "./modules/tipocajon/routes/tipocajon.routes";
import { UsuarioRoutes } from "./modules/usuario/routes/usuario.routes";

export class Routes {

    private usuarioRoutes: UsuarioRoutes = new UsuarioRoutes();
    private tipoCajonRoutes: TipoCajonRoutes = new TipoCajonRoutes();


    public routes(app): void {
        this.usuarioRoutes.routes(app);
        this.tipoCajonRoutes.routes(app);
    }
}