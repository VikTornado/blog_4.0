import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Layout = () => {
    const menu = [
        {text: 'Nature', link: '/'},
        {text: 'Travel', link: '/'},
        {text: 'Technology', link: '/'},
        {text: 'Politics', link: '/'},
    ]

    return (
        <div>
            {/*<Header></Header>*/}
            <div>
                <div className={"container p-5 flex justify-between align-items-center"}>
                    <span>Blogger</span>
                    <div className={"flex"}>
                        <ul className={"flex"}>
                            {menu.map((item, index) => (
                                <li>
                                    <Link className={"flex justify-center items-center p-2"} to={""}>
                                    <span>
                                        {item.text}
                                    </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <button className={"bg-slate-500 text-white px-2 py-1 rounded"}>
                            <Link>+ New Post</Link>
                        </button>
                    </div>
                </div>
            </div>
            {/*<Body></Body>*/}
            <div className={"flex mx-auto px-5 md:px-20"}>
                <div className={"mt-5 mb-5 min-h-[500px] w-full"}>
                    <Outlet></Outlet>
                </div>
            </div>
            {/*<Footer></Footer>*/}
            <div className={"flex bg-slate-800"}>
                <div className={"flex mx-auto p-20 items-center justify-center"}>
                    <h3 className={"text-gray-400"}>Blogger</h3>
                </div>
            </div>
        </div>
    );
};

export default Layout;