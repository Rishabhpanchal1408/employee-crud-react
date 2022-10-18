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
            Gender: '',
            Language: []
        })
    }

    const handleChecked = (e) => {
        const { value, checked } = e.target;

        checked ?
            setEmployee({ ...Employee, Language: [...Employee.Language, value] }) :
            setEmployee({ ...Employee, Language: Employee.Language.filter(e => e !== value) })

    }

    return (
        <section className='container my-3'>
            <form className='border p-4' onSubmit={onSubmit}>
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
                <div className='row mt-2'>
                    <div className='col-sm-12 col-md-6'>
                        <label htmlFor="Employeegender" className='form-label d-block'><b>Employee Gender :</b></label>
                        <div className="form-check form-check-inline">
                            <input type="radio" className="form-check-input" id="Male" name="Employeegender" value='male' checked={Employee.Gender == 'male'} onChange={(e) => setEmployee({ ...Employee, Gender: e.target.checked ? e.target.value : '' })} />
                            <label className="form-check-label" htmlFor="Male">Male</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input type="radio" className="form-check-input" id="Female" name="Employeegender" value='female' checked={Employee.Gender == 'female'} onChange={(e) => setEmployee({ ...Employee, Gender: e.target.checked ? e.target.value : '' })} />
                            <label className="form-check-label" htmlFor="Female">Female</label>
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-6'>
                        <label htmlFor="Employeelanguage" className='form-label d-block'><b>Employee Language :</b></label>
                        <div className="form-check form-check-inline">
                            <input type="checkbox" className="form-check-input" id="C/C++" name="Employeelanguage" value='C/C++' checked={Employee.Language.some(lang => 'C/C++' == lang)} onChange={handleChecked} />
                            <label className="form-check-label" htmlFor="C/C++">C / C++</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input type="checkbox" className="form-check-input" id="PHP" name="Employeelanguage" value='PHP' checked={Employee.Language.some(lang => 'PHP' == lang)} onChange={handleChecked} />
                            <label className="form-check-label" htmlFor="PHP">PHP</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input type="checkbox" className="form-check-input" id="JAVA" name="Employeelanguage" value='JAVA' checked={Employee.Language.some(lang => 'JAVA' == lang)} onChange={handleChecked} />
                            <label className="form-check-label" htmlFor="JAVA">JAVA</label>
                        </div>
                    </div>
                </div>
                <div className='d-grid mt-2'>
                    <button className='btn btn-success btn-lg'>ADD EMPLOYEE</button>
                </div>
            </form>
        </section>
    )
}

export default Form