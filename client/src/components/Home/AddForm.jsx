import React, { useState } from 'react'
import './home.css'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AddForm() {


    const [inputValue, setInputValue] = useState({
        name: '',
        email: '',
        number: '',
        position: '',
    });

    const setData = (e) => {
        // console.log(e.target.value)
        const { name, value } = e.target;
        setInputValue((val) => {
            return {
                ...val,
                [name]: value,
            };
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault()

        toast('Please wait...', { toastId: 'fetchResponse' });

        const { name, email, number, position } = inputValue;

        const resposne = await fetch('http://localhost:8080/api/createuser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                number,
                position,
            }),
        }
        );
        const data = await resposne.json();
        if (resposne.status === 422) {
            toast.update('fetchResponse', {
                render: data.message,
                type: 'error',
                isLoading: false,
                closeOnClick: true,
                autoClose: 3000,
            });
            console.log('Getting some errors while sending data to backend')
        } else {
            toast.update('fetchResponse', {
                render: data.message,
                type: 'success',
                isLoading: false,
                closeOnClick: true,
                autoClose: 3000,
            });
            setInputValue({
                ...inputValue,
                name: '',
                email: '',
                number: '',
                postion: '',
            });
            console.log('Success')
        }
    }

    return (
        <>
            <div className="container my-2">
                <div className=" header search_box py-2">
                    <h4 className='text-white'>Add Data</h4>
                </div>
                <div className="form-content">
                    {/* Add Data Form  */}
                    <div className="form my-4">
                        <div className="mb-3">
                            <label for="name" className="form-label">Name</label>
                            <input type="text" value={inputValue.name} onChange={setData} className="form-control" name='name' id="name" placeholder="Enter name" />
                        </div>
                        <div className="mb-3">
                            <label for="email" className="form-label">Email address</label>
                            <input type="email" value={inputValue.email} onChange={setData} name='email' className="form-control" id="email" placeholder="name@example.com" />
                        </div>
                        <div className="mb-3">
                            <label for="number" className="form-label">Number</label>
                            <input type="text" value={inputValue.number} onChange={setData} className="form-control" name='number' id="number" placeholder="88xxxxxxxx" />
                        </div>
                        <div className="mb-3">
                            <label for="position" className="form-label">Position</label>
                            {/* <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter position"/> */}
                            <select name="position" id="position" onClick={setData} className="form-control" onChange={() => { }} >
                                <option value="frontend-developer">Front-end Developer</option>
                                <option value="backend-developer">Back-end Developer</option>
                                <option value="mern-developer">Mern Stack Developer</option>
                                <option value="python-developer">Python Developer</option>
                            </select>
                        </div>
                        <div className="modal-footer justify-content-center">
                            <Link to='/' className='w-25 mx-3'>  <button type="button" className="btn btn-secondary w-100" >Close</button> </Link>
                            <button type="button" className="btn btn-primary w-25 " onClick={handleSubmit}>Add </button>
                        </div>
                    </div>


                </div>
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
            </div>



        </>
    )
}
