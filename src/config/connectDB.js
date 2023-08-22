const { Sequelize } = require('sequelize');

// for mysql2
const sequelize = new Sequelize('jwt', 'root', null, {
    host: 'localhost',
    /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
    dialect: 'mysql'
});

const testConnect = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
export default testConnect;