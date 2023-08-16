import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { alpha, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#6e57e0",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

export default function NewPost() {
  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: alpha(theme.palette.common.white, 0.15),
          padding: "2px",
          borderRadius: "30px",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)",
        }}
      >
        <AccountCircle sx={{ fontSize: 40, color: "#FFF", mr: 1, my: 0.5 }} />
        <TextField
          id="input-with-sx"
          label="What's happening"
          variant="standard"
          InputProps={{
            sx: {
              color: "#fff",
              width: "42vw",
              "&::placeholder": {
                color: "#fff",
              },
              "&:focus": {
                borderColor: theme.palette.primary.main,
              },
            },
          }}
        />
      </Box>
    </Box>
  );
}
