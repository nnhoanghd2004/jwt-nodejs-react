import express from 'express';
import controller from '../controller/homeController';
import apiController from '../controller/apiController';

const router = express.Router();

/**
 *
 * @param {*} app : express app
 */
const initWebRoutes = (app) => {
    router.get('/', controller.handlerHomePage);
    router.get('/user', controller.handlerUserPage);
    router.post('/users/create-user', controller.handleCreateUser);
    router.post('/delete-user/:id', controller.handleDeleteUser);
    router.get('/update-user/:id', controller.getUser);
    router.post('/user/update-user', controller.handleUpdateUser);
    router.get('/test/api', apiController.testAPI);
    // default display when open website, start by "/"
    return app.use('/', router);
};

export default initWebRoutes;
