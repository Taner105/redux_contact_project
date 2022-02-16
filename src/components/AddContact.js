import React from 'react'

const AddContact = () => {
    return (
        <div className="container">
            <h1 className='display-3 text-center'>Add Student</h1>
            <div className="row">

                <div className='col-md-8 my-5 shadow mx-auto p-5'>
                    <form>
                        <div className='form-group p-1'>
                            <input type="text" placeholder='Name' className='form-control' />
                        </div>
                        <div className='form-group p-1'>
                            <input type="email" placeholder='Email' className='form-control' />
                        </div>
                        <div className='form-group p-1'>
                            <input type="number" placeholder='Phone number' className='form-control' />
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