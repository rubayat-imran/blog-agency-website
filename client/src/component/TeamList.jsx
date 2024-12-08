import { useEffect, useState } from "react";
import { getAllTeamMember } from "../APIRequest/APIRequest.js";
import Loading from "./loading.jsx";

function TeamList() {
    let [loading, setLoading] = useState("d-none");
    let [list, setList] = useState(null);

    useEffect(() => {
        (async () => {
            setLoading("");
            let res = await getAllTeamMember();
            setLoading("d-none");
            setList(res);
        })()
    }, [])

    return (
        <>
            <div className={loading}><Loading /></div>
            <div className="container section pb-5">
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
                                        </div>

                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </>
    )
}

export default TeamList