import { AccountCircle } from "@mui/icons-material";
import { InputAdornment, Stack, TextField } from "@mui/material";
import { useState } from "react";

export default function MuiTextField() {
  const [value, setValue] = useState("");
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="Name" variant="standard" />
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
      </Stack>

      <Stack spacing={4} direction="row">
        <TextField label="Small secondary" size="small" color="secondary" />
      </Stack>

      <Stack spacing={4} direction="row">
        <TextField
          label="Form Input"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value} //if value is empty, show error
          helperText={!value ? "Please enter a value" : ""} //if value is empty, show error
        />
        <TextField
          label="Password"
          type="password"
          helperText="Do not share password"
          disabled
        />
        <TextField label="Read Only" inputProps={{ readOnly: true }} />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />

        <TextField
          label="TextField"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
      </Stack>
    </Stack>
  );
}
