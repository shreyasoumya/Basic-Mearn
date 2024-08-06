import React from 'react'
function UpdateUser(){
    return(
        <div className="d-flex justify-content-center align-items-center" >
        <div className="w-50 rounded">
        <form>
            <h2>Update User</h2>
            <div className='mb-2'>
            <label>Name</label>
            <input type="text"></input>
            </div>
            <div className='mb-2'>
            <label>Email</label>
            <input type="text"></input>
            </div>
            <div className='mb-2'>
            <label>Age</label>
            <input type="text"></input>
            
            </div>
            <button className="btn btn-success">Submit</button>
        </form>
        </div>
            
        </div>
    )
} 
export default UpdateUser;