import datosAprendiz from "../modulos/modulos.js";

export const todosdatosAp = async (req, res) => {
    try {
        const aprendices = await datosAprendiz.findAll(); // Quita el punto después de await
        res.json(aprendices);
    } catch (error) {
        res.json({ message: error.message });
    }
};


