import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import DiamondIcon from "@mui/icons-material/Diamond";
import EmailIcon from "@mui/icons-material/Email";
import NotificationsIcon from "@mui/icons-material/Notifications";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const SearchDiv = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  width: "30%",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
}));

const IconBox = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const IconBoxMobile = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
  },
}));

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky" sx={{ marginBottom: 2 }}>
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          LOGO
        </Typography>
        <DiamondIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <SearchDiv>
          <InputBase placeholder="search.."></InputBase>
        </SearchDiv>
        <IconBox>
          <Badge badgeContent={4} color="primary">
            <EmailIcon />
          </Badge>
          <Badge badgeContent={4} color="primary">
            <NotificationsIcon />
          </Badge>
          <Avatar
            sx={{ width: 25, height: 25 }}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            onClick={(e) => setOpen(true)}
          ></Avatar>
        </IconBox>
        <IconBoxMobile>
          <Avatar
            sx={{ width: 25, height: 25 }}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          ></Avatar>
          <Typography variant="body1">John</Typography>
        </IconBoxMobile>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};
