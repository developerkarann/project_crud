import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

export default function Navabr() {
    let location = useLocation();

    const hanldeLogout = () => {
        window.cookieStore.delete('loginToken')
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid ">
                    <h3 className="navbar-brand text-white" >CRUD-App Assignment</h3>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            {
                                location.pathname === "/" ? '' : 
                                <>
                                <li className="nav-item">
                                    <Link className="nav-link active text-white h2" aria-current="page" to="/home">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active text-white h2" aria-current="page" to='/' onClick={hanldeLogout}>Logout</Link>
                                </li>
                            </>

                            }

                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}
