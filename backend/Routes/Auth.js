import express from "express";
import upload from "../Utils/UploadFile.js";
import { deleteFile, uploadFile } from "../Controllers/uploadCn.js";
import isAdmin from "../Middleware/isAdmin.js";
import { login, register } from "../Controllers/AuthCn.js";
const authRouter = express.Router();
authRouter
    .route("/")
    .post(login)
authRouter.route('/register').post(register)

export default authRouter;
