import { Sequelize } from "sequelize";

const bd= new Sequelize('aprendiz','root','root',{
    host:'localhost', dialect:'mysql'
})

export default bd;