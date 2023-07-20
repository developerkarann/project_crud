import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './home.css'



export default function MiddleComponent() {

    const [userData, setUserData] = useState([]);

    // Get Data Functionality
    const getData = async () => {
        const resposne = await fetch('http://localhost:8080/api/getusers', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }
        );
        const data = await resposne.json();
        // console.log(data)
        setUserData(data);
    };

    useEffect(() => {
        getData();
    }, []);



    // Delete Data Functionality
    const deleteUser = async (id) => {

        toast('Please wait...', { toastId: 'fetchResponse' });

        const resposne2 = await fetch(`http://localhost:8080/api/deleteuser/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        })
        const deleteData = await resposne2.json()
        console.log(deleteData)

        if (resposne2.status === 422 || !deleteData) {
            console.log("Error")
        } else {
            toast.update('fetchResponse', {
                render: deleteData.message,
                type: 'success',
                isLoading: false,
                closeOnClick: true,
                autoClose: 3000,
            });
            getData();
        }
    }

    // Search functionality


    return (
        <>
            <div className=" header search_box py-2">
                <Link to='/add'> <div className="add_btn btn btn-primary"> Add Data  </div></Link>
                <form className="d-flex search" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                </form>
            </div>
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
                    {
                        userData?.data?.map((element, index) => {
                            return (
                                <>
                                    <tr>
                                        <th scope="row"> {index + 1}</th>
                                        <td>{element.name}</td>
                                        <td>{element.email}</td>
                                        <td>{element.number}</td>
                                        <td>{element.position}</td>
                                        <td className='btns'>
                                            <Link to={`/edit/${element._id}`}> < i className="fa-solid fa-pen-to-square mx-3"></i> </Link>
                                            <button onClick={() => deleteUser(element._id)} className='delete_btn' style={{ border: 'none', outline: 'none', background: 'none' }}><i className="fa-solid fa-user-xmark"></i> </button>
                                        </td>
                                    </tr>
                                </>
                            )
                        })
                    }


                </tbody>
            </table>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={true}
                rtl={false}
                pauseOnFocusLoss={true}
                draggable={false}
                pauseOnHover={false}
                theme="colored"
            />
        </>
    )
}
