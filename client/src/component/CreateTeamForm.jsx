import { useState } from "react";
import { toast } from "react-hot-toast";
import Loading from "./loading.jsx";
import { createTeamMember } from "../APIRequest/APIRequest.js";

function CreateTeamForm() {
    const [name, setName] = useState("");
    const [jobTitle, setJobTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");

    const [loading, setLoading] = useState("d-none");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !jobTitle || !description) {
            toast.error("All fields are required!");
            return;
        }

        const payload = {
            name,
            job_title: jobTitle,
            description,
            image,
        };

        setLoading("");
        const data = await createTeamMember(payload);
        setLoading("d-none");

        if (data === "success") {
            toast.success("Team member added successfully!");
        } else {
            toast.error("Failed to add team member!");
        }

        // Clear the form after submission
        setName("");
        setJobTitle("");
        setDescription("");
        setImage("");

        // Optionally, reload the page or trigger a parent component update
        window.location.reload();
    };

    return (
        <>
            <div className={loading}><Loading /></div>
            <div className="container">
                <h2 className="my-4 mb-4">Add a New Team Member:</h2>
                <form className="mx-auto col-md-8" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter team member's name"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="jobTitle" className="form-label">Job Title</label>
                        <input
                            type="text"
                            className="form-control"
                            id="jobTitle"
                            value={jobTitle}
                            onChange={(e) => setJobTitle(e.target.value)}
                            placeholder="Enter job title"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea
                            className="form-control"
                            id="description"
                            rows="5"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Enter a brief description"
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

                    <button type="submit" className="btn btn-primary">Add Team Member</button>
                </form>
            </div>
        </>
    );
}

export default CreateTeamForm;