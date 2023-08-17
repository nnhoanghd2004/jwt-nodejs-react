import express from "express"
import controller from "../controller/homeController"

const router = express.Router();

/**
 * 
 * @param {*} app : express app
 */
const initWebRoutes = (app) => {
    router.get("/", controller.handlerHomePage)
    router.get("/user", controller.handlerUserPage)
    router.post("/users/create-user", controller.handleCreateUser)
    // default display when open website, start by "/"
    return app.use("/", router);
}

export default initWebRoutes;