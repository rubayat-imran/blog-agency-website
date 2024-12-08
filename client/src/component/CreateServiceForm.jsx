import { useState } from "react";
import { toast } from "react-hot-toast";
import Loading from "./loading.jsx";
import { createService } from "../APIRequest/APIRequest.js";

function CreateServiceForm() {
    const [title, setTitle] = useState("");
    const [shortDescription, setShortDescription] = useState("");
    const [details, setDetails] = useState("");
    const [image, setImage] = useState("");

    const [loading, setLoading] = useState("d-none");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title || !shortDescription || !details) {
            toast.error("All fields are required!");
            return;
        }

        const payload = {
            title,
            short_description: shortDescription,
            details,
            image,
        };

        setLoading("");
        const data = await createService(payload);
        setLoading("d-none");

        if (data === "success") {
            toast.success("Service created successfully!");
        } else {
            toast.error("Failed to create service!");
        }

        // Clear the form after submission
        setTitle("");
        setShortDescription("");
        setDetails("");
        setImage("");

        window.location.reload();
    };

    return (
        <>
            <div className={loading}><Loading /></div>
            <div className="container">
                <h2 className="my-4 mb-4">Create a New Service:</h2>
                <form className="mx-auto col-md-8" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter service title"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="shortDescription" className="form-label">Short Description</label>
                        <input
                            type="text"
                            className="form-control"
                            id="shortDescription"
                            value={shortDescription}
                            onChange={(e) => setShortDescription(e.target.value)}
                            placeholder="Enter a short description"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="details" className="form-label">Details</label>
                        <textarea
                            className="form-control"
                            id="details"
                            rows="5"
                            value={details}
                            onChange={(e) => setDetails(e.target.value)}
                            placeholder="Enter service details"
                            required
                        ></textarea>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="image" className="form-label">Image URL</label>
                        <input
                            type="text"
                            className="form-control"
                            id="image"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            placeholder="Enter image URL"
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">Create Service</button>
                </form>
            </div>
        </>
    );
}

export default CreateServiceForm;