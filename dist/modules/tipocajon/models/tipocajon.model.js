"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const TipoCajonSchema = new Schema({
    TipoCajon: {
        type: String,
        required: [true, 'TipoCajon required'],
        unique: true
    }
});
const TipoCajon = mongoose.model("TipoCajon", TipoCajonSchema);
exports.default = TipoCajon;
//# sourceMappingURL=tipocajon.model.js.map