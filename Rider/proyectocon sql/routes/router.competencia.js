import express from 'express'

import { getAllcompetencia,getcompetencia,createcompetencia,deletecompetencia,updatecompetencia } from '../controllers/controlls.competencia.js';

const Routercompetencia= express.Router();


Routercompetencia.get('/', getAllcompetencia)
Routercompetencia.get('/:id',getcompetencia)
Routercompetencia.post('/',createcompetencia)
Routercompetencia.put('/:id',updatecompetencia )
Routercompetencia.delete('/:id',deletecompetencia)

export default Routercompetencia