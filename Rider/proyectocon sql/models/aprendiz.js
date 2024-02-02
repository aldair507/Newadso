import bd from "../Bases/miBase.js";
import { DataTypes} from "sequelize";
import {datoscurso} from "./curso.js";
export const datosaprendiz = bd.define('aprendiz', {
    idAprendiz: {
        type: DataTypes.INTEGER,
        primaryKey: true, 
        autoIncrement: true,
    },
    nombreAprendiz: { 
        type: DataTypes.STRING,
    },
    passwordAprendiz: {
        type:DataTypes.STRING,
    },
    emailAprendiz: {
        type:DataTypes.STRING, 
    }
},
{
    tableName: 'aprendiz', 
    timestamps: false
});

datoscurso.hasMany(datosaprendiz,{
    foreignKey: 'curso_idCurso',
    souceKey: 'idCurso'
})

datosaprendiz.belongsTo(datoscurso,{
    foreignKey: 'curso_idCurso'
})

export default datoscurso;
