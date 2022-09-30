import React, { useState, useEffect } from 'react'

const Form = ({ addEmployee, editEmployee, EmployeeToEdit }) => {

    const [Employee, setEmployee] = useState(EmployeeToEdit);
    const [addorEdit, setaddorEdit] = useState('');

    useEffect(() => {
        setEmployee(EmployeeToEdit)
        EmployeeToEdit.id == '' ? setaddorEdit('add') : setaddorEdit('update')
    }, [EmployeeToEdit])

    const onSubmit = (e) => {
        e.preventDefault()
        addorEdit == 'add' ? addEmployee(Employee) : editEmployee(Employee)
        setEmployee({
            id: '',
            Name: '',
            Email: '',
            Contact: '',
            Gender: ''
        })
    }


    return (
        <>
            <form className='container mx-auto mt-2 border p-4' onSubmit={onSubmit}>
                <div className='row'>
                    <div className='col-sm-12 col-md-6'>
                        <label htmlFor="EmployeeID" className='form-label'><b>Employee Id :</b></label>
                        <input type="text" id='EmployeeID' name='id' className='form-control' readOnly value={Employee.id} />
                    </div>
                    <div className='col-sm-12 col-md-6'>
                        <label htmlFor="Employeename" className='form-label'><b>Employee  Name :</b></label>
                        <input type="text" id='Employeename' name='Name' className='form-control' value={Employee.Name} onChange={(e) => setEmployee({ ...Employee, Name: e.target.value })} />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-12 col-md-6'>
                        <label htmlFor="Employeeemail" className='form-label'><b>Employee Email ID :</b></label>
                        <input type='email' id='Employeeemail' name='Email' className='form-control' value={Employee.Email} onChange={(e) => setEmployee({ ...Employee, Email: e.target.value })} />
                    </div>
                    <div className='col-sm-12 col-md-6'>
                        <label htmlFor="Employeecontact" className='form-label'><b>Employee Contact :</b></label>
                        <input type="number" id='Employeecontact' name='Contact' className='form-control' value={Employee.Contact} onChange={(e) => setEmployee({ ...Employee, Contact: e.target.value })} />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-12 col-md-6'>
                    <label htmlFor="Employeeemail" className='form-label d-block'><b>Employee Gender :</b></label>
                        <div class="form-check form-check-inline">
                            <input type="radio" className="form-check-input" id="Male" name="Employeegender" value='male' checked={Employee.Gender == 'male'} onChange={(e) => setEmployee({ ...Employee, Gender: e.target.checked? e.target.value: '' })}/>
                            <label className="form-check-label" htmlFor="Male">Male</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input type="radio" className="form-check-input" id="FeMale" name="Employeegender" value='female' checked={Employee.Gender == 'female'} onChange={(e) => setEmployee({ ...Employee, Gender: e.target.checked? e.target.value: '' })}/>
                            <label className="form-check-label" htmlFor="FeMale">FeMale</label>
                        </div>
                    </div>
                </div>
                <div className='d-grid mt-4'>
                    <button className='btn btn-success btn-lg'>ADD EMPLOYEE</button>
                </div>
            </form>
        </>
    )
}

export default Form