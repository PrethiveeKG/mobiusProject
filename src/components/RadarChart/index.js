import { Box, Typography, styled, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import { useTheme } from "@emotion/react";
import ReactApexChart from "react-apexcharts";

const RadarChart = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // update setSeries state if we get data from API
  const [series, setSeries] = useState([
    {
      name: "Cash-flow",
      data: [80, 50, 30, 40, 100, 20],
    },
  ]);

  const chartOptions = {
    options: {
      chart: {
        height: isMobile ? 200 : 300,
        type: "radar",
      },
      xaxis: {
        categories: ["January", "February", "March", "April", "May", "June"],
      },
    },
  };

  const Container = styled(Box)(({ theme }) => ({
    padding: theme.spacing(2),
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    borderRadius: theme.spacing(1),
    margin: theme.spacing(1),
  }));

  const ChartTitle = styled(Typography)(({ theme }) => ({
    fontSize: "1rem",
    fontWeight: 600,
    "& span": {
      fontSize: "0.8rem",
      background: theme.palette.tickTie.success,
      paddingInline: theme.spacing(1),
      paddingBlock: theme.spacing(0.5),
      marginInlineStart: theme.spacing(0.5),
      borderRadius: theme.spacing(0.5),
      color: theme.palette.tickTie.lightText,
    },
  }));

  return (
    <Container>
      <ChartTitle>
        Cashflow radar<span>16%</span>
      </ChartTitle>
      <ReactApexChart
        options={chartOptions.options}
        series={series}
        type="radar"
        height={isMobile ? 200 : 300}
      />
    </Container>
  );
};

export default RadarChart;
