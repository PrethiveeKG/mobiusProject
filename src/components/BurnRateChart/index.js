import { Box, Typography, styled, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import { useTheme } from "@emotion/react";
import ReactApexChart from "react-apexcharts";

const BurnRateChart = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));


  // update setSeries state if we get data from API
  const [series, setSeries] = useState([
    {
      name: "cash burn rate",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 106, 120, 132, 148],
    },
  ]);

  const chartOptions = {
    options: {
      chart: {
        height: isMobile ? 200 : 300,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
        colors: theme.palette.tickTie.error,
      },
      markers: {
        size: 5,
        colors: theme.palette.tickTie.error,
        strokeColors: "#fff",
        strokeWidth: 2,
        strokeOpacity: 0.9,
        strokeDashArray: 0,
        fillOpacity: 1,
        discrete: [],
        shape: "circle",
        radius: 2,
        showNullDataPoints: true,
        hover: {
          size: 6,
        },
      },
    //   title: {
    //     text: "cash burn rate by Month",
    //     align: "left",
    //   },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"],
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      tooltip: {
        enabled: false,
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
    fontSize: "0.9rem",
    fontWeight: 600,
    "& span": {
      fontSize: "0.8rem",
      background: theme.palette.tickTie.error,
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
        Burn Rate <span>16%</span>
      </ChartTitle>
      <ReactApexChart
        options={chartOptions.options}
        series={series}
        type="line"
        height={isMobile ? 200 : 300}
      />
    </Container>
  );
};

export default BurnRateChart;
