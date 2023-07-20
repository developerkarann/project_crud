import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'
import EditModal from './EditModal'


export default function MiddleComponent() {
    return (
        <>
                <table className="table" >
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Number</th>
                            <th scope="col">Position</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Karan Pal</td>
                            <td>karanpal03040@gmail.com</td>
                            <td>88xxxxxxxx</td>
                            <td>Mern Developer</td>
                            <td className='btns'>
                                <EditModal/>
                                <button className='delete_btn' style={{ border: 'none', outline: 'none', background: 'none' }}> <i className="fa-solid fa-user-xmark"></i> </button>
                            </td>
                        </tr>

                    </tbody>
                </table>
        </>
    )
}
