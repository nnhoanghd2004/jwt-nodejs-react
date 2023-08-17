import userService from '../service/userService'

const handlerHomePage = (req, res) => {
    return res.render("home.ejs");
}
const handlerUserPage = (req, res) => {
    return res.render("user.ejs");
}
const handleCreateUser = (req, res) => {
    userService.createNewUser(req.body.email, req.body.password, req.body.username)
    userService.getUserList()
    return res.send("Create User");
}

module.exports = {
    handlerHomePage, handlerUserPage, handleCreateUser
}