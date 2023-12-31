// // import logo from "./logo.svg";
// // import "./App.css";
import React from "react";
import MainLayout from "./layout/MainLayout";
import Forecast from "./pages/Forecast";
import Revenue from "./pages/Revenue";
import Budgeting from "./pages/Budgeting";
import Expenses from "./pages/Expenses";
import { Box } from "@mui/material";
import FinHealth from "./pages/FinHealth";
import { Routes, Route } from "react-router-dom";
import BuisnessInsights from "./pages/BuisnessInsights";
import Cash from "./pages/Cash";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  return (
    <Box>
      <MainLayout>
        <Routes>
          <Route path="/" element={<FinHealth />} />
          <Route path="/finHealth" element={<FinHealth />} />
          <Route path="/bi" element={<BuisnessInsights />} />
          <Route path="/budgeting" element={<Budgeting />} />
          <Route path="/forecast" element={<Forecast />} />
          <Route path="/cash" element={<Cash />} />
          <Route path="/revenue" element={<Revenue />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/payrollHeadcount" element={<Expenses />} />
          {/* 404 Page */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </MainLayout>
    </Box>
  );
};

export default App;
