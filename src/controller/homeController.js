import userService from '../service/userService'

const handlerHomePage = (req, res) => {
    return res.render("home.ejs");
}
const handlerUserPage = async (req, res) => {
    const users = await userService.getUserList()
    return res.render("user.ejs", { users });
}
const handleCreateUser = (req, res) => {
    userService.createNewUser(req.body.email, req.body.password, req.body.username)
    return res.send("Create User");
}

module.exports = {
    handlerHomePage, handlerUserPage, handleCreateUser
}