import React from 'react'

export default function AddForm() {
   
    return (
        <>
            <div className="mb-3">
                <label for="name" className="form-label">Name</label>
                <input type="text" className="form-control" name='name' id="name" placeholder="Enter name" />
            </div>
            <div className="mb-3">
                <label for="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
                <label for="number" className="form-label">Number</label>
                <input type="text" className="form-control" name='number' id="number" placeholder="88xxxxxxxx" />
            </div>
            <div className="mb-3">
                <label for="postion" className="form-label">Postion</label>
                {/* <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter position"/> */}
                <select name="postion" id="postion" className="form-control">
                    <option value="frontend-developer">Front-end Developer</option>
                    <option value="backend-developer">Back-end Developer</option>
                    <option value="mern-developer">Mern Stack Developer</option>
                    <option value="python-developer">Python Developer</option>
                </select>
            </div>
        </>
    )
}
