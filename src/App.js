// // import logo from "./logo.svg";
// // import "./App.css";
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import { Box, LinearProgress } from "@mui/material";

const App = () => {
  const FinHealth = React.lazy(() => import("./pages/FinHealth"));
  const BuisnessInsights = React.lazy(() => import("./pages/BuisnessInsights"));
  const Budgeting = React.lazy(() => import("./pages/Budgeting"));
  const Forecast = React.lazy(() => import("./pages/Forecast"));
  const Cash = React.lazy(() => import("./pages/Cash"));
  const Revenue = React.lazy(() => import("./pages/Revenue"));
  const Expenses = React.lazy(() => import("./pages/Expenses"));
  const NotFoundPage = React.lazy(() => import("./pages/NotFoundPage"));

  return (
    <Box>
      <MainLayout>
        <Suspense fallback={<LinearProgress />}>
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
        </Suspense>
      </MainLayout>
    </Box>
  );
};

export default App;
