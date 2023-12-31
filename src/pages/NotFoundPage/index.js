import React from "react";
import { Avatar, Box } from "@mui/material";
import { useTheme } from "@emotion/react";

const NotFoundPage = () => {
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
          "https://www.digitalmesh.com/blog/wp-content/uploads/2020/05/404-error.jpg"
        }
        sx={{
          borderRadius: 0,
          [theme.breakpoints.up("xs")]: {
            width: "60vw",
            height: "34vh",
          },
          [theme.breakpoints.up("sm")]: {
            width: "30vw",
            height: "50vh",
          },
        }}
        alt="page not found"
      />
    </Box>
  );
};

export default NotFoundPage;
