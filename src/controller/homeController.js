import backEndService from '../service/backEndService';

const handlerHomePage = (req, res) => {
    return res.render('home.ejs');
};
const handlerUserPage = async (req, res) => {
    const users = await backEndService.getUserList();
    return res.render('user.ejs', { users });
};
const handleCreateUser = (req, res) => {
    backEndService.createNewUser(req.body.email, req.body.password, req.body.username);
    return res.redirect('/user');
};
const handleDeleteUser = async (req, res) => {
    await backEndService.deleteUser(req.params.id);
    return res.redirect('/user');
};
const getUser = async (req, res) => {
    let user = await backEndService.getUserById(req.params.id);
    return res.render('update-user.ejs', { user });
};
const handleUpdateUser = async (req, res) => {
    await backEndService.updateUser(req.body.email, req.body.username, req.body.id);
    return res.redirect('/user');
};
module.exports = {
    handlerHomePage,
    handlerUserPage,
    handleCreateUser,
    handleDeleteUser,
    getUser,
    handleUpdateUser,
};
