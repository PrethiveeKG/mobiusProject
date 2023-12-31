import React from "react";
import Card from "@mui/material/Card";
import { Typography, styled } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useTheme } from "@emotion/react";

const FinanceCard = ({ data }) => {
  const theme = useTheme();

  const CardTitle = styled(Typography)(({ theme }) => ({
    textAlign: "center",
    fontWeight: 600,
    [theme.breakpoints.up("xs")]: {
      fontSize: "0.9rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.1rem",
    },
  }));

  const CardContent = styled(Typography)(({ theme, growth }) => ({
    textAlign: "center",
    fontWeight: 700,
    color:
      growth === "up"
        ? theme.palette.tickTie.darkText
        : theme.palette.tickTie.error,
    [theme.breakpoints.up("xs")]: {
      fontSize: "1.2rem",
      marginBlock: theme.spacing(0.5),
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "2rem",
      marginBlock: theme.spacing(0.75),
    },
    "& .MuiSvgIcon-root": {
      fontWeight: 700,
      marginBottom: theme.spacing(-0.5),
      color:
        growth === "up"
          ? theme.palette.tickTie.success
          : theme.palette.tickTie.error,
      [theme.breakpoints.up("xs")]: {
        fontSize: "1.2rem",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "2rem",
      },
    },
  }));

  const CardFooter = styled(Typography)(({ theme }) => ({
    textAlign: "center",
    [theme.breakpoints.up("xs")]: {
      fontSize: "0.7rem",
    },
    [theme.breakpoints.up("md")]: {
        fontSize: "0.9rem",
    },
  }));

  return (
    <Card
      elevation={3}
      sx={{ padding: theme.spacing(2), margin: theme.spacing(1) }}
    >
      <CardTitle>{data?.cardTitle}</CardTitle>
      <CardContent growth={data?.growth}>
        {"$"}
        {data?.amount}{" "}
        {data?.growth === "up" ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
      </CardContent>
      <CardFooter> {`Total $4,434,67 (+21%) `}</CardFooter>
    </Card>
  );
};

export default FinanceCard;
