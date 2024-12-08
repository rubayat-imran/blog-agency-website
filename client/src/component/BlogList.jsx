import { useEffect, useState } from "react";
import { getAllBlog } from "../APIRequest/APIRequest.js";
import Loading from "./loading.jsx";

function BlogList() {
    let [loading, setLoading] = useState("d-none");
    let [list, setList] = useState(null);

    useEffect(() => {
        (async () => {
            setLoading("");
            let res = await getAllBlog();
            setLoading("d-none");
            setList(res);
        })()
    }, [])

    return (
        <>
            <div className={loading}><Loading /></div>
            <div className="container section">
                <div className="row">
                    <p className="h4 p-4 my-0">Blog list:</p>
                    {
                        list !== null && list.map((item, index) => {
                            return (
                                <div key={index} className="col-md-3 p-3">
                                    <div
                                        className="card animate__animated animate__fadeIn shadow-sm rounded-3 border-0 p-0">
                                        {item['image'] && <img className="card-img-top w-100" src={item['image']} alt="" />}
                                        <div className="card-body">
                                            <p className="p-1 fw-light m-0">{item['title']}</p>
                                            <p className="p-1 fw-bold m-0">{item['short_description']}</p>
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

export default BlogList