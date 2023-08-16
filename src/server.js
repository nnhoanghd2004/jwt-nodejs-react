import express from "express"
import configViewEngine from "./configs/viewEngine"
import initWebRoutes from "./routes/web"
require("dotenv").config();

const app = express();
const POST = process.env.PORT || 8080;

//config view engine
configViewEngine(app);

//init web routes
initWebRoutes(app);

app.listen(POST, () => {
    console.log("JWT BACKEND IS RUNNING " + POST);
})