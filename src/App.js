// import logo from "./logo.svg";
// import "./App.css";
import React from "react";
import MainLayout from "./layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import Charts from "./pages/Charts";
import Forecast from "./pages/Forecast";
import Revenue from "./pages/Revenue";
import Budgeting from "./pages/Budgeting";
import Expenses from "./pages/Expenses";
import { Box } from "@mui/material";

const App = () => {
  return (
    <Box>
      <MainLayout>
        <Dashboard />
        <Charts />
        <Forecast />
        <Revenue />
        <Budgeting />
        <Expenses />
      </MainLayout>
    </Box>
  );
};

export default App;
