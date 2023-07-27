// import modules
import express, { json, urlencoded } from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv"
dotenv.config()
import cookieParser from 'cookie-parser'


// app
const app = express();


// db
const uri = process.env.MONGO_URI
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true,})
	.then(() => console.log("DB CONNECTED"))
	.catch((err) => console.log("DB CONNECTION ERROR", err));


// middleware
app.use(morgan("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cors({ origin: true, credentials: true }));
app.use(cookieParser())


// routes
import testRoutes from "./routes/test.js";
app.use("/", testRoutes)

import userRoute from "./routes/userRoute.js"
app.use("/users", userRoute);

import locationRoute from "./routes/locationRoute.js"
app.use("/locations", locationRoute);

import reviewRoute from "./routes/reviewRoute.js"
app.use("/reviews", reviewRoute)



// port
const port = process.env.PORT || 8080;

// listener
const server = app.listen(port, () =>
	console.log(`Server is running on port ${port}`)
);