import { where } from "sequelize";
import competencia from "../models/competencia.js";

export const getAllcompetencia = async (req, res) => {
    try {
        const aprendices = await competencia.findAll();
        res.json(aprendices);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getcompetencia=async(req, res) => {
    try
    {
        const aprendiz = await competencia.findAll({
            where:{idCompetencia:req.params.id}})
        if (!aprendiz){
            return res.status(404).json({ message: "Aprendiz no encontrado" });

        }
        res.json(aprendiz)
    } catch (error) {
        res.status(500).json({ message: error.message });

    }
}


export const createcompetencia=async(req, res) => {
    try
    {
        const aprendiz = await competencia.create(req.body)
        res.status(201).json(aprendiz)
    }catch(error){
        res.status(500).json({ message: error.message });

    }
}

export const updatecompetencia=async(req, res) => {
    try
    {
        const [aprendiz] = await competencia.update(req.body,{
            where:{idCompetencia:req.params.id},
        })
        if(aprendiz===0){
            return res.status(404).json({message:'aprendiz no encontrado'})
        }
        res.json({message:'registro actualizado'})
    }catch(error){
        res.status(500).json({ message: error.message });

    }
}


export const deletecompetencia= async (req,res)=>{
    try
    {
        const aprendiz= await competencia.destroy({
            where:{idCompetencia:req.params.id},
        })
        if(aprendiz===0){
            res.status(404).json({ message:'aprendiz no encontrado'})
        }
        res.json({message:'registro eliminado'})
    } catch(error){
        res.status(500).json({ message: error.message });

    }
}