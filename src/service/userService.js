// hash Password
import bcrypt from 'bcryptjs'
const salt = bcrypt.genSaltSync(10);
const hashPassword = (password) => {
    return bcrypt.hashSync(password, salt);
}


// create the connection to database
import mysql from 'mysql2'
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'jwt'
});

const createNewUser = (email, password, username) => {
    connection.query(
        'INSERT INTO users (email, password, username) VALUE (?, ?, ?)',
        [email, hashPassword(password), username],
        function (err, results, fields) {
            if (err) {
                console.log(err);
            }
            console.log(results); // results contains rows returned by server
        }
    )
}

const getUserList = (email, password, username) => {
    connection.query(
        'Select * from users',
        function (err, results, fields) {
            if (err) {
                console.log(err);
            }
            console.log(results); // results contains rows returned by server
        }
    )
}

module.exports = {
    createNewUser, getUserList
}