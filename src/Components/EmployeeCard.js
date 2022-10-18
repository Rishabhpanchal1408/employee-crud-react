import React from 'react'

const EmployeeCard = ({employee,updateEmployee,deleteEmployee}) => {
    return (
        <>
            <div className='card'>
                <img src={employee.Gender == 'male'? 'https://www.w3schools.com/bootstrap4/img_avatar1.png' : 'https://www.w3schools.com/bootstrap5/img_avatar5.png'} className='card-img-top img-fluid' />
                <div className='card-body'>
                    <h4 className='card-title'>{employee.Name}</h4>
                    <p className='card-text'>{employee.Email}</p>
                    <p className='card-text'>{employee.Contact}</p>
                    <p className='card-text'>{employee.Gender}</p>
                    <p className='card-text'>{(employee.Language).join(' , ')}</p>
                    <div className='d-flex justify-content-around'>
                        <button className='btn btn-primary' onClick={() => updateEmployee(employee.id)}>Edit</button>
                        <button className='btn btn-danger' onClick={() => deleteEmployee(employee.id)}>Delete</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EmployeeCard