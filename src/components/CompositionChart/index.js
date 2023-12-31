import { Box, Typography, styled, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import { useTheme } from "@emotion/react";
import ReactApexChart from "react-apexcharts";

const CompositionChart = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // update setSeries state if we get data from API
  const [series, setSeries] = useState([
    {
      name: "PRODUCT A",
      data: [44, 55, 41, 67, 22, 43, 21, 49],
    },
    {
      name: "PRODUCT B",
      data: [13, 23, 20, 8, 13, 27, 33, 12],
    },
    {
      name: "PRODUCT C",
      data: [11, 17, 15, 15, 21, 14, 15, 13],
    },
  ]);

  const chartOptions = {
    options: {
      chart: {
        type: "bar",
        height: isMobile ? 240 : 340,
        stacked: true,
        stackType: "100%",
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0,
            },
          },
        },
      ],
      xaxis: {
        categories: [
          "2011 Q1",
          "2011 Q2",
          "2011 Q3",
          "2011 Q4",
          "2012 Q1",
          "2012 Q2",
          "2012 Q3",
          "2012 Q4",
        ],
      },
      fill: {
        opacity: 1,
      },
      legend: {
        position: "right",
        offsetX: 0,
        offsetY: 50,
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
      fontSize: "0.9rem",
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
        Compositions and comparisons<span>16%</span>
      </ChartTitle>
      <ReactApexChart
        options={chartOptions.options}
        series={series}
        type="bar"
        height={isMobile ? 240 : 340}
      />
    </Container>
  );
};

export default CompositionChart;
