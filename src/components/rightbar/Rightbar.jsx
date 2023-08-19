import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import {styled} from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import React from "react";
import "./rightbar.css";

function Rightbar() {
  const Item = styled(Paper)(({theme}) => ({
    "borderRadius": "10px",
    "boxShadow": "none",
    "backgroundColor": theme.palette.mode === "dark" ? "transparent" : "#fff",
    "padding": theme.spacing(1),
    "cursor": "pointer",
    "textAlign": "center",
    "color": theme.palette.text.secondary,
    ":hover": {backgroundColor: "rgba(255,255,255,0.1)"},
    "minWidth": 350,
  }));

  const message = `User you followed`;
  const messageTwo = `User you may know`;

  return (
    <Box sx={{flexGrow: 1, overflow: "hidden", px: 3}} className="rightbarContainer">
      <Stack
        justifyContent="center"
        alignItems="flex-start"
        ml="20%"
        mb="3%"
        color='theme.palette.mode === "dark" ? "secondary" : "#fff"'
      >
        <Typography>Contacts</Typography>
      </Stack>
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-end"
        spacing={1}
        mb="3%"
      >
        <Item
          sx={{
            my: 1,
            mx: "auto",
            p: 1,
          }}
        >
          <Stack spacing={2} direction="row" alignItems="center">
            <Avatar>W</Avatar>
            <Typography fontSize="14px">{message}</Typography>
          </Stack>
        </Item>
        <Item
          sx={{
            my: 1,
            mx: "auto",
            p: 1,
          }}
        >
          <Stack spacing={2} direction="row" alignItems="center">
            <Avatar>W</Avatar>
            <Typography fontSize="14px">{message}</Typography>
          </Stack>
        </Item>
      </Stack>

      {/*Users Suggestions*/}

      <Stack 
      justifyContent="center" 
      alignItems="flex-start" 
      ml="20%" 
      mb="3%" 
      color='theme.palette.mode === "dark" ? "secondary" : "#fff"'>
        <Typography>Suggestions</Typography>
      </Stack>
      <Stack direction="column" justifyContent="flex-start" alignItems="flex-end" spacing={1}>
        <Item
          sx={{
            my: 1,
            mx: "auto",
            p: 1,
          }}
        >
          <Stack spacing={2} direction="row" alignItems="center">
            <Avatar>W</Avatar>
            <Typography fontSize="14px">{messageTwo}</Typography>
          </Stack>
        </Item>
        <Item
          sx={{
            my: 1,
            mx: "auto",
            p: 1,
          }}
        >
          <Stack spacing={2} direction="row" alignItems="center">
            <Avatar>W</Avatar>
            <Typography fontSize="14px">{messageTwo}</Typography>
          </Stack>
        </Item>
      </Stack>
    </Box>
  );
}

export default Rightbar;
