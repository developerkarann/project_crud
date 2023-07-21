import React, { useState } from 'react'
import '../Home/home.css'
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SignupForm() {

    const Navigate = useNavigate()

    const [inputValue, setInputValue] = useState({
        name: '',
        email: '',
        number: '',
        password: '',
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

        const { name, email, number, password } = inputValue;

        const resposne = await fetch('http://localhost:8080/api/createaccount', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                number,
                password,
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
            Navigate('/')
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
                password: '',
            });
            console.log('Success')
        }
    }

    return (
        <>
            <div className="container my-2">
                <div className=" header search_box py-2">
                    <h4 className='text-white'>Create Your Account</h4>
                </div>
                <div className="form-content">
                    <div className="form my-3 shadow p-3 mb-5 bg-white " >
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
                            <input type="text" value={inputValue.number} onChange={setData} className="form-control" name='number' id="number" placeholder="enter number" />
                        </div>
                        <div className="mb-3">
                            <label for="password" className="form-label">Password</label>
                            <input type="text" value={inputValue.password} onChange={setData} className="form-control" name='password' id="password" placeholder="enter password" />
                        </div>
                        <div className="modal-footer justify-content-center">
                            <button type="button" className="btn btn-primary w-25" onClick={handleSubmit}>Sign Up</button>
                        </div>
                        <p className='text-center my-1'>Already have an account? <Link to='/'>Login</Link></p>
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
