import express from "express";
import Connection from "./database/db.js";
import dotenv from "dotenv";
import router from "./routes/route.js";
import cors from "cors";
import bodyParser from "body-parser";
import userRoutes from "./routes/userRoutes.js"

const app = express();
dotenv.config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(cors());
app.use("/", router);
app.use('/users', userRoutes);
const PORT = 8000;

const username= process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);
app.listen(PORT,  () => {
    console.log(`running on ${PORT}`)
})