import { Typography } from "@mui/material";

export default function MuiTypography() {
    return(
        <div>
            <Typography variant="h1">h1 heading</Typography>
            <Typography variant="h2">h2 heading</Typography>
            <Typography variant="h3">h3 heading</Typography>
            <Typography variant="h4" component="h1" gutterBottom>h4 heading</Typography>
            <Typography variant="h5">h5 heading</Typography>
            <Typography variant="h6">h6 heading</Typography>

            <Typography variant="subtitle1">Subtitle 1</Typography>
            <Typography variant="subtitle2">Subtitle 1</Typography>
            
            <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium nisi vel voluptatibus tempore eveniet. Nemo, necessitatibus! Quae eligendi quam sint commodi numquam sunt exercitationem omnis tenetur, assumenda adipisci fugiat corporis!</Typography>
            <Typography variant="body2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quia pariatur recusandae sed, molestiae dolore sapiente qui nemo vero veniam expedita? Nesciunt inventore adipisci repellat nostrum commodi numquam sed esse.</Typography>
        </div>
    )
}