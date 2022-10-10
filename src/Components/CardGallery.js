import React from 'react'
import EmployeeCard from './EmployeeCard'

const CardGallery = ({ Employees,updateEmployee,deleteEmployee }) => {
    return (
        <>
            <div className="row">
                {
                    Employees.map((employee, index) => {
                        return (
                            <div className="col-md-3 col-sm-12">
                                <EmployeeCard key={index} employee={employee} updateEmployee={updateEmployee} deleteEmployee={deleteEmployee}/>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default CardGallery