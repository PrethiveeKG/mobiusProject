import {
  AppBar,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpen from "@mui/icons-material/MenuOpen";
import { useTheme } from "@emotion/react";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import CodeIcon from "@mui/icons-material/Code";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const Header = ({
  drawerWidth,
  openDrawer,
  isSmallDevice,
  handleDrawerToggle,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const [searchValue, setSearchValue] = useState("");

  return (
    <AppBar
      position="fixed"
      sx={{
        width: isSmallDevice ? `100vw` : `calc(100vw - ${drawerWidth}px)`,
        bgcolor: theme.palette.tickTie.light,
      }}
      elevation={1}
    >
      <Toolbar>
        <IconButton onClick={handleDrawerToggle}>
          {openDrawer ? <MenuOpen /> : <MenuIcon />}
        </IconButton>
        <Grid container xs={12} spacing={1}>
          <Grid item xs={3} sm={1} md={5}>
            {isTablet ? (
              <IconButton onClick={() => {}}>
                <SearchIcon />
              </IconButton>
            ) : (
              <TextField
                id="searchbar"
                variant="outlined"
                placeholder="Search"
                size="small"
                sx={{ marginInlineStart: 2 }}
                fullWidth
                value={searchValue}
                onChange={(e) => {
                  setSearchValue(e.target.value);
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            )}
          </Grid>

          <Grid
            item
            xs={9}
            sm={11}
            md={7}
            sx={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: 2,
            }}
          >
            {isMobile ? (
              <IconButton onClick={() => {}}>
                <HelpOutlineIcon />
              </IconButton>
            ) : (
              <Button
                variant="outlined"
                color="secondary"
                size="small"
                startIcon={<HelpOutlineIcon />}
              >
                FAQ
              </Button>
            )}

            {isMobile ? (
              <IconButton onClick={() => {}}>
                <CodeIcon />
              </IconButton>
            ) : (
              <Button
                variant="outlined"
                size="small"
                color="secondary"
                startIcon={<CodeIcon />}
              >
                My Prompt
              </Button>
            )}

            {isMobile ? (
              <IconButton size="small" onClick={() => {}}>
                <StarBorderIcon />
              </IconButton>
            ) : (
              <Button
                variant="outlined"
                size="small"
                color="secondary"
                startIcon={<StarBorderIcon />}
              >
                Favourite
              </Button>
            )}

            {isMobile ? (
              <IconButton color="primary" onClick={() => {}}>
                <CloudUploadIcon />
              </IconButton>
            ) : (
              <Button variant="contained" size="small">
                Upload
              </Button>
            )}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
