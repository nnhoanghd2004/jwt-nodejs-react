// const mysql = require('mysql2');

// // create the connection to database
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     database: 'jwt'
// });

const handlerHomePage = (req, res) => {
    return res.render("home.ejs");
}
const handlerUserPage = (req, res) => {
    return res.render("user.ejs");
}
const handleCreateUser = (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let username = req.body.username;

    // connection.query(
    //     'SELECT * FROM users',
    //     function (err, results, fields) {
    //         console.log(results); // results contains rows returned by server
    //         console.log(fields); // fields contains extra meta data about results, if available
    //     }
    // );
    console.log(req.body);
    return res.send("Create User");
}

module.exports = {
    handlerHomePage, handlerUserPage, handleCreateUser
}