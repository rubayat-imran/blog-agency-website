import { useEffect, useState } from "react";
import { getAllTeamMember, deleteTeamMember, updateTeamMember } from "../APIRequest/APIRequest.js";
import Loading from "./loading.jsx";
import { toast } from "react-hot-toast";

function DashboardTeamList() {
    let [loading, setLoading] = useState("d-none");
    let [list, setList] = useState(null);
    let [refresh, setRefresh] = useState(0);
    let [showModal, setShowModal] = useState(false);
    let [selectedMember, setSelectedMember] = useState(null);
    let [updatedName, setUpdatedName] = useState('');
    let [updatedJobTitle, setUpdatedJobTitle] = useState('');
    let [updatedDescription, setUpdatedDescription] = useState('');
    let [updatedImage, setUpdatedImage] = useState('');

    useEffect(() => {
        (async () => {
            setLoading("");
            let res = await getAllTeamMember();
            setLoading("d-none");
            setList(res);
        })()
    }, [refresh]);

    const handleUpdate = (id) => {
        const member = list.find(item => item['_id'] === id);
        setSelectedMember(member);
        setUpdatedName(member.name);
        setUpdatedJobTitle(member.job_title);
        setUpdatedDescription(member.description);
        setUpdatedImage(member.image);
        setShowModal(true);
    };

    const handleDelete = async (id) => {
        setLoading("");
        let data = await deleteTeamMember(id);
        setLoading("d-none");
        setRefresh(refresh + 1);

        if (data === "success") {
            toast.success("Request successful!");
        } else {
            toast.error("Request failed!");
        }
    };

    const handleUpdateMember = async () => {
        let id = selectedMember['_id'];

        let payload = {
            "name": updatedName,
            "job_title": updatedJobTitle,
            "description": updatedDescription,
            "image": updatedImage
        };

        setLoading("");
        let data = await updateTeamMember(id, payload);
        setLoading("d-none");

        if (data === "success") {
            toast.success("Request successful!");
        } else {
            toast.error("Request failed!");
        }

        setRefresh(refresh + 1);
        setShowModal(false);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <div className={loading}><Loading /></div>
            <div className="container section py-5">
                <div className="row">
                    <p className="display-6 p-4 my-0">Team Members</p>

                    {
                        list !== null && list.map((item, index) => {
                            return (
                                <div key={index} className="col-md-4 p-2">
                                    <div
                                        className="card animate__animated animate__fadeIn shadow-sm rounded-3 border-0 p-0">
                                        {item['image'] && <img className="card-img-top w-100" src={item['image']} alt="" />}
                                        <div className="card-body">
                                            <p className="p-1 fw-medium m-0 fs-5">{item['name']}</p>
                                            <p className="p-1 fw-bold m-0">{item['job_title']}</p>
                                            <p className="p-1 fw-light m-0">{item['description']}</p>

                                            {/* Buttons for Update and Delete */}
                                            <div className="d-flex justify-content-between mt-3">
                                                <button className="btn btn-info btn-sm" onClick={() => handleUpdate(item['_id'])}>Update</button>
                                                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(item['_id'])}>Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>

            {/* Modal for Update Member */}
            {showModal && (
                <div className="modal show" style={{ display: 'block' }} onClick={handleCloseModal}>
                    <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Update Team Member</h5>
                                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
                            </div>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        value={updatedName}
                                        onChange={(e) => setUpdatedName(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="jobTitle" className="form-label">Job Title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="jobTitle"
                                        value={updatedJobTitle}
                                        onChange={(e) => setUpdatedJobTitle(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <textarea
                                        className="form-control"
                                        id="description"
                                        value={updatedDescription}
                                        onChange={(e) => setUpdatedDescription(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="image" className="form-label">Image URL</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="image"
                                        value={updatedImage}
                                        onChange={(e) => setUpdatedImage(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
                                <button type="button" className="btn btn-primary" onClick={handleUpdateMember}>Update</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default DashboardTeamList;