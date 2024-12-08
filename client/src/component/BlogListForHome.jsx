import { useEffect, useState } from "react";
import { getAllBlog } from "../APIRequest/APIRequest.js";
import Loading from "./loading.jsx";

function BlogListForHome() {
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
            <div className="container section py-5">
                <div className="row">
                    <p className="h4 p-4 my-0 display-5">Blogs</p>
                    {
                        list !== null && list.slice(0, 6).map((item, index) => {
                            return (
                                <div key={index} className="col-md-4 p-3">
                                    <div
                                        className="card animate__animated animate__fadeIn shadow-sm rounded-3 border-0 p-0">
                                        {item['image'] && <img className="card-img-top w-100" src={item['image']} alt="" />}
                                        <div className="card-body">
                                            <p className="p-1 fw-light m-0 fs-5">{item['title']}</p>
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

export default BlogListForHome