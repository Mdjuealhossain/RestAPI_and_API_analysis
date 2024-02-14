
"use client"
import React from "react"

import {
    Avatar, AvatarGroup, Badge, Button, Card, CardActionArea, CardActions, CardContent, CardHeader,
    CardMedia, IconButton, Typography
} from "@mui/material"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MailIcon from '@mui/icons-material/Mail';
const CardCom = () => {

    return (
        // <Card variant="outlined">
        //     <CardContent>
        //         <Typography sx={{fontSize:"16"}} variant="" color="text.secondary" gutterBottom> Word of the Day</Typography>
        //         <Typography variant="h5" component="div" > This is businessy</Typography>
        //         <Typography color="text.secodary" > the name off my country is Bangladesh</Typography>
        //         <Typography variant="body2"> We are very proud of my country</Typography>
        //         <br></br>
        //         {"My name is Jueal"}
        //     </CardContent>
        //     <CardActions >
        //         <Button variant="contained" size="small" color="common">submit</Button>
        //     </CardActions>
        // </Card>

        // <Card >
        //    <CardActionArea  >
        //    <CardHeader avatar={
        //         <Avatar 

        //         variant="string"
        //         srcSet="https://static.toii.com/thumb/53110049.cms?width=1200&height=900"
        //         alt="Pizza and Burger"

        //       sx={{height:"50px",width:"50px"}}

        //         ></Avatar>
        //     }
        //         action={
        //             <IconButton aria-label="settings">
        //                 <MoreVertIcon />
        //             </IconButton>
        //         }
        //         title="Chickeen and Mutton Briany"
        //         subheader="July 20, 2023"
        //     />
        //     <CardMedia   
        //         component="img"
        //         height="200"   
        //         src="https://static.toiimg.com/thumb/53110049.cms?width=1200&height=900"
        //         alt="Mutton Brianny"
        //    >
        //     </CardMedia>
        //    </CardActionArea>



        // </Card>

        // <Avatar


        //     src="https://static.toiimg.com/tumb/53110049.cms?width=1200&height=900"
        //     alt="Pizza and Burger"
        //     sx={{ height: "70px", width: "70px"}}

        // >R</Avatar>


        // <AvatarGroup  >
        //     <Avatar src="https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-6/338312051_538452198374361_1665380908253105010_n.jpg?_nc_cat=109&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHaJAqyWR5MVlTI5iT69qb-mL3NVOy7QP6Yvc1U7LtA_lURbqznS8eaaeRL1Irs1cDyZc_5JKXZtcm5gb5gNNm2&_nc_ohc=zdrTNDtXYvUAX_9XM0k&_nc_ht=scontent.fdac135-1.fna&oh=00_AfB_VBEPqqkhuNG8JsKBYIW0Zx9fjxBaJGGXf43rqPX4Iw&oe=6497B3B" alt="Pete Dilam Ridoydani">J</Avatar>
        //     <Avatar src="https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-6/325309069_398775425793349_2715975927754602536_n.jpg?_nc_cat=110&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFSZYcmqZQkeh9bhEqVwkosCTGuDRijjxUJMa4NGKOPFfrE45jcAgn6W2_e1gGa5TofqwPoJSZpOyKq-sXKPIsK&_nc_ohc=jn0_KinVq94AX_n-YXP&_nc_ht=scontent.fdac135-1.fna&oh=00_AfA6IYbGGFcHn8wH1Mb3c9O8ngKkckq7b9-nXxGxkJ8k3Q&oe=649897D" alt="Pete Dilam Ridoydani">A</Avatar>
        //     <Avatar src="https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-6/340520208_735390788373178_408708487124294810_n.jpg?_nc_cat=111&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFUFlq8h3jGRv0S2mX8eK_V7CD2MeUk4vPsIPYx5STi817pq3bhAK0FnnXFpV6pnxHWcWCQj9TJkO7M-IYIXSe4&_nc_ohc=CtjFF1GrB3oAX_vWuag&_nc_ht=scontent.fdac135-1.fna&oh=00_AfDVs7njb-2ekAYWeHvlUeVkdyi7BBZWvIvTOOHh7mzNSg&oe=6498016" alt="Pete Dilam Ridoydani">K</Avatar>
        //     <Avatar src="https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-6/315900339_2003977809993193_2336011213858939227_n.jpg?_nc_cat=103&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEgUPji8JwNRSQY62upzUYhipgcvddBVD6KmBy910FUPoX8l6x_AtZX7Nuq8LaVwSIHexQ7cjWhw_P-aGxOEZW0&_nc_ohc=ZXwuNrsUfH8AX86t_UF&_nc_ht=scontent.fdac135-1.fna&oh=00_AfA827CNKGr12-SiiKGwgZXPwvCLsrDp576a3OsanF5UAA&oe=6496A8A" alt="Pete Dilam Ridoydani">L</Avatar>
        //     <Avatar src="https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-6/343424265_1178021499577416_4453412978882503727_n.jpg?_nc_cat=107&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeH-Y2rrmOJkl1uSco74yp7CvW4XXKfXR-O9bhdcp9dH47NYhT8-iTK-N_7Qz6q5XLBjBt53tDKPohSzVMCnkVHK&_nc_ohc=-XItVuYTMWsAX-ERFFd&_nc_ht=scontent.fdac135-1.fna&oh=00_AfDxgtZSJk5mdeHE_dQcePFGPVlPMt88PmiyIpmSNWX-Bg&oe=6497B88" alt="Pete Dilam Ridoydani">M</Avatar>
        //     <Avatar src="https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-6/338312051_538452198374361_1665380908253105010_n.jpg?_nc_cat=109&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHaJAqyWR5MVlTI5iT69qb-mL3NVOy7QP6Yvc1U7LtA_lURbqznS8eaaeRL1Irs1cDyZc_5JKXZtcm5gb5gNNm2&_nc_ohc=zdrTNDtXYvUAX_9XM0k&_nc_ht=scontent.fdac135-1.fna&oh=00_AfB_VBEPqqkhuNG8JsKBYIW0Zx9fjxBaJGGXf43rqPX4Iw&oe=6497B3B" alt="Pete Dilam Ridoydani">N</Avatar>            
        //     <Avatar src="https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-6/338312051_538452198374361_1665380908253105010_n.jpg?_nc_cat=109&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHaJAqyWR5MVlTI5iT69qb-mL3NVOy7QP6Yvc1U7LtA_lURbqznS8eaaeRL1Irs1cDyZc_5JKXZtcm5gb5gNNm2&_nc_ohc=zdrTNDtXYvUAX_9XM0k&_nc_ht=scontent.fdac135-1.fna&oh=00_AfB_VBEPqqkhuNG8JsKBYIW0Zx9fjxBaJGGXf43rqPX4Iw&oe=6497B3B" alt="Pete Dilam Ridoydani">O</Avatar>
        //     <Avatar src="https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-6/325309069_398775425793349_2715975927754602536_n.jpg?_nc_cat=110&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFSZYcmqZQkeh9bhEqVwkosCTGuDRijjxUJMa4NGKOPFfrE45jcAgn6W2_e1gGa5TofqwPoJSZpOyKq-sXKPIsK&_nc_ohc=jn0_KinVq94AX_n-YXP&_nc_ht=scontent.fdac135-1.fna&oh=00_AfA6IYbGGFcHn8wH1Mb3c9O8ngKkckq7b9-nXxGxkJ8k3Q&oe=649897D" alt="Pete Dilam Ridoydani">P</Avatar>
        //     <Avatar src="https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-6/340520208_735390788373178_408708487124294810_n.jpg?_nc_cat=111&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFUFlq8h3jGRv0S2mX8eK_V7CD2MeUk4vPsIPYx5STi817pq3bhAK0FnnXFpV6pnxHWcWCQj9TJkO7M-IYIXSe4&_nc_ohc=CtjFF1GrB3oAX_vWuag&_nc_ht=scontent.fdac135-1.fna&oh=00_AfDVs7njb-2ekAYWeHvlUeVkdyi7BBZWvIvTOOHh7mzNSg&oe=64980160" alt="Pete Dilam Ridoydani">Q</Avatar>
        // </AvatarGroup>

<Badge overlap="circular" variant="dot"  anchorOrigin={{horizontal:"left",vertical:"top"}} badgeContent={999} color="secondary" component="div" max={300}>
<MailIcon color="action"/>
   
</Badge>

    )
}

export default CardCom