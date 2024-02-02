import express from 'express'
import { createAprendiz, getAllAprendiz,getAprendiz,updateAprendiz,deleteAprendiz } from '../controllers/controlls.aprendiz.js';
const Routers= express.Router();

Routers.get('/',getAllAprendiz)
Routers.get('/:id',getAprendiz)
Routers.post('/',createAprendiz)
Routers.put('/:id',updateAprendiz)
Routers.delete('/:id',deleteAprendiz)

export default Routers