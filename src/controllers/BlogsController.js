import BlogsModel from "../model/BlogsModel.js";


export const CreateBlog = async (req, res) => {
    try {
        let user_id = req.headers['user_id']
        let requestBody = req.body;
        requestBody.user_id = user_id;
        await BlogsModel.create(requestBody)
        return res.status(200).json({ status: "success", message: "Blog created successfully" })
    } catch (e) {
        res.status(500).json({ status: "fail", message: "Internal Server Error", error: e.message });
    }
}
// Read all blogs
export const AllBlogs = async (req, res) => {

    const BlogListService = async () => {
        try {
            let data = await BlogsModel.find()
            return { status: "success", message: "Blog Data Provided", data: data }
        }
        catch (e) {
            res.status(500).json({ status: "fail", message: "Internal Server Error", error: e.message });
        }
    }

    let result = await BlogListService()
    return res.json(result);
}

// Read a single blog
export const ReadOneBlog = async (req, res) => {
    try {
        let id = req.params.id;
        let data = await BlogsModel.findOne({ "_id": id });
        if (!data) {
            return res.status(404).json({ status: "fail", message: "Blog not found" });
        }
        return res.status(200).json({ status: "success", data: data })
    }
    catch (e) {
        res.status(500).json({ status: "fail", message: "Internal Server Error", error: e.message });
    }
}

export const UpdateBlog = async (req, res) => {
    try {
        let reqBody = req.body;
        let id = req.params.id;
        let data = await BlogsModel.findOne({ "_id": id });
        if (!data) {
            return res.status(404).json({ status: "fail", message: "Blog not found" });
        }
        await BlogsModel.updateOne({ "_id": id }, reqBody)
        return res.status(200).json({ status: "success", message: "Blog Update successfully" })
    }
    catch (e) {
        res.status(500).json({ status: "fail", message: "Internal Server Error", error: e.message });
    }
}

export const DeleteBlog = async (req, res) => {
    try {
        let id = req.params.id;
        let data = await BlogsModel.findOne({ "_id": id });
        if (!data) {
            return res.status(404).json({ status: "fail", message: "Blog not found" });
        }
        await BlogsModel.deleteOne({ "_id": id })
        return res.status(200).json({ status: "success", message: "Blog deleted successfully" })
    }
    catch (e) {
        res.status(500).json({ status: "fail", message: "Internal Server Error", error: e.message });
    }
}