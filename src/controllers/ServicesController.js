import ServicesModel from "../model/ServicesModel.js";


export const CreateService = async (req, res) => {
    try {
        let user_id = req.headers['user_id']
        let requestBody = req.body;
        requestBody.user_id = user_id;
        await ServicesModel.create(requestBody)
        return res.status(200).json({ status: "success", message: "Service created successfully" })
    } catch (e) {
        res.status(500).json({ status: "fail", message: "Internal Server Error", error: e.message });
    }
}
// Read all blogs
export const AllServices = async (req, res) => {

    const ServicesListService = async () => {
        try {
            let data = await ServicesModel.find()
            return { status: "success", message: "Service Data Provided", data: data }
        }
        catch (e) {
            res.status(500).json({ status: "fail", message: "Internal Server Error", error: e.message });
        }
    }

    let result = await ServicesListService()
    return res.json(result);
}

// Read a single blog
export const ReadOneService = async (req, res) => {
    try {
        let id = req.params.id;
        let data = await ServicesModel.findOne({ "_id": id });
        if (!data) {
            return res.status(404).json({ status: "fail", message: "Service not found" });
        }
        return res.status(200).json({ status: "success", data: data })
    }
    catch (e) {
        res.status(500).json({ status: "fail", message: "Internal Server Error", error: e.message });
    }
}

export const UpdateService = async (req, res) => {
    try {
        let reqBody = req.body;
        let id = req.params.id;
        let data = await ServicesModel.findOne({ "_id": id });
        if (!data) {
            return res.status(404).json({ status: "fail", message: "Service not found" });
        }
        await ServicesModel.updateOne({ "_id": id }, reqBody)
        return res.status(200).json({ status: "success", message: "Service Update successfully" })
    }
    catch (e) {
        res.status(500).json({ status: "fail", message: "Internal Server Error", error: e.message });
    }
}

export const DeleteService = async (req, res) => {
    try {
        let id = req.params.id;
        let data = await ServicesModel.findOne({ "_id": id });
        if (!data) {
            return res.status(404).json({ status: "fail", message: "Service not found" });
        }
        await ServicesModel.deleteOne({ "_id": id })
        return res.status(200).json({ status: "success", message: "Service deleted successfully" })
    }
    catch (e) {
        res.status(500).json({ status: "fail", message: "Internal Server Error", error: e.message });
    }
}