import { useState } from "react";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import ShuffleRoundedIcon from "@mui/icons-material/ShuffleRounded";
import FastRewindRounded from "@mui/icons-material/FastRewindRounded";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import PauseRounded from "@mui/icons-material/PauseRounded";
import FastForwardRounded from "@mui/icons-material/FastForwardRounded";
import LoopRoundedIcon from "@mui/icons-material/LoopRounded";

import reptile from "../images/contemplative-reptile.jpg";


const   MusicCard = ({channel, myObj}) => {
    const [paused, setPaused] = useState(false);
    return (
        <div>
<Card
    variant="outlined"
    sx={{  p: 2,
    width: { xs: '100%', sm: 'auto' },
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' },
    alignItems: 'center',
    gap: 2,
    }}
>
<CardMedia
    component="img"
    width="100"
    height="100"
    src={reptile}
    sx={{    width: { xs: '100%', sm: 100 },
    }}
/>
<Stack direction="column" sx={{ alignItems: 'center' }} spacing={1} useFlexGap>
    <div>
        <Typography sx={{ color: 'text.primary', fontWeight: 'semiBold' }}>
        Contemplative Reptile
        </Typography>
        <Typography variant="h6">
    {channel}
</Typography>

<Typography>
    {myObj?.username}
</Typography>

<Typography>
    {myObj?.age}
</Typography>
        <Typography
        variant="caption"
        sx={{ color: 'text.secondary', fontWeight: 'medium', textAlign: 'center', width: '100%' }}
    >
        Sounds of Nature
        </Typography>
    </div>
    <Stack direction="row" sx={{ alignItems: 'center' }} spacing={1} useFlexGap>
        <IconButton aria-label="Shuffle" disabled size="small">
        <ShuffleRoundedIcon fontSize="small" />
        </IconButton>
        <IconButton aria-label="Fast rewind" disabled size="small">
        <FastRewindRounded fontSize="small" />
    </IconButton>
    <IconButton
        aria-label={paused ? 'Play music' : 'Pause music'}
        onClick={() => setPaused((val) => !val)}
        sx={{ mx: 1 }}
    >
        {paused ? <PlayArrowRounded /> : <PauseRounded />}
    </IconButton>
    <IconButton aria-label="Fast forward" disabled size="small">
        <FastForwardRounded fontSize="small" />
    </IconButton>
    <IconButton aria-label="Loop music" disabled size="small">
        <LoopRoundedIcon fontSize="small" />
    </IconButton>
    </Stack>
</Stack>
</Card>

</div>

    );
}

export default MusicCard;
