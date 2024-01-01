import { Box, Typography, styled, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import { useTheme } from "@emotion/react";
import ReactApexChart from "react-apexcharts";

const CashBalanceChart = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // update setSeries state if we get data from API
  const [series, setSeries] = useState([
    {
      name: "Cash balance",
      data: [44, 55, 57, 56, 61, 58],
    },
    {
      name: "Cash-in",
      data: [76, 85, 101, 98, 87, 105],
    },
    {
      name: "Cash-out",
      data: [35, 41, 36, 26, 45, 48],
    },
  ]);

  const chartOptions = {
    options: {
      chart: {
        type: "bar",
        height: isMobile ? 200 : 300,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "65%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 1,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [
          "2018 FY",
          "2019 FY",
          "2020 FY",
          "2021 FY",
          "2022 FY",
          "2023 FY",
        ],
      },
      // yaxis: {
      //   title: {
      //     text: "$ (thousands)",
      //   },
      // },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands";
          },
        },
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
        Cash Balance Trend <span>16%</span>
      </ChartTitle>
      <ReactApexChart
        options={chartOptions.options}
        series={series}
        type="bar"
        height={isMobile ? 200 : 300}
      />
    </Container>
  );
};

export default CashBalanceChart;
