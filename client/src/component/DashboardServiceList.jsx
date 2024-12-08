import { useEffect, useState } from "react";
import { getAllService, deleteService, updateService } from "../APIRequest/APIRequest.js";
import Loading from "./loading.jsx";
import { toast } from "react-hot-toast";

function DashboardServiceList() {
    let [loading, setLoading] = useState("d-none");
    let [list, setList] = useState(null);
    let [refresh, setRefresh] = useState(0);
    let [showModal, setShowModal] = useState(false);
    let [selectedService, setSelectedService] = useState(null);
    let [updatedTitle, setUpdatedTitle] = useState('');
    let [updatedDescription, setUpdatedDescription] = useState('');
    let [updatedImage, setUpdatedImage] = useState('');

    useEffect(() => {
        (async () => {
            setLoading("");
            let res = await getAllService();
            setLoading("d-none");
            setList(res);
        })()
    }, [refresh]);

    const handleUpdate = (id) => {
        const service = list.find(item => item['_id'] === id);
        setSelectedService(service);
        setUpdatedTitle(service.title);
        setUpdatedDescription(service.short_description);
        setUpdatedImage(service.image);
        setShowModal(true);
    };

    const handleDelete = async (id) => {
        setLoading("");
        let data = await deleteService(id);
        setLoading("d-none");
        setRefresh(refresh + 1);

        if (data === "success") {
            toast.success("Service deleted successfully!");
        } else {
            toast.error("Failed to delete service!");
        }
    };

    const handleUpdateService = async () => {
        let id = selectedService['_id'];

        let payload = {
            "title": updatedTitle,
            "short_description": updatedDescription,
            "image": updatedImage
        };

        setLoading("");
        let data = await updateService(id, payload);
        setLoading("d-none");

        if (data === "success") {
            toast.success("Service updated successfully!");
        } else {
            toast.error("Failed to update service!");
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
                    <p className="h4 p-4 my-0 display-6">Services</p>
                    {
                        list !== null && list.map((item, index) => {
                            return (
                                <div key={index} className="col-md-4 p-3">
                                    <div className="card animate__animated animate__fadeIn shadow-sm rounded-3 border-0 p-0">
                                        {item['image'] && <img className="card-img-top w-100" src={item['image']} alt="" />}
                                        <div className="card-body">
                                            <p className="p-1 fw-light m-0">{item['title']}</p>
                                            <p className="p-1 fw-bold m-0">{item['short_description']}</p>

                                            <div className="d-flex justify-content-between mt-3">
                                                <button className="btn btn-info btn-sm" onClick={() => handleUpdate(item['_id'])}>
                                                    Update
                                                </button>
                                                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(item['_id'])}>
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            {showModal && (
                <div className="modal show" style={{ display: 'block' }} onClick={handleCloseModal}>
                    <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Update Service</h5>
                                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
                            </div>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="title"
                                        value={updatedTitle}
                                        onChange={(e) => setUpdatedTitle(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Short Description</label>
                                    <input
                                        type="text"
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
                                <button type="button" className="btn btn-primary" onClick={handleUpdateService}>Update</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default DashboardServiceList;
