import React from "react";
import { Stack, TextField } from "@mui/material";

function MuiTextField() {
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <TextField label="name" variant="outlined" />
        <TextField label="name" variant="filled" />
        <TextField label="name" variant="standard" />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField label="small secondary" size="small" color="secondary" />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField label="name" required />
      </Stack>
    </Stack>
  );
}

export default MuiTextField;
