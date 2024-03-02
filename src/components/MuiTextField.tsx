import { Stack, TextField } from "@mui/material";

export default function MuiTextField() {

    return(
        <Stack spacing={4}>
            <Stack direction='row' spacing={2}>
              <TextField label='Name' variant="standard"/>
              <TextField label="Name" variant="outlined"/>
              <TextField label="Name" variant="filled"/>
            </Stack>
            <Stack spacing={4} direction="row">
                <TextField label="Small secondary" size="small" color="secondary"/>
            </Stack>
            <Stack spacing={4} direction="row">
                <TextField label="Form Input" required/>
                <TextField label="Password" type="password" helperText="Do not share password" disabled/>
                <TextField label="Read Only"  inputProps={{readOnly:true}}/>
            </Stack>
        </Stack>
    )
}