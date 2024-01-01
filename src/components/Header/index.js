import React, { useState } from "react";
import {
  AppBar,
  Button,
  Grid,
  IconButton,
  TextField,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpen from "@mui/icons-material/MenuOpen";
import { useTheme } from "@emotion/react";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import CodeIcon from "@mui/icons-material/Code";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import styled from "@emotion/styled";
import MobileSearch from "./MobileSearch";

const Header = (props) => {
  const theme = useTheme();
  const { drawerWidth, openDrawer, isSmallDevice, handleDrawerToggle } = props;
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const [searchValue, setSearchValue] = useState("");
  const [openMobileSearch, setOpenMobileSearch] = useState(false);

  const CustomIconButton = styled(IconButton)(({ theme }) => ({
    "& .MuiSvgIcon-root": {
      [theme.breakpoints.up("xs")]: {
        fontSize: "1.25rem",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "1.6rem",
      },
    },
  }));
  const navbarStyled = {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 2,
    "& .MuiButton-outlined": {
      fontSize: "0.8rem",
    },
  };

  const handleMobSearchClose = () => {
    setOpenMobileSearch(false);
  };

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
        <CustomIconButton onClick={handleDrawerToggle}>
          {openDrawer ? <MenuOpen /> : <MenuIcon />}
        </CustomIconButton>
        <Grid container xs={12} spacing={1}>
          <Grid item xs={3} sm={1} md={5}>
            {isTablet ? (
              <CustomIconButton onClick={() => setOpenMobileSearch(true)}>
                <SearchIcon />
              </CustomIconButton>
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
              />
            )}
            <MobileSearch
              openMobileSearch={openMobileSearch && isTablet}
              handleMobSearchClose={handleMobSearchClose}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
          </Grid>

          <Grid item xs={9} sm={11} md={7} sx={navbarStyled}>
            {isMobile ? (
              <CustomIconButton onClick={() => {}}>
                <HelpOutlineIcon />
              </CustomIconButton>
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
              <CustomIconButton onClick={() => {}}>
                <CodeIcon />
              </CustomIconButton>
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
              <CustomIconButton size="small" onClick={() => {}}>
                <StarBorderIcon />
              </CustomIconButton>
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
              <CustomIconButton color="primary" onClick={() => {}}>
                <CloudUploadIcon />
              </CustomIconButton>
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
