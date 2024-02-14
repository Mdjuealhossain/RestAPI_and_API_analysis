import { Box, Button, ButtonGroup } from "@mui/material";
import React from "react";


const BtnGroup = () => {
    return (
        <Box sx={{
            display: "flex", '& > *': {
                m: 1,
            },
        }}>
            <ButtonGroup  orientation="vertical" >
                <Button >one</Button>
                <Button>two</Button>
                <Button>three</Button>
            </ButtonGroup>
            <ButtonGroup  orientation="vertical" variant="contained" size="small">
                <Button >one</Button>
                <Button>two</Button>
                <Button>three</Button>
            </ButtonGroup>
            <ButtonGroup  orientation="vertical" variant="text">
                <Button >one</Button>
                <Button>two</Button>
                <Button>three</Button>
            </ButtonGroup>
        </Box>
    )
}
export default BtnGroup