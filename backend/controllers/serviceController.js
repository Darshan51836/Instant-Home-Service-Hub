import serviceModel from "../models/serviceModel.js";
import fs from 'fs'

// all Services list
const listServices = async (req, res) => {
    try {
        const services = await serviceModel.find({})
        res.json({ success: true, data: services })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }

}

// add Services
const addServices = async (req, res) => {

    try {
        let image_filename = `${req.file.filename}`

        const service = new serviceModel({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category:req.body.category,
            image: image_filename,
        })

        await service.save();
        res.json({ success: true, message: "New Service Added" })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }
}

// delete Services
const removeServices = async (req, res) => {
    try {

        const service = await serviceModel.findById(req.body.id);
        fs.unlink(`uploads/${service.image}`, () => { })

        await serviceModel.findByIdAndDelete(req.body.id)
        res.json({ success: true, message: "Service Removed" })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }

}

export { listServices, addServices, removeServices }