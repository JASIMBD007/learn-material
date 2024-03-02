import { Box, MenuItem, TextField } from "@mui/material";
import { useState } from "react";

export default function MuiSelect() {
  const [countries, setCountries] = useState<string[]>([]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCountries(typeof value === "string" ? value.split(",") : value); //
  };
  console.log({ countries });
  return (
    <Box width="250px">
      <TextField
        label="select country"
        select
        value={countries}
        onChange={handleChange}
        fullWidth // to make the input field full width
        SelectProps={{
          multiple: true, // to select multiple options
        }}
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="BD">Bangladesh</MenuItem>
        <MenuItem value="DE">Germany</MenuItem>
      </TextField>
    </Box>
  );
}
