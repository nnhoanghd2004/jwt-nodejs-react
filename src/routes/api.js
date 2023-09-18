import express from "express"
import controller from "../controller/homeController"
import apiController from "../controller/apiController";
import userController from "../controller/userController"

const router = express.Router();

/**
 * 
 * @param {*} app : express app
 */
const initApiRoutes = (app) => {
    router.get("/test-api", apiController.testAPI)
    router.post("/register", apiController.handleRegister)
    router.post("/login", apiController.handleLogin)


    router.post("/user/create", userController.createUser)
    router.get("/user/read", userController.readUser)
    router.put("/user/update", userController.updateUser)
    router.delete("/user/delete", userController.deleteUser)
    // default display when open website, start by "/"
    return app.use("/api/v1", router);
}

export default initApiRoutes;