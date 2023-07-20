import React from 'react'

export default function EditForm() {
    return (
        <>
           
           <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Name</label>
                <input type="text" className="form-control" name='name' id="name" placeholder="Enter name" />
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Number</label>
                <input type="text" className="form-control" name='number' id="number" placeholder="88xxxxxxxx" />
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Postion</label>
                {/* <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter position"/> */}
                <select name="cars" id="cars" className="form-control">
                    <option value="volvo">Front-end Developer</option>
                    <option value="saab">Back-end Developer</option>
                    <option value="mercedes">Mern Stack Developer</option>
                    <option value="audi">Python Developer</option>
                </select>
            </div>
        </>
    )
}
