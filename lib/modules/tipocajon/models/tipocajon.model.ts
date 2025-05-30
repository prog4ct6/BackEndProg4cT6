import { ROLES } from '../../../config';
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;



export interface ITipoCajon extends mongoose.Document {  
    TipoCajon: string;   
 }

 const TipoCajonSchema = new Schema(
    {
        TipoCajon: {
            type: String,
            required: [true, 'TipoCajon required'],
            unique: true
        }
    }
    
 );

const TipoCajon = mongoose.model<ITipoCajon>("TipoCajon", TipoCajonSchema);
export default TipoCajon;