import express from "express"
import configViewEngine from "./config/viewEngine"
import initWebRoutes from "./routes/web"
import bodyParser from "body-parser"
// import testConnect from "./config/connectDB"

// sử dụng port
require("dotenv").config();

// test connection
// testConnect()

const app = express();
const POST = process.env.PORT || 8080;

//config view engine
configViewEngine(app);

//config body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//init web routes
initWebRoutes(app);

app.listen(POST, () => {
    console.log("JWT BACKEND IS RUNNING " + POST);
})