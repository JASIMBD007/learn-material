import { Button, ButtonGroup, IconButton, Stack,ToggleButtonGroup,ToggleButton } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

export default function MuiButton() {
    return(
       <Stack spacing={4}>
         <Stack spacing={2} direction='row'>
            <Button variant="text" href="https://www.google.com/">Text</Button>
            <Button variant="outlined">Text</Button>
            <Button variant="contained">Text</Button>
        </Stack>
       <Stack spacing={2} direction='row'>
        <Button variant="contained" color="primary">Primary</Button>
        <Button variant="contained" color="secondary">Secondary</Button>
        <Button variant="contained" color="error">Error</Button>
        <Button variant="contained" color="warning">Warning</Button>
        <Button variant="contained" color="info">Info</Button>
        <Button variant="contained" color="success">Success</Button>
        <Button variant="text" color="primary">Text</Button>
        <Button variant="outlined" color="secondary">Outlined</Button>
       </Stack>
       <Stack display="block" spacing={4} direction='row' >
        <Button variant="contained" size="small" >Small</Button>
        <Button variant="contained" size="medium" >Medium</Button>
        <Button variant="contained" size="large" >Large</Button>
       </Stack>
       <Stack spacing={2} direction='row'>
        <Button variant="contained" startIcon={<SendIcon/>} disableRipple onClick={()=>alert('clicked')}>Send</Button>
        <Button variant="contained" endIcon={<SendIcon/>} disableElevation>Send</Button>
        <IconButton aria-label="send" color="success" size="small">
            <SendIcon/>
        </IconButton>
       </Stack>
       <Stack direction='row'>
        <ButtonGroup 
        variant="contained" 
        orientation="vertical" 
        size="small" 
        color="secondary"
        aria-label="vertical contained secondary button group"
        >
        <Button onClick={()=>alert('left clicked')}>Left</Button>
        <Button >Center</Button>
        <Button >Right</Button>
        </ButtonGroup>
       </Stack>
       <Stack direction='row'>
        <ToggleButtonGroup aria-label="text-formatting">
            <ToggleButton value='bold'><FormatBoldIcon/></ToggleButton>
            <ToggleButton value='italic'><FormatItalicIcon/></ToggleButton>
            <ToggleButton value='underlined'><FormatUnderlinedIcon/></ToggleButton>
        </ToggleButtonGroup>

       </Stack>
       </Stack>
    )
}