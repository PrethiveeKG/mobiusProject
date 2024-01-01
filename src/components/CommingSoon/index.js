import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router-dom";

const CommingSoon = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        marginBlockStart: theme.spacing(10),
        textAlign: "center",
      }}
    >
      <Typography variant="h4" sx={{ marginBlock: theme.spacing(2) }}>
        Feature Comming Shortly...
      </Typography>
      <Typography variant="h6">
        Please explore the available features
      </Typography>
      <Button
        variant="outlined"
        sx={{ marginBlock: theme.spacing(2) }}
        onClick={() => navigate("/finHealth")}
      >
        View Fin Health
      </Button>
      <br />
      <Button variant="outlined" onClick={() => navigate("/forecast")}>
        View Forecast
      </Button>
    </Box>
  );
};

export default CommingSoon;
