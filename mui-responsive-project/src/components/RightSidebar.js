import { Box } from "@mui/material";
import React from "react";

export const RightSidebar = () => {
  return (
    <Box
      bgcolor="blue"
      flex={2}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      RightSidebar
    </Box>
  );
};
