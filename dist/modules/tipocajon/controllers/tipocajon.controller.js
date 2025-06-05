"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoCajonController = void 0;
const tipocajon_model_1 = require("../models/tipocajon.model");
class TipoCajonController {
    constructor() {
        this.crearTipoCajon = (req, res) => {
            const nuevaTipoCajon = new tipocajon_model_1.default({
                TipoCajon: req.body.TipoCajon
            });
            nuevaTipoCajon.save()
                .then(TipoCajonCreada => {
                res.status(201).json({
                    ok: true,
                    TipoCajon: TipoCajonCreada,
                    message: 'TipoCajon creada'
                });
            })
                .catch(error => {
                res.status(400).json({
                    ok: false,
                    error
                });
            });
        };
        this.obtenerTipoCajons = (req, res) => {
            tipocajon_model_1.default.find()
                .then(TipoCajons => {
                res.status(200).json({
                    ok: true,
                    TipoCajons: TipoCajons
                });
            })
                .catch(error => {
                res.status(400).json({
                    ok: false,
                    error
                });
            });
        };
        this.actualizarTipoCajon = (req, res) => {
            tipocajon_model_1.default.findByIdAndUpdate(req.params.id, {
                TipoCajon: req.body.TipoCajon
            })
                .then(TipoCajonActualizada => {
                res.status(200).json({
                    ok: true,
                    TipoCajon: TipoCajonActualizada,
                    message: 'TipoCajon actualizada'
                });
            })
                .catch(error => {
                res.status(400).json({
                    ok: false,
                    error,
                    message: 'TipoCajon no actualizada'
                });
            });
        };
        this.eliminarTipoCajon = (req, res) => {
            tipocajon_model_1.default.findByIdAndDelete(req.params.id)
                .then(TipoCajonEliminada => {
                res.status(200).json({
                    ok: true,
                    message: 'TipoCajon eliminada'
                });
            })
                .catch(error => {
                res.status(400).json({
                    ok: false,
                    error: error,
                    message: 'TipoCajon no eliminada'
                });
            });
        };
    }
}
exports.TipoCajonController = TipoCajonController;
//# sourceMappingURL=tipocajon.controller.js.map