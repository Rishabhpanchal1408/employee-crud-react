import React from 'react'
import EmployeeCard from './EmployeeCard'

const CardGallery = ({ Employees,updateEmployee,deleteEmployee }) => {
    return (
        <section className='container my-3'>
            <div className='row'>
                {
                    Employees.map((employee, index) => {
                        return (
                            <div className='col-md-3 col-sm-12' key={index}>
                                <EmployeeCard employee={employee} updateEmployee={updateEmployee} deleteEmployee={deleteEmployee}/>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default CardGallery