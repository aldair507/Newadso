const express = require('express');
const router = express.Router();
const Task = require ('../models/task');
/*
router.get('/', (req,res) => {
    //Esto me permite responder con un hello word cuando llegue una peticion a mi ruta del servidor.
    res.send("Hello Word 2");
}) 
*/

router.get('/',async (req,res)=>{ 
    const tasks = await Task.find({})
        /* Esto me permite conocer si la base de datos esta funcionando o en caso contrario cuando me genere un error me indica cual es el error.
        .then(tasks => console.log(tasks))
        .catch(err => console.error(err));
        */
    res.json(tasks);
})

router.get('/:id', async (req, res) => {
    const task = await Task.findById(req.params.id);
    res.json(task)
})

router.post('/', async (req,res) => {
    const { title, description } = req.body; //Esto me permite guardar en una constante lo que digite el cliente.
    const task = new Task({title,description}) //Esto creara un nueva tarea o un nuevo modelo de tarea en un objeto.
    // console.log(task); //Me indica si lo que digito el usuario se guarda en mongodb.
    await task.save(); //Me permite guardar las tareas
    res.json({status: "Tarea Guardada"})
}); //Es el metodo usado por http para enviar datos

router.put('/:id', async (req,res) => { //Actualizar una tarea
    const { title, description} = req.body;
    const newTask = {title, description};
    await Task.findByIdAndUpdate(req.params.id, newTask)
    // console.log(req.params.id); Me permite ver si el id que esta enviando el cliente es recibido.
    res.json({status: "Tarea actualizada"});
}) //Me permite actualizar las tareas por medio de su identificador unico del mongodb

router.delete('/:id', async (req,res) => { //Eliminar la tarea
    await Task.findByIdAndRemove(req.params.id);
    res.json({status: "Tarea eliminada"})
})
module.exports = router;

