
import bd from "../Bases/miBase.js";
import { DataTypes} from "sequelize";



export const datoscurso= bd.define('curso',{
    idCurso:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombreCurso:{
        type: DataTypes.STRING,
    },

},
{
    tableName: 'curso', 
    timestamps: false
})



