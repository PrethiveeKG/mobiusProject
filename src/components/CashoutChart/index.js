import { Box, Typography, styled, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import { useTheme } from "@emotion/react";
import ReactApexChart from "react-apexcharts";

const CashoutChart = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // update setSeries state if we get data from API
  const [series, setSeries] = useState([
    {
      name: "Cash-in",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "Cash-out",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ]);

  const chartOptions = {
    options: {
      chart: {
        height: isMobile ? 200 : 300,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2023-09-19T00:00:00.000Z",
          "2023-09-19T01:30:00.000Z",
          "2023-09-19T02:30:00.000Z",
          "2023-09-19T03:30:00.000Z",
          "2023-09-19T04:30:00.000Z",
          "2023-09-19T05:30:00.000Z",
          "2023-09-19T06:30:00.000Z",
        ],
      },
      tooltip: {
        x: {
          format: "dd/MM/yyyy HH:mm",
        },
      },
    },
  };

  const Container = styled(Box)(({ theme }) => ({
    padding: theme.spacing(2),
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    border: "1px solid white",
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
        Cash-in & Cash-out<span>16%</span>
      </ChartTitle>
      <ReactApexChart
        options={chartOptions.options}
        series={series}
        type="area"
        height={isMobile ? 200 : 300}
      />
    </Container>
  );
};

export default CashoutChart;
