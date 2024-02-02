import { Timestamp } from "mongodb";
import bd from "../Bases/miBase.js";
import { DataTypes} from "sequelize";


export const competencia= bd.define('competencia',{
    idCompetencia:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombreCompetencia:{
        type: DataTypes.STRING,
    },

},
{
    tableName: 'competencia', 
    timestamps: false
})

export default competencia;