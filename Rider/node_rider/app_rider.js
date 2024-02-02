



import express from "express";
import cors from "cors";
import bd from "./bd.js";
import mirutaAprendiz from "./rutas/miruta.js"; // Asegúrate de importar la ruta adecuada

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hoy casi pierdo clase de Node.js jiji');
});

app.use('/aprendiz', miruta); // Utiliza la ruta definida correctamente

const PORT = process.env.PORT || 8000; // Utiliza una variable de entorno para el puerto

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

(async () => {
    try {
        await bd.authenticate();
        console.log("Database authentication successful");
    } catch (error) {
        console.error("Database authentication failed");
    }
})();
