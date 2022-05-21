import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import React, { Fragment } from "react";
import Dashboard from "./components/dashboard";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
