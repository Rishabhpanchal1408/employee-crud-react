import React from "react";
import CardGallery from "./Components/CardGallery";
import EmployeeForm from "./Components/EmployeeForm";
import EmployeeTable from "./Components/EmployeeTable";
import Layout from "./Components/Layout";
import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

const Routings = () => {
  const navigate = useNavigate();
  const [EmployeeCouter, setEmployeeCouter] = useState(1);
  const [Employees, setEmployees] = useState([
    {
      id: 1,
      Name: "Ramesh Mistri",
      Email: "ramesh@gmail.com",
      Contact: 6354656485,
      Gender: "male",
      Language: ["PHP"],
    },
    {
      id: 2,
      Name: "John Cena",
      Email: "johnc@gmail.com",
      Contact: 7354656485,
      Gender: "male",
      Language: ["PHP"],
    },
    {
      id: 3,
      Name: "Jainam Bhandari",
      Email: "jainam@gmail.com",
      Contact: 9354656485,
      Gender: "male",
      Language: ["PHP"],
    },
    {
      id: 4,
      Name: "Htirik Mistri",
      Email: "hritik@gmail.com",
      Contact: 7865423155,
      Gender: "male",
      Language: ["C/C++"],
    },
    {
      id: 5,
      Name: "Abhishek Bisnoi",
      Email: "Abisnoi@gmail.com",
      Contact: 9874562132,
      Gender: "male",
      Language: ["PHP"],
    },
  ]);

  const [Employee, setEmployee] = useState({
    id: "",
    Name: "",
    Email: "",
    Contact: "",
    Gender: "",
    Language: [],
  });

  const addEmployee = (Employee) => {
    setEmployeeCouter(EmployeeCouter + 1);
    Employee.id = EmployeeCouter;
    setEmployees([...Employees, Employee]);
    navigate('/');
  };

  const updateEmployee = (id) => {
    let Employee = Employees.find((Employee) => Employee.id === id);
    setEmployee(Employee);
    navigate("/update");
    console.log(Employee);
  };

  const editEmployee = (Employee) => {
    const updatedEmployees = Employees.map((emp) => {
      return emp.id === Employee.id ? Employee : emp;
    });
    setEmployees(updatedEmployees);
    navigate('/');
  };

  const deleteEmployee = (id) => {
    const updatedEmployee = Employees.filter((E) => {
      return E.id != id;
    });
    setEmployees(updatedEmployee);
  };
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <EmployeeTable
              Employees={Employees}
              updateEmployee={updateEmployee}
              deleteEmployee={deleteEmployee}
            />
          }
        />
        <Route
          path="/create"
          element={
            <EmployeeForm
              addEmployee={addEmployee}
              editEmployee={editEmployee}
              EmployeeToEdit={{
                id: "",
                Name: "",
                Email: "",
                Contact: "",
                Gender: "",
                Language: [],
              }}
            />
          }
        />
        <Route
          path="/update"
          element={
            <EmployeeForm
              addEmployee={addEmployee}
              editEmployee={editEmployee}
              EmployeeToEdit={Employee}
            />
          }
        />
        <Route
          path="/cards"
          element={
            <CardGallery
              Employees={Employees}
              updateEmployee={updateEmployee}
              deleteEmployee={deleteEmployee}
            />
          }
        />
      </Route>
    </Routes>
  );
};

export default Routings;
