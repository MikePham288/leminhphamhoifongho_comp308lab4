import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Results from "./components/Results";
import ParametersForm from "./components/ParametersForm";
import "./App.css";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<ParametersForm />} path="/" exact={true} />
      <Route element={<Results />} path="/results" />
    </Routes>
  </BrowserRouter>
);

export default App;
