// import logo from "./logo.svg";
// import "./App.css";
import React from "react";
import SidebarWrapper from "./layout/SidebarWrapper";
import Dashboard from "./pages/Dashboard";
import Charts from "./pages/Charts";
import Forecast from "./pages/Forecast";
import Revenue from "./pages/Revenue";
import Budgeting from "./pages/Budgeting";
import Expenses from "./pages/Expenses";

const App = () => {
  return (
    <div>
      <SidebarWrapper />
      <Dashboard />
      <Charts />
      <Forecast />
      <Revenue />
      <Budgeting />
      <Expenses />
      App
    </div>
  );
};

export default App;
