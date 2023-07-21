import React, { useState } from 'react'
import '../Home/home.css'
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function LoginForm() {

    const Navigate = useNavigate()

    const [inputValue, setInputValue] = useState({
        email: '',
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

        const { email, password} = inputValue;

        const resposne = await fetch('http://localhost:8080/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password
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
            Navigate('/home')
            toast.update('fetchResponse', {
                render: data.message,
                type: 'success',
                isLoading: false,
                closeOnClick: true,
                autoClose: 3000,
            });
            setInputValue({
                ...inputValue,
                email: '',
                password: ''
        
            });
            console.log('Success')
            if (data.token) {
                // login form submitted
                if (document.cookie)
                  document.cookie += `loginToken=${data.token}`;
                else document.cookie = `loginToken=${data.token}`;
              }
        }
    }

    return (
        <>
            <div className="container my-2">
                <div className=" header search_box py-2">
                    <h4 className='text-white' >Login</h4>
                </div>
                <div className="form-content">

                    <div className="form my-4 shadow p-3 mb-5 bg-white ">
                        <div className="mb-3">
                            <label for="email" className="form-label">Email address</label>
                            <input type="email" value={inputValue.email} onChange={setData} name='email' className="form-control" id="email" placeholder="name@example.com" />
                        </div>
                        <div className="mb-3">
                            <label for="paswword" className="form-label">Password</label>
                            <input type="text" value={inputValue.password} onChange={setData} className="form-control" name='password' id="password" placeholder="88xxxxxxxx" />
                        </div>
                        <div className="modal-footer justify-content-center ">
                            <button type="button" className="btn btn-primary w-25 my-3" onClick={handleSubmit} >Login</button>

                        </div>
                            <p className='text-center my-3'>Not have an account? <Link to='/signup'>Sign Up</Link></p>
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
