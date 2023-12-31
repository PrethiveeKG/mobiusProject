import React from "react";
import { Avatar, Box } from "@mui/material";
import { useTheme } from "@emotion/react";

const CommingSoon = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        marginBlockStart: theme.spacing(10),
      }}
    >
      <Avatar
        src={
          "https://www.shutterstock.com/image-vector/website-under-construction-were-launching-600nw-1753906343.jpg"
        }
        sx={{
          borderRadius: 0,
          [theme.breakpoints.up("xs")]: {
            width: "80vw",
            height: "34vh",
          },
          [theme.breakpoints.up("sm")]: {
            width: "60vw",
            height: "50vh",
          },
        }}
        alt="feature comming soon image"
      />
    </Box>
  );
};

export default CommingSoon;
