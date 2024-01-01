import { Box, Button, ButtonGroup, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import ForecastDataGrid from "../../components/ForecastDataGrid";
import { useTheme } from "@emotion/react";

const Forecast = () => {
  const theme = useTheme();

  const [forecast, setForecast] = useState("income");
  const [duration, setDuration] = useState("monthly");

  const handleForecastChange = (value) => {
    setForecast(value);
  };

  const handleDurationChange = (value) => {
    setDuration(value);
  };

  const btngroupStyle = {
    [theme.breakpoints.up("xs")]: {
      marginInlineStart: 0,
      marginBlockStart: theme.spacing(2),
    },
    [theme.breakpoints.up("sm")]: {
      marginInlineStart: theme.spacing(4),
      marginBlockStart: 0,
    },
  };

  return (
    <Box>
      <Grid container xs={12}>
        <Grid item xs={12}>
          <Typography variant="h5">
            {/* This will changed as breadcrumbs if we get all pages*/}
            FP & A / Forecast / View Forecast
          </Typography>
        </Grid>

        <Grid container xs={12} sx={{ marginBlock: theme.spacing(2) }}>
          <ButtonGroup size="small">
            <Button
              color={forecast === "income" ? "primary" : "secondary"}
              onClick={() => handleForecastChange("income")}
            >
              Income 
            </Button>
            <Button
              color={forecast === "balance" ? "primary" : "secondary"}
              onClick={() => handleForecastChange("balance")}
            >
              Balance Sheet
            </Button>
            <Button
              color={forecast === "cash" ? "primary" : "secondary"}
              onClick={() => handleForecastChange("cash")}
            >
              Cash Flow
            </Button>
          </ButtonGroup>

          <ButtonGroup size="small" sx={btngroupStyle}>
            <Button
              color={duration === "monthly" ? "primary" : "secondary"}
              onClick={() => handleDurationChange("monthly")}
            >
              Monthly
            </Button>
            <Button
              color={duration === "quaterly" ? "primary" : "secondary"}
              onClick={() => handleDurationChange("quaterly")}
            >
              Quaterly
            </Button>
            <Button
              color={duration === "yearly" ? "primary" : "secondary"}
              onClick={() => handleDurationChange("yearly")}
            >
              Yearly
            </Button>
          </ButtonGroup>
        </Grid>

        <Grid item xs={12}>
          <ForecastDataGrid />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Forecast;
