import  Sequelize from "sequelize";

const bd= new Sequelize ('sena', 'root','root',{
    host: 'localhost',
    dialect:'mysql'
});

export default bd;
