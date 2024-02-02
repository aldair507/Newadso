import { where } from "sequelize";
import datosaprendiz from "../models/aprendiz.js";
import datoscurso from "../models/aprendiz.js";
export const getAllAprendiz = async (req, res) => {
    try {
        const aprendices = await datosaprendiz.findAll({
            // include:{
            //     model:datoscurso
            // }
        });
       
        res.json(aprendices);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getAprendiz=async(req, res) => {
    try
    {
        const aprendiz = await datosaprendiz.findAll({
            where:{idAprendiz:req.params.id}})
           
        if (!aprendiz){
            return res.status(404).json({ message: "Aprendiz no encontrado" });

        }
        res.json(aprendiz)
    } catch (error) {
        res.status(500).json({ message: error.message });

    }
}


export const createAprendiz = async (req, res) => {
    try {
        const aprendiz = await datosaprendiz.create(req.body);
       
        res.status(201).json(aprendiz); 
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateAprendiz=async(req, res) => {
    try
    {
        const [aprendiz] = await datosaprendiz.update(req.body,{
            where:{idAprendiz:req.params.id},
        })
       
        res.json({message:'registro actualizado'})
    }catch(error){
        res.status(500).json({ message: error.message });

    }
}


export const deleteAprendiz= async (req,res)=>{
    try
    {
        const aprendiz= await datosaprendiz.destroy({
            where:{idAprendiz:req.params.id},
        })
       
        res.json({message:'registro eliminado'})
    } catch(error){
        res.status(500).json({ message: error.message });

    }
}