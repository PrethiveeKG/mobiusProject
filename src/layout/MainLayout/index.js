import { useTheme } from "@emotion/react";
import {
  Box,
  Collapse,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import Logo from "../../components/Logo";
import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import CalendarViewMonthIcon from "@mui/icons-material/CalendarViewMonth";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";

const MainLayout = ({ children }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const isSmallDevice = useMediaQuery(theme.breakpoints.down("1048"));
  const [openDrawer, setOpenDrawer] = useState(true);
  const [openFPA, setOpenFPA] = useState(true);
  const [selectedMenu, setSelectedMenu] = useState("finHealth");

  const drawerWidth = openDrawer ? 260 : 0;
  const handleDrawerToggle = () => {
    setOpenDrawer((prev) => !prev);
  };

  const handleFPAToggle = () => {
    setOpenFPA((prev) => !prev);
  };

  const handleMenuClick = (menuName) => {
    setSelectedMenu(menuName);
    navigate(menuName);
    isSmallDevice && handleDrawerToggle();
  };

  const Main = styled("main")(({ theme }) => ({
    marginBlockStart: theme.spacing(8),
    flexGrow: 1,
    [theme.breakpoints.up('xs')]: {
      padding: theme.spacing(1),
		},
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(2),
		},

  }));

  return (
    <Box sx={{ display: isSmallDevice ? "block" : "flex" }}>
      {/* Header */}
      <Header
        drawerWidth={drawerWidth}
        openDrawer={openDrawer}
        isSmallDevice={isSmallDevice}
        handleDrawerToggle={handleDrawerToggle}
      />

      {/* Drawer */}
      <Box
        component="nav"
        sx={{ flexShrink: { md: 0 }, width: drawerWidth }}
        aria-label="menu-list"
      >
        <Drawer
          variant={isSmallDevice ? "temporary" : "persistent"}
          anchor="left"
          color="inherit"
          open={openDrawer}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              bgcolor: theme.palette.tickTie.main,
              color: theme.palette.tickTie.light,
              paddingInline: 1,
            },
          }}
        >
          {/* App Logo */}
          <Logo />

          <List
            component="nav"
            aria-label="side-menu-navigation-list"
            sx={{
              "& .MuiSvgIcon-root": {
                color: theme.palette.tickTie.light,
              },
              "& .MuiListItemIcon-root": {
                minWidth: theme.spacing(5),
              },
              "& .MuiListItemText-primary": {
                fontSize: "0.9rem",
              },
            }}
          >
            {/* Fin Health */}
            <ListItemButton
              selected={selectedMenu === "finHealth"}
              onClick={() => handleMenuClick("finHealth")}
            >
              <ListItemIcon>
                <SpaceDashboardOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Fin Health" />
            </ListItemButton>

            {/* BI */}
            <ListItemButton
              selected={selectedMenu === "bi"}
              onClick={() => handleMenuClick("bi")}
            >
              <ListItemIcon>
                <CalendarViewMonthIcon />
              </ListItemIcon>
              <ListItemText primary="BI" />
            </ListItemButton>

            {/* FP & A */}
            <ListItemButton onClick={handleFPAToggle}>
              <ListItemIcon>
                <FolderOpenOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="FP & A" />
              {openFPA ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openFPA} timeout="auto">
              <List
                component="nav"
                aria-label="side-menu-navigation-list"
                sx={{
                  "& .MuiListItemText-root": {
                    paddingInlineStart: 6,
                  },
                }}
              >
                {/* Budgeting */}
                <ListItemButton
                  selected={selectedMenu === "budgeting"}
                  onClick={() => handleMenuClick("budgeting")}
                >
                  <ListItemText primary="Budgeting" />
                </ListItemButton>

                {/* Forecast */}
                <ListItemButton
                  selected={selectedMenu === "forecast"}
                  onClick={() => handleMenuClick("forecast")}
                >
                  <ListItemText primary="Forecast" />
                </ListItemButton>

                {/* Cash */}
                <ListItemButton
                  selected={selectedMenu === "cash"}
                  onClick={() => handleMenuClick("cash")}
                >
                  <ListItemText primary="Cash" />
                </ListItemButton>

                {/* Revenue */}
                <ListItemButton
                  selected={selectedMenu === "revenue"}
                  onClick={() => handleMenuClick("revenue")}
                >
                  <ListItemText primary="Revenue" />
                </ListItemButton>

                {/* Expenses */}
                <ListItemButton
                  selected={selectedMenu === "expenses"}
                  onClick={() => handleMenuClick("expenses")}
                >
                  <ListItemText primary="Expenses" />
                </ListItemButton>

                {/* Payroll & Headcount */}
                <ListItemButton
                  selected={selectedMenu === "payrollHeadcount"}
                  onClick={() => handleMenuClick("payrollHeadcount")}
                >
                  <ListItemText primary="Payroll & Headcount" />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        </Drawer>
      </Box>
      <Main>{children}</Main>
    </Box>
  );
};

export default MainLayout;
