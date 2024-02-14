import { Button, Card, CardActions, CardContent, CardHeader, Typography } from "@mui/material";
import React from "react";


const SimpoleCard = () => {
    return <Card variant="" sx={{width:"320px"}}>
        <CardHeader title="Berger and Pizza House" subheader="July 22,2023">           
        </CardHeader>
        <CardContent>
            <Typography>
            Lorem Ipsum is simply dummy texndustry's ypetypesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
            </Typography>
        </CardContent>
        <CardActions>
            <Button variant="outlined" size="small">submit</Button>
        </CardActions>


    </Card>
}

export default SimpoleCard