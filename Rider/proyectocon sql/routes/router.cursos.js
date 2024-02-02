import express from 'express'
import { createcurso, deletecurso, getAllcurso, getcurso } from '../controllers/controlls.curso.js';
const Routercurso= express.Router();

Routercurso.get('/',getAllcurso)
Routercurso.get('/:id',getcurso)
Routercurso.post('/', createcurso)
Routercurso.delete('/:id',deletecurso)

export default Routercurso