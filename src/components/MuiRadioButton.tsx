import {
  Box,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useState } from "react";

export default function MuiRadioButton() {
  const [value, setValue] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  console.log({ value });
  return (
    <Box>
      <FormControl>
        <FormLabel id="job-experience-group-label">
          Years of Experience
        </FormLabel>
        <RadioGroup
          name="job-experience-group"
          aria-labelledby="job-experience-group-label"
          value={value}
          onChange={handleChange}
          row
        >
          <FormControlLabel value="0-2" control={<Radio />} label="0-2" />
          <FormControlLabel value="3-5" control={<Radio />} label="3-5" />
          <FormControlLabel value="6-8" control={<Radio />} label="6-8" />
        </RadioGroup>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
    </Box>
  );
}
