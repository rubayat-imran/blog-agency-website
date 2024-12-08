import UsersModel from "../model/UsersModel.js";
import { TokenEncode } from "../utility/tokenUtility.js";

export const Registration = async (req, res) => {
    try {
        let reqBody = req.body;
        await UsersModel.create(reqBody)
        return res.status(200).json({ status: "success", "Message": "User registered successfully" })
    }
    catch (e) {
        res.status(500).json({ status: "fail", message: "Internal Server Error", error: e.message });
    }

}

export const Login = async (req, res) => {
    try {
        let reqBody = req.body;
        let data = await UsersModel.findOne(reqBody);
        console.log('data:', data);

        if (!data && data === null) {
            return res.json({ status: "fail", message: "User not found" });
        }
        else {
            // Login Success
            let token = TokenEncode(data['email'], data['_id'])
            return res.status(200).json({ status: "success", "Message": "User login successful", data: { token: token } })
        }
    }
    catch (e) {
        res.status(500).json({ status: "fail", message: "Internal Server Error", error: e.message });
    }
}


export const ProfileDetails = async (req, res) => {
    try {
        let user_id = req.headers['user_id']
        let data = await UsersModel.findOne({ "_id": user_id })
        if (!data) {
            return res.status(404).json({ status: "fail", message: "User not found" });
        }
        return res.status(200).json({ status: "success", message: "User profile successfully", data: data })
    }
    catch (e) {
        res.status(500).json({ status: "fail", message: "Internal Server Error", error: e.message });
    }
}


export const ProfileUpdate = async (req, res) => {
    try {
        let reqBody = req.body;
        let user_id = req.headers['user_id'];
        if (!data) {
            return res.status(404).json({ status: "fail", message: "User not found" });
        }
        await UsersModel.updateOne({ "_id": user_id }, reqBody)
        return res.status(200).json({ status: "success", "Message": "User Update successfully" })
    }
    catch (e) {
        res.status(500).json({ status: "fail", message: "Internal Server Error", error: e.message });
    }
}


