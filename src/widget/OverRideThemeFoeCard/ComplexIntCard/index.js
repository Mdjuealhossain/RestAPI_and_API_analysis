import React from "react";


import { Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Input, Typography } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Avatar from '@mui/material/Avatar';

const ComplexInterCard = () => {
    return <Card sx={{ width: "345px" }}>
        <CardHeader
             avatar={
                <Avatar >
                  R
                </Avatar>
              }
            action={
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            }
            title="Cate and green environment"
            subheader="July 23, 2023"
        >
        </CardHeader>
        <CardMedia 
        component="img"
        height="192"
            image="https://cdna.artstation.com/p/assets/images/images/059/391/530/large/ivan-komarov-koma-red-cat-in-a-red-environment-everywhere-fire-ultra-realist-b878d14c-7c14-4974-b30f-21dba02030b9.jpg?1676297396"
            alt="Cat"

        ></CardMedia>
        <CardContent>
            <Typography variant="p">
                This impressive paella is a perfect party dish and a fun meal to cool.
            </Typography>
            <Typography> together with your guests. Add 1 cup of frozen peas along with the mussels,
                if you like.</Typography>
        </CardContent>
        <CardActions>
         <IconButton >
         <FavoriteIcon />
         </IconButton>
         <IconButton>
         <ShareIcon  />
         </IconButton>
         <IconButton>
            <ExpandMoreIcon />
         </IconButton>
        </CardActions>

    </Card>
}
export default ComplexInterCard