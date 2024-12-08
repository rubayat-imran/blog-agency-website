import axios from "axios";

//let mainURL = "http://localhost:5050/api" // for localhost
let mainURL = "https://blog-agency-website.vercel.app/api"

export const UserLoginRequest = async (UserEmail, UserPassword) => {
    const URL = `${mainURL}/Login`;
    const data = {
        email: UserEmail,
        password: UserPassword,
    };

    let res = await axios.post(URL, data)
    return res
}


export const createBlog = async (payload) => {
    const header = { headers: { token: sessionStorage.getItem('loginToken') } };
    const URL = `${mainURL}/CreateBlog`;

    try {
        let res = await axios.post(URL, payload, header);
        return res.data['status'];

    } catch (error) {
        console.error("Error updating blog:", error);
        return 'error';
    }
}

export const getAllBlog = async () => {
    let URL = `${mainURL}/AllBlogs`;
    let res = await axios.get(URL)
    return res.data['data'];
}

export const updateBlog = async (id, payload) => {
    const header = { headers: { token: sessionStorage.getItem('loginToken') } };
    const URL = `${mainURL}/UpdateBlog/${id}`;

    try {
        let res = await axios.post(URL, payload, header);
        return res.data['status'];

    } catch (error) {
        console.error("Error updating blog:", error);
        return 'error';
    }
};


export const deleteBlog = async (id) => {
    let header = { 'headers': { 'token': sessionStorage.getItem('loginToken') } };
    const URL = `${mainURL}/DeleteBlog/${id}`;
    let res = await axios.get(URL, header)
    return res.data['status'];
}

export const createService = async (payload) => {
    const header = { headers: { token: sessionStorage.getItem('loginToken') } };
    const URL = `${mainURL}/CreateService`;

    try {
        let res = await axios.post(URL, payload, header);
        return res.data['status'];

    } catch (error) {
        console.error("Error updating blog:", error);
        return 'error';
    }
}

export const getAllService = async () => {

    let URL = `${mainURL}/AllServices`;
    let res = await axios.get(URL)
    return res.data['data'];

}

export const updateService = async (id, payload) => {
    const header = { headers: { token: sessionStorage.getItem('loginToken') } };
    const URL = `${mainURL}/UpdateService/${id}`;

    try {
        let res = await axios.post(URL, payload, header);
        return res.data['status'];

    } catch (error) {
        console.error("Error updating service:", error);
        return 'error';
    }
}

export const deleteService = async (id) => {
    let header = { 'headers': { 'token': sessionStorage.getItem('loginToken') } };
    const URL = `${mainURL}/DeleteService/${id}`;
    let res = await axios.get(URL, header)
    return res.data['status'];
}

export const createTeamMember = async (payload) => {
    const header = { headers: { token: sessionStorage.getItem('loginToken') } };
    const URL = `${mainURL}/CreateTeamMember`;

    try {
        let res = await axios.post(URL, payload, header);
        return res.data['status'];

    } catch (error) {
        console.error("Error updating blog:", error);
        return 'error';
    }
}

export const getAllTeamMember = async () => {
    let URL = `${mainURL}/AllTeamMembers`;
    let res = await axios.get(URL)
    return res.data['data'];
}

export const updateTeamMember = async (id, payload) => {
    const header = { headers: { token: sessionStorage.getItem('loginToken') } };
    const URL = `${mainURL}/UpdateteamMember/${id}`;

    try {
        let res = await axios.post(URL, payload, header);
        return res.data['status'];

    } catch (error) {
        console.error("Error updating service:", error);
        return 'error';
    }
}

export const deleteTeamMember = async (id) => {
    let header = { 'headers': { 'token': sessionStorage.getItem('loginToken') } };
    const URL = `${mainURL}/DeleteTeamMember/${id}`;
    let res = await axios.get(URL, header)
    return res.data['status'];
}