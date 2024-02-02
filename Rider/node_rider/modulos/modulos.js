
import bd from "../bd.js";

import { DataTypes } from "sequelize";

const datosAprendiz= bd.define('aprendices',{
    id: {type: DataTypes.STRING},
    nombre: {type:DataTypes. STRING},
    apellidos: {type:DataTypes.STRING}

})

export default datosAprendiz