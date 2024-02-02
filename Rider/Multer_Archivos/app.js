const express = require("express");

const app = express();
const multer= require("multer")
const mimetypes = require("mime-types");
const cors = require("cors")


const Storage= multer.diskStorage({
    destination:'uploads/',
    filename: function (req,file,cb){
        cb("",Date.now()+file.originalname+"."+mimetypes.extension(file.mimetype))
    }
})
const upload = multer({
    storage:Storage
 })
 

app.get("/", (req, res) => {
    console.log(__dirname)
  res.sendFile(__dirname+"/view/index.html"); 
});
app.post('/files',upload.single('avatar'), (req, res) => {
res.send('todo bien ')
})
app.use(cors())
app.use((err, req, res, next) => {
    if (err instanceof multer.MulterError) {
    
      res.status(400).send({message:`Error: ${err}`})
    } else {
      next(err);
    }
  });
  

app.listen(3000, () => console.log('Servidor iniciado en el puerto 3000'));
