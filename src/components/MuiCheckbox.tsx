import { Bookmark, BookmarkBorder } from "@mui/icons-material";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
} from "@mui/material";
import React, { useState } from "react";

export default function MuiCheckbox() {
  const [accept, setAccept] = useState(false);
  const [skills, setSkills] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAccept(event.target.checked);
  };
  //   console.log({ accept });

  const handleSkillsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = skills.indexOf(event.target.value); //
    if (index === -1) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills(skills.filter((skill) => skill !== event.target.value));
    }
  };
  console.log({ skills });
  return (
    <Box>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox defaultChecked size="small" color="secondary" />}
          label="Label"
        />
        <FormControlLabel
          required
          control={<Checkbox onChange={handleChange} />}
          label="Required"
        />
        <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
      </FormGroup>
      <Box>
        <Checkbox
          icon={<BookmarkBorder />}
          checkedIcon={<Bookmark />}
          checked={accept}
          onChange={handleChange}
        />
      </Box>
      <Box>
        <FormControl error>
          <FormLabel>Skills</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  value="html"
                  checked={skills.includes("html")}
                  onChange={handleSkillsChange}
                />
              }
              label="HTML"
            />
            <FormControlLabel
              control={
                <Checkbox
                  value="css"
                  checked={skills.includes("css")}
                  onChange={handleSkillsChange}
                />
              }
              label="CSS"
            />
            <FormControlLabel
              control={
                <Checkbox
                  value="javascript"
                  checked={skills.includes("javascript")}
                  onChange={handleSkillsChange}
                />
              }
              label="JavaScript"
            />
            <FormControlLabel
              control={
                <Checkbox
                  value="react"
                  checked={skills.includes("react")}
                  onChange={handleSkillsChange}
                />
              }
              label="React"
            />
          </FormGroup>
          <FormHelperText>Invalid Selection</FormHelperText>
        </FormControl>
      </Box>
    </Box>
  );
}
