
"use client"
import { Button, Stack } from "@mui/material";
import React from "react";



const MUI = () => {

    return (
        <Stack direction="row" spacing={2}>
            <Button variant="secondary">TextPrimary</Button>
            <Button variant="contained" color="success">containedSecondary</Button>
            <Button variant="outlined" color="secondary">outlinedsuccess</Button>
            <Button variant="contained" color="warning">containedSmall</Button>

        </Stack>
    )
}
export default MUI