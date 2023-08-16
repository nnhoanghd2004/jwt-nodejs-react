import express from "express"
import configViewEngine from "./configs/viewEngine"
import initWebRoutes from "./routes/web"
require("dotenv").config();

const app = express();

//config view engine
configViewEngine(app);

//init web routes
initWebRoutes(app);

const POST = process.env.PORT || 8080;
app.listen(POST, () => {
    console.log("JWT BACKEND IS RUNNING " + POST);
})