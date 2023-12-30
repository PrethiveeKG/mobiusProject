import { useTheme } from "@emotion/react";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpen from "@mui/icons-material/MenuOpen";

const SidebarWrapper = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [openDrawer, setOpenDrawer] = useState(true);
  const drawerWidth = openDrawer ? 240 : 0;
  const handleDrawerToggle = () => {
    setOpenDrawer((prev) => !prev);
  };

  console.log("isMobile", isMobile);

  return (
    <div style={{ display: "flex" }}>
      {/* Header */}
      <AppBar
        position="fixed"
        sx={{ width: `calc(100vw - ${drawerWidth}px)`, background: "#fff" }}
      >
        <Toolbar>
          <IconButton onClick={handleDrawerToggle}>
            {openDrawer ? <MenuOpen /> : <MenuIcon />}
          </IconButton>
          Your App Name Text buttons are typically
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Box
        component="nav"
        sx={{ flexShrink: { md: 0 }, width: drawerWidth }}
        aria-label="menu-list"
      >
        <Drawer
          variant={isMobile ? "temporary" : "persistent"}
          anchor="left"
          color="inherit"
          open={openDrawer}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              background: "#292929",
              color: "#fff",
              // background: theme.palette.background.default,
              // color: theme.palette.text.primary,
              // borderRight: "none",
              // [theme.breakpoints.up("md")]: {
              //   top: "88px",
              // },
            },
          }}
        >
          <Typography>Dashboard</Typography>
          <Typography>Dashboard</Typography>
          <Typography>Dashboard</Typography>
          <Typography>Dashboard</Typography>
          <Typography>Dashboard</Typography>
        </Drawer>
      </Box>
      <Box
        style={{
          marginBlockStart: "88px",
        }}
      >
        <main style={{ flexGrow: 1, padding: theme.spacing(3) }}>
          {children}
          <br />
          Text buttons are typically used for less-pronounced actions, including
          those located: in dialogs, in cards. In cards, text buttons help
          maintain an emphasis on card content.Text buttons are typically used
          for less-pronounced actions, including those located: in dialogs, in
          cards. In cards, text buttons help maintain an emphasis on card
          content. Text buttons are typically used for less-pronounced actions,
          including those located: in dialogs, in cards. In cards, text buttons
          help maintain an emphasis on card content.Text buttons are typically
          used for less-pronounced actions, including those located: in dialogs,
          in cards. In cards, text buttons help maintain an emphasis on card
          content. Text buttons are typically used for less-pronounced actions,
          including those located: in dialogs, in cards. In cards, text buttons
          help maintain an emphasis on card content.Text buttons are typically
          used for less-pronounced actions, including those located: in dialogs,
          in cards. In cards, text buttons help maintain an emphasis on card
          content. Text buttons are typically used for less-pronounced actions,
          including those located: in dialogs, in cards. In cards, text buttons
          help maintain an emphasis on card content.Text buttons are typically
          used for less-pronounced actions, including those located: in dialogs,
          in cards. In cards, text buttons help maintain an emphasis on card
          content. Text buttons are typically used for less-pronounced actions,
          including those located: in dialogs, in cards. In cards, text buttons
          help maintain an emphasis on card content.Text buttons are typically
          used for less-pronounced actions, including those located: in dialogs,
          in cards. In cards, text buttons help maintain an emphasis on card
          content. Text buttons are typically used for less-pronounced actions,
          including those located: in dialogs, in cards. In cards, text buttons
          help maintain an emphasis on card content.Text buttons are typically
          used for less-pronounced actions, including those located: in dialogs,
          in cards. In cards, text buttons help maintain an emphasis on card
          content. Text buttons are typically used for less-pronounced actions,
          including those located: in dialogs, in cards. In cards, text buttons
          help maintain an emphasis on card content.Text buttons are typically
          used for less-pronounced actions, including those located: in dialogs,
          in cards. In cards, text buttons help maintain an emphasis on card
          content. Text buttons are typically used for less-pronounced actions,
          including those located: in dialogs, in cards. In cards, text buttons
          help maintain an emphasis on card content.Text buttons are typically
          used for less-pronounced actions, including those located: in dialogs,
          in cards. In cards, text buttons help maintain an emphasis on card
          content.
        </main>
      </Box>
    </div>
  );
};

export default SidebarWrapper;
