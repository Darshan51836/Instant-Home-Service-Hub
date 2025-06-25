import express from 'express';
import { addServices, listServices, removeServices } from '../controllers/serviceController.js';
import multer from 'multer';
const serviceRouter = express.Router();

//Image Storage Engine (Saving Image to uploads folder & rename it)

const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb) => {
        return cb(null,`${Date.now()}${file.originalname}`);
    }
})

const upload = multer({ storage: storage})

serviceRouter.get("/list",listServices);
serviceRouter.post("/add",upload.single('image'),addServices);
serviceRouter.post("/remove",removeServices);

export default serviceRouter;