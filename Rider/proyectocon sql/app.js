import express  from "express";
import cors from "cors"
import Routers from "./routes/routes.aprendiz.js";
import Routercompetencia from './routes/router.competencia.js';
import bd from "./Bases/miBase.js";
import Routercurso from "./routes/router.cursos.js";

const app = express();
app.use(cors());

app.use(express.json());

app.get('/', (req, res)=>{
    res.send('<h1> esto es node</h1>')
});

app.listen(3000, ()=>{
    console.log('conectado a http://localhost:3000/')
})

app.use('/estudiantes', Routers)
app.use('/competencia', Routercompetencia)
app.use('/cursos',Routercurso)
try{
    await bd.authenticate()
    await bd. sync ({force:false})
    console.log('conexion exitosa')
} catch (err){
    console.log(err)
}