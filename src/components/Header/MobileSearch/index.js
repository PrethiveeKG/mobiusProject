import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
} from "@mui/material";
import React from "react";
import { useTheme } from "@emotion/react";

const MobileSearch = ({
  openMobileSearch,
  handleMobSearchClose,
  setSearchValue,
  searchValue,
}) => {
  const theme = useTheme();

  return (
    <Dialog open={openMobileSearch} onClose={handleMobSearchClose}>
      <DialogContent>
        <TextField
          id="searchbar"
          variant="outlined"
          placeholder="Search"
          size="small"
          fullWidth
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
      </DialogContent>

      <DialogActions>
        <Button
          onClick={handleMobSearchClose}
          sx={{ marginBlockStart: theme.spacing(14) }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default MobileSearch;
