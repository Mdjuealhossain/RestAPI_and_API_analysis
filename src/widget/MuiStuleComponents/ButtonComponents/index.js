"use client"
import React from "react"

import Button from "@mui/material/Button/Button"
import { Stack } from "@mui/material"
import { LoadingButton } from "@mui/lab"
import { Save } from "@mui/icons-material"

const ButtonCom=()=>{

return (
<Stack display="flex" direction="row" justifyContent="center" spacing={2}>
<LoadingButton variant="outlined" size="large" loading loadingIndicator="loading...">load</LoadingButton>
<LoadingButton variant="outlined" size="large" loading loadingPosition="end" endIcon={<Save />}>save</LoadingButton>

</Stack>
)

}
export default ButtonCom