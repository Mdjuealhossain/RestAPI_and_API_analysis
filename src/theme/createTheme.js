
// for button start here

import { createTheme } from "@mui/material";



export const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: ({theme}) =>( {
                padding:"9px",
                fontSize:"12px",
                fontFamily:"auto",
                borderRadius:"8px"
                }),
                text:({theme})=>({
                  backgroundColor:"transparent",
                  border:"none",
                  margin:"0",
                  padding:"0",
                }),
                textPrimary:({theme})=>({
                    color:theme.palette.success.main
                }),
                textSecondary:({theme})=>({
                    color:theme.palette.primary.main
                }),
                textSuccess:({theme})=>({
                    color:theme.palette.warning.dark
                }),

                outlined: ({theme}) => ({
                  border:"1px solid",
                  borderColor:theme.palette.grey[400]
                }),
               outlinedSecondary:({theme})=>({
               color:theme.palette.error.main,
               borderColor:theme.palette.error.main,
               })
            }

        }
    },
})
// for button end here