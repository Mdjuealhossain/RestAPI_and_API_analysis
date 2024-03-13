import { typography } from "@/app/ThemingContainet/typography";
import { red } from "@mui/material/colors";

export const components = {
    MuiCard: {
        styleOverrides: {
            root: ({ theme, ownerState }) => ({
                backgroundColor: theme.palette.grey[400],
                color: theme.palette.common.black,
                boxShadow: ownerState.variant === "custom" ? theme.shadows[1] : ownerState.variant === "custom2" ? theme.shadows[2] : ownerState.variant === "custom3" ? theme.shadows[3] : theme.shadows[4],
            }

            )

        }

    },
    MuiCardHeader: {
        styleOverrides: {
            root: ({ theme }) => ({
                padding: "18px"
            }),
            content: ({ theme }) => ({
                flex: " auto"
            }),
            subheader: ({ theme }) => ({
                color: theme.palette.grey[600]
            }),
            avatar: ({ theme }) => ({
                marginRight: 20
            }),
            action: ({ theme }) => ({
                flex: '0 0 auto',
                alignSelf: 'center',
                marginTop: -18,
                marginRight: -10,
                marginBottom: -2
            }),


        },

    },
    MuiAvatar: {
        styleOverrides: {
            root: ({ theme, ownerState }) => ({
                width: 50,
                height: 50,
                fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                lineHeight: 1,

            }),
            colorDefault: ({ theme }) => ({
                backgroundColor: theme.palette.grey[600],
                color: theme.palette.grey[300]
            })
        }
    },

    MuiCardActions: {
        styleOverrides: {
            root: ({ theme }) => ({
                padding: "10px",
            })
        }
    },

    MuiCardMedia: {
        styleOverrides: {
            root: ({ theme }) => ({
                with: "30px"
            }),
            media: ({ theme }) => ({

            })
        }
    },

    MuiCardContent: {
        styleOverrides: {
            root: ({ theme }) => ({
                padding: " 5px 18px 2px 18px",

            })
        }
    },

    MuiButton: {

        styleOverrides: {
            root: ({ theme, ownerState }) => ({
                minWidth: 64,
                padding: '6px 20px',
                borderRadius: "5px"

            }),
            outlined: ({ theme }) => ({
                color: theme.palette.common.black,
                boxShadow: theme.shadows[5]
            }),
            outlinedSizeSmall: ({ theme }) => ({
                padding: '6px 18px',
            })

        }
    },
    MuiButtonGroup: {
        styleOverrides: {
            root: ({ theme, ownerState }) => ({
                borderRadius: 11
            }),

            outlined: ({ theme }) => ({
                boxShadow: theme.shadows[0]
            }),
            contained: ({ theme }) => ({
                boxShadow: theme.shadows[0]
            }),
            vertical: ({ theme }) => ({
                flexDirection: 'column'
            }),
            grouped: ({ theme }) => ({
                minWidth: 80
            }),
            groupedVertical: ({ theme }) => ({
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
                borderBottomRightRadius: 10,
                borderBottomLeftRadius: 10
            }),
            groupedHorizontal: ({ theme }) => ({
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 11,
                borderTopRightRadius: 11,
                borderBottomRightRadius: 0
            })
        }
    },


    MuiTypography: {
        styleOverrides: {
            root: ({ theme }) => ({
                margin: "1px"
            }),
            body1: ({ theme }) => ({
                ...theme.typography.body1
            })
        }
    },
    MuiIconButton: {
        styleOverrides: {
            root: ({ theme }) => ({
                color: theme.palette.grey[700]


            }),
           
        }
    }

}