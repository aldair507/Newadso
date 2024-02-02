import express from "express";
import cors from "cors";
import indexRouter from './routes/index.js'

const App = express();

App.use(cors()); // Configurar cors antes de las rutas

App.use(indexRouter);

App.listen(3000, () => {
    console.log('server on port 3000');
});
