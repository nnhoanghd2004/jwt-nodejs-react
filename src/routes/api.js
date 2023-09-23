import express from 'express';
import apiController from '../controller/apiController';
import userController from '../controller/userController';
import groupController from '../controller/groupController';

const router = express.Router();

/**
 *
 * @param {*} app : express app
 */
const initApiRoutes = (app) => {
    router.get('/test-api', apiController.testAPI);

    router.post('/login', apiController.handleLogin);
    router.post('/register', apiController.handleRegister);

    router.post('/user/create', userController.handleCreateUser);
    router.get('/user/read', userController.handleReadUser);
    router.put('/user/update', userController.handleUpdateUser);
    router.delete('/user/delete', userController.handleDeleteUser);

    router.get('/group/read', groupController.handleGetGroups);
    // default display when open website, start by "/"
    return app.use('/api/v1', router);
};

export default initApiRoutes;
