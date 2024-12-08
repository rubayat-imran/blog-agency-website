import TeamsModel from "../model/TeamsModel.js";


export const CreateTeamMember = async (req, res) => {
    try {
        let user_id = req.headers['user_id']
        let requestBody = req.body;
        requestBody.user_id = user_id;
        await TeamsModel.create(requestBody)
        return res.status(200).json({ status: "success", message: "Team created successfully" })
    } catch (e) {
        res.status(500).json({ status: "fail", message: "Internal Server Error", error: e.message });
    }
}
// Read all blogs
export const AllTeamMembers = async (req, res) => {

    const TeamListService = async () => {
        try {
            let data = await TeamsModel.find()
            return { status: "success", message: "Team Data Provided", data: data }
        }
        catch (e) {
            res.status(500).json({ status: "fail", message: "Internal Server Error", error: e.message });
        }
    }

    let result = await TeamListService()
    return res.json(result);
}

// Read a single blog
export const ReadOneTeamMember = async (req, res) => {
    try {
        let id = req.params.id;
        let data = await TeamsModel.findOne({ "_id": id });
        if (!data) {
            return res.status(404).json({ status: "fail", message: "Member not found" });
        }
        return res.status(200).json({ status: "success", data: data })
    }
    catch (e) {
        res.status(500).json({ status: "fail", message: "Internal Server Error", error: e.message });
    }
}

export const UpdateteamMember = async (req, res) => {
    try {
        let reqBody = req.body;
        let id = req.params.id;
        let data = await TeamsModel.findOne({ "_id": id });
        if (!data) {
            return res.status(404).json({ status: "fail", message: "Member not found" });
        }
        await TeamsModel.updateOne({ "_id": id }, reqBody)
        return res.status(200).json({ status: "success", message: "Team Member Updated successfully" })
    }
    catch (e) {
        res.status(500).json({ status: "fail", message: "Internal Server Error", error: e.message });
    }
}

export const DeleteTeamMember = async (req, res) => {
    try {
        let id = req.params.id;
        let data = await TeamsModel.findOne({ "_id": id });
        if (!data) {
            return res.status(404).json({ status: "fail", message: "Member not found" });
        }
        await TeamsModel.deleteOne({ "_id": id })
        return res.status(200).json({ status: "success", message: "Team Member deleted successfully" })
    }
    catch (e) {
        res.status(500).json({ status: "fail", message: "Internal Server Error", error: e.message });
    }
}