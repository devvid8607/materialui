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

import FlexBetween from "components/FlexBetween";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <FlexBetween padding="1rem 6%" backgroundColor={alt}>
      <FlexBetween>
        <Typography></Typography>
      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;
