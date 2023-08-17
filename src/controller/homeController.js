import mysql from 'mysql2'
// import bcrypt from 'bcrypt';
// // hash password
// const salt = bcrypt.genSaltSync(10);
// const hash = bcrypt.hashSync(myPlaintextPassword, salt);
// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'jwt'
});

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
    //     'INSERT INTO users (email, password, username) VALUES (?, ?, ?)', [email, password, username],
    //     function (err, results, fields) {
    //         if (err) {
    //             console.log(err);
    //         }
    //         console.log(results); // results contains rows returned by server
    //     }
    // );
    return res.send("Create User");
}

module.exports = {
    handlerHomePage, handlerUserPage, handleCreateUser
}