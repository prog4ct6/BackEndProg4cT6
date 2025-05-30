import { Request, Response } from 'express';
import * as _ from 'lodash';
import TipoCajon from '../models/tipocajon.model';

export class TipoCajonController {

    crearTipoCajon = (req: Request, res: Response) => {
        const nuevaTipoCajon = new TipoCajon(
            {
                TipoCajon: req.body.TipoCajon
            }
        );

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
    }

    obtenerTipoCajons = (req: Request, res: Response) => {
        TipoCajon.find()
        .then(TipoCajons => {
            res.statu(200).json({
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
    }

    actualizarTipoCajon = (req: Request, res: Response) => {
        TipoCajon.findByIdAndUpdate(req.params.id, {
            TipoCajon: req.body.TipoCajon
        })
        .then(TipoCajonActualizada => {
            res.status(200).json({
                ok: true,
                TipoCajon: TipoCajonActualizada,
                message: 'TipoCajon actualizada'                
            })
        })
        .catch(error => {
            res.status(400).json({
                ok: false,
                error,
                message: 'TipoCajon no actualizada'
            });
        });

    }

    eliminarTipoCajon = (req: Request, res: Response) => {
        TipoCajon.findByIdAndDelete(req.params.id)
        .then(TipoCajonEliminada => {
            res.status(200).json({
                ok: true,
                message: 'TipoCajon eliminada'
            })
        })
        .catch(error => {
            res.status(400).json({
                ok: false,
                error: error,
                message: 'TipoCajon no eliminada'
            })
        });
    }
}