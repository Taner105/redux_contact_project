import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const EditContact = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const contacts = useSelector(state => state)
    const currentContact = contacts.find(contact => contact.id === parseInt(id));

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")

    useEffect(() => {
        if (currentContact) {
            setName(currentContact.name)
            setEmail(currentContact.email)
            setNumber(currentContact.number)
        }
    }, [currentContact])

    const handleSubmit = (e) => {
        e.preventDefault();

        const checkEmail = contacts.find(contact => contact.id !== parseInt(id) && contact.email === email)
        const checkNumber = contacts.find(contact => contact.id !== parseInt(id) && contact.number === number)

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
            id: parseInt(id),
            name,
            email,
            number,
        }
        console.log(data);
        dispatch({ type: "UPDATE_CONTACT", payload: data })
        toast.success("Student updated successfully!!")
        navigate("/");
    }
    return (
        <div className="container">
            {
                currentContact ? (
                    <>
                        <h1 className='display-3 my-5  text-center'>Edit Student {id}</h1>
                        <div className="row">

                            <div className='col-md-6 shadow mx-auto p-5'>
                                <form onSubmit={handleSubmit}>
                                    <div className='form-group'>
                                        <input type="text" placeholder='Name' className='form-control' value={name} onChange={(e) => setName(e.target.value)} />
                                    </div>
                                    <div className='form-group'>
                                        <input type="email" placeholder='Email' className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className='form-group'>
                                        <input type="number" placeholder='Phone number' className='form-control' value={number} onChange={(e) => setNumber(e.target.value)} />
                                    </div>
                                    <div className='form-group'>
                                        <input type="submit" value="Update Student" className='btn btn-dark' />
                                        <Link to="/" className='btn btn-danger mx-3' >Cancel</Link>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </>
                ) : (
                    <h1 className='display-3 my-5  text-center'>Student contact with id {id} not exists</h1>
                )
            }

        </div>
    )
}

export default EditContact