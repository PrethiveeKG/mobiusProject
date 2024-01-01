import styled from "@emotion/styled";
import { Avatar, Typography } from "@mui/material";
import React from "react";

const Logo = () => {
  // Custom
  const LogoTitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.tickTie.lightText,
    marginBlockStart: theme.spacing(0.5),
  }));

  const Box = styled("div")(({ theme }) => ({
    padding: theme.spacing(2),
    display: "flex",
    alignItems: "center",
    gap: 4,
  }));

  return (
    <Box>
      <Avatar
        src={
          "https://www.tickmarks.net/wp-content/uploads/2021/06/TickmarkFav.png"
        }
        alt="Tick and tie logo icon"
        sx={{ width: "24px", height: "24px" }}
      />
      <LogoTitle>{"TICK & TIE"}</LogoTitle>
    </Box>
  );
};

export default Logo;
