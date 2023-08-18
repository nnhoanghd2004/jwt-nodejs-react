import userService from '../service/userService'

const handlerHomePage = (req, res) => {
    return res.render("home.ejs");
}
const handlerUserPage = async (req, res) => {
    const users = await userService.getUserList()
    return res.render("user.ejs", { users })
}
const handleCreateUser = (req, res) => {
    userService.createNewUser(req.body.email, req.body.password, req.body.username)
    return res.redirect("/user")
}
const handleDeleteUser = async (req, res) => {
    await userService.deleteUser(req.params.id)

    return res.redirect("/user")
}

module.exports = {
    handlerHomePage, handlerUserPage, handleCreateUser, handleDeleteUser
}