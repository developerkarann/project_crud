import React from 'react'
import './home.css'
import MiddleComponent from './MiddleComponent'
import AddDataModal from './AddDataModal'


export default function Home() {

    return (
        <>
            <div className="container my-2">
                <div className=" header search_box py-2">
                    <div className="add_btn">
                       <AddDataModal/>
                    </div>
                    <form className="d-flex search" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    </form>
                </div>
                <div className="content">
                    <MiddleComponent />
                </div>


            </div>
        </>
    )
}
