import React from 'react'
import './home.css'
import MiddleComponent from './MiddleComponent'
import { Link } from 'react-router-dom'


export default function Home() {

    return (
        <>
            <div className="container my-2">

                <div className="content">
                    <MiddleComponent />
                </div>


            </div>
        </>
    )
}
