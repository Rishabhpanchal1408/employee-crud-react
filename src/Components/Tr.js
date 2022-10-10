import React from 'react'

const Tr = ({ updateEmployee, Employee, deleteEmployee }) => {
    return (
        <tr>
            <td>{Employee.id}</td>
            <td>{Employee.Name}</td>
            <td>{Employee.Email}</td>
            <td>{Employee.Gender}</td>
            <td>{Employee.Contact}</td>
            <td>{(Employee.Language).join(',')}</td>
            <td className='d-flex justify-content-around'>
                <button className='btn btn-primary' onClick={() => updateEmployee(Employee.id)}>Edit</button>
                <button className='btn btn-danger' onClick={() => deleteEmployee(Employee.id)} >Delete</button>
            </td>
        </tr>
    )
}

export default Tr