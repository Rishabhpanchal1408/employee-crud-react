import Form from './Components/EmployeeForm';
import TableData from './Components/EmployeeTable';
import { useState } from 'react';
import CardGallery from './Components/CardGallery';

function App() {
  const [Employees, setEmployees] = useState([
    {
      id: 1,
      Name: 'Ramesh Mistri',
      Email: 'ramesh@gmail.com',
      Contact: 6354656485,
      Gender: 'male',
      Language: ['PHP']
    }, {
      id: 2,
      Name: 'John Cena',
      Email: 'johnc@gmail.com',
      Contact: 7354656485,
      Gender: 'male',
      Language: ['PHP']
    }, {
      id: 3,
      Name: 'Jainam Bhandari',
      Email: 'jainam@gmail.com',
      Contact: 9354656485,
      Gender: 'male',
      Language:['PHP']
    }, {
      id: 4,
      Name: 'Htirik Mistri',
      Email: 'hritik@gmail.com',
      Contact: 7865423155,
      Gender: 'male',
      Language:['C/C++']
    }, {
      id: 5,
      Name: 'Abhishek Bisnoi',
      Email: 'Abisnoi@gmail.com',
      Contact: 9874562132,
      Gender: 'male',
      Language:['PHP']
    }
  ])

  const [Employee, setEmployee] = useState({
    id: '',
    Name: '',
    Email: '',
    Contact: '',
    Gender: '',
    Language:[]
  })

  const addEmployee = (Employee) => {
    Employee.id = Employees.length + 1;
    setEmployees([...Employees, Employee])
  }

  const updateEmployee = (id) => {
    let Employee = Employees.find(Employee => Employee.id === id);
    setEmployee(Employee)
    console.log(Employee)
  }

  const editEmployee = (Employee) => {
    const updatedEmployees = Employees.map(emp => {
      return emp.id === Employee.id ? Employee : emp;
    })
    setEmployees(updatedEmployees)
  }

  const deleteEmployee = (id) => {
    const updatedEmployee = Employees.filter(E => {
      return E.id != id
    })
    setEmployees(updatedEmployee)
  }
  return (
    <>
      <section className='container my-3'>
        <Form addEmployee={addEmployee} editEmployee={editEmployee} EmployeeToEdit={Employee} />
      </section>
      <section className='container my-3'>
        <TableData Employees={Employees} updateEmployee={updateEmployee} deleteEmployee={deleteEmployee} />
      </section>
      <section className='container my-3' >
        <CardGallery Employees={Employees} updateEmployee={updateEmployee} deleteEmployee={deleteEmployee} />
      </section>
    </>
  );
}

export default App;
