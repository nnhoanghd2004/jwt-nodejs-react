import express from "express"
import controller from "../controller/homeController"
import apiController from "../controller/apiController";

const router = express.Router();

/**
 * 
 * @param {*} app : express app
 */
const initApiRoutes = (app) => {
    router.get("/test-api", apiController.testAPI)
    router.post("/register", apiController.handleRegister)
    router.post("/login", apiController.handleLogin)
    // default display when open website, start by "/"
    return app.use("/api/v1", router);
}

export default initApiRoutes;