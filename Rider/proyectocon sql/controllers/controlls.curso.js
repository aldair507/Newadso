import { where } from "sequelize";
import {datoscurso} from "../models/curso.js";

export const getAllcurso = async (req, res) => {
    try {
        const cursos = await datoscurso.findAll();
        res.json(cursos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getcurso=async(req, res) => {
    try
    {
        const cursos = await datoscurso.findAll({
            where:{ idCurso:req.params.id}})
           
      
        res.json(cursos)
    } catch (error) {
        res.status(500).json({ message: error.message });

    }
}


export const createcurso = async (req, res) => {
    try {
        const cursos = await datoscurso.create(req.body);
       
        res.status(201).json(cursos); 
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}



export const deletecurso= async (req,res)=>{
    try
    {
        const cursos= await datoscurso.destroy({
            where:{ idCurso:req.params.id},
        })
       
        res.json({message:'registro eliminado'})
    } catch(error){
        res.status(500).json({ message: error.message });

    }
}