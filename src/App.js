import TableData from "./Components/EmployeeTable";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardGallery from "./Components/CardGallery";
import EmployeeForm from "./Components/EmployeeForm";
import EmployeeTable from "./Components/EmployeeTable";
import Layout from "./Components/Layout";
import Routings from "./Routings";

function App() {

  return (
    <>
      <BrowserRouter>
          <Routings />
      </BrowserRouter>
    </>
  );
}

export default App;
