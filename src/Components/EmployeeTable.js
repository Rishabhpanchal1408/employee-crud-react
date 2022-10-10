import React from 'react'
import Tr from './Tr'

const TableData = ({ Employees, updateEmployee, deleteEmployee }) => {
    return (
        <>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <td><b>Employee ID</b></td>
                        <td><b>Employee Name</b></td>
                        <td><b>Employee Email </b></td>
                        <td><b>Employee Gender</b></td>
                        <td><b>Employee Contact</b></td>
                        <td><b>Employee language</b></td>
                        <td><b>Actions</b></td>
                    </tr>
                </thead>
                <tbody>
                    {
                        Employees.map((Employee, index) => {
                            return <Tr key={index} Employee={Employee} updateEmployee={updateEmployee} deleteEmployee={deleteEmployee} />
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default TableData
