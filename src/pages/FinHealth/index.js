import {
  Box,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import theme from "../../theme";
import FinanceCard from "../../components/FinanceCard";
import CashBalanceChart from "../../components/CashBalanceChart";
import BurnRateChart from "../../components/BurnRateChart";
import CompositionChart from "../../components/CompositionChart";
import RadarChart from "../../components/RadarChart";
import CashoutChart from "../../components/CashoutChart";

const FinHealth = () => {
  const [year, setYear] = useState("2023");
  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const yearOptions = [
    { label: "As of June 2023", value: "2023" },
    { label: "As of June 2022", value: "2022" },
    { label: "As of June 2021", value: "2021" },
  ];

  const cardData = [
    {
      cardTitle: "Cash balance",
      amount: "3,712,608",
      growth: "up",
    },
    {
      cardTitle: "Gross Revenue",
      amount: "212,111",
      growth: "down",
    },
    {
      cardTitle: "Free Cash Flow",
      amount: "2,122",
      growth: "up",
    },
    {
      cardTitle: "Working Capital",
      amount: "2,343",
      growth: "up",
    },
  ];

  return (
    <Box>
      {/* Header Section */}
      <Grid container xs={12}>
        <Grid item xs={12}>
          <Typography variant="h5">Fin Health / Cash</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            marginBlock: theme.spacing(1.5),
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <FormControl fullWidth sx={{ width: theme.spacing(26) }}>
            <Select
              labelId="select-year"
              id="select-year"
              value={year}
              onChange={handleYearChange}
              size="small"
            >
              {yearOptions?.map((item) => (
                <MenuItem key={item?.value} value={item?.value}>
                  {item?.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      {/* Cards Section */}
      <Grid container xs={12}>
        {cardData?.map((item) => (
          <Grid key={item?.cardTitle} item xs={12} sm={6} md={4} lg={3}>
            <FinanceCard data={item} />
          </Grid>
        ))}
      </Grid>

      {/* Charts Section */}
      <Grid container xs={12}>
        <Grid item xs={12} md={6}>
          <CashBalanceChart />
        </Grid>
        <Grid item xs={12} md={6}>
          <BurnRateChart />
        </Grid>
        <Grid item xs={12}>
          <CashoutChart />
        </Grid>
        <Grid item xs={12} md={6}>
          <RadarChart />
        </Grid>
        <Grid item xs={12} md={6}>
          <CompositionChart />
        </Grid>
      </Grid>
    </Box>
  );
};

export default FinHealth;
