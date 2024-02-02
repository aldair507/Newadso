import  express  from "express";
import { todosdatosAp } from "../controladores/micontrolador.js";
import datosAprendiz from "../modulos/modulos.js";

const mirutaAprendiz= express.Router();

mirutaAprendiz.get('/',todosdatosAp)

export default mirutaAprendiz

