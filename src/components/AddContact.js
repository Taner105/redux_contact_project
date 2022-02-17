import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const AddContact = () => {
    const contacts = useSelector((state) => state)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        const checkEmail = contacts.find(contact => contact.email === email && email)
        const checkNumber = contacts.find(contact => contact.number === parseInt(number))
        console.log(checkNumber);

        if (!name || !email || !number) {
            return toast.warning("Please fill in all fields")
        }
        if (checkEmail) {
            return toast.error("This email already Exists");
        }
        if (checkNumber) {
            return toast.error("This number already Exists");
        }


        const data = {
            id: contacts[contacts.length - 1].id + 1,
            name,
            email,
            number,
        }
        console.log(data);
        dispatch({ type: "ADD_CONTACT", payload: data })
        toast.success("Student added successfully!!")
        navigate("/");
    }
    return (
        <div className="container">
            <h1 className='display-3 text-center'>Add Student</h1>
            <div className="row">

                <div className='col-md-8 my-5 shadow mx-auto p-5'>
                    <form onSubmit={handleSubmit}>
                        <div className='form-group p-1'>
                            <input type="text" placeholder='Name' className='form-control' value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className='form-group p-1'>
                            <input type="email" placeholder='Email' className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className='form-group p-1'>
                            <input type="number" placeholder='Phone number' className='form-control' value={number} onChange={(e) => setNumber(e.target.value)} />
                        </div>
                        <div className='form-group p-1'>
                            <input type="submit" value="Add Student" className='btn btn-block btn-dark' />
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default AddContact