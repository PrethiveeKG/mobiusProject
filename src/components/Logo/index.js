import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

const Logo = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        paddingInline: 2,
        marginBlock: 2,
      }}
    >
      <Avatar
        src={
          "https://www.tickmarks.net/wp-content/uploads/2021/06/TickmarkFav.png"
        }
        alt="Tick and tie logo icon"
        sx={{ width: "28px", height: "28px" }}
      />
      <Typography variant="h6">{"TICK & TIE"}</Typography>
    </Box>
  );
};

export default Logo;
