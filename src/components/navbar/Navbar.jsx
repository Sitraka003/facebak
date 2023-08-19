import FlexBetween from "../../styles/FlexBetween";
import {useState} from "react";
import {
  Box,
  IconButton,
  InputBase,
  Typography,
  Select,
  MenuItem,
  FormControl,
  useTheme,
  useMediaQuery,
  Badge,
} from "@mui/material";
import {
  Search,
  Message,
  DarkMode,
  LightMode,
  Notifications,
  Help,
  Menu,
  Close,
  AccountCircle,
} from "@mui/icons-material";
import {useDispatch} from "react-redux";
import {setMode, setLogout} from "../../state/state";
import {useNavigate} from "react-router-dom";

const Navbar = () => {
  const [setAnchorEl] = useState(null);
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  /* const user = useSelector((state) => state.user); */
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const menuId = "primary-search-account-menu";

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const primaryLight = theme.palette.primary.light;
  const alt = theme.palette.background.alt;

  /* A fetcth avec la base de donnée */
  const fullName = "Fiantso Harena";

  return (
    <FlexBetween
      padding="1rem 6%"
      backgroundColor={alt}
      boxShadow="0 15px 24px rgba(0, 0, 0, 0.1);"
    >
      <FlexBetween gap="1.75rem">
        <Typography
          fontWeight="bold"
          fontSize="clamp(1rem, 2rem, 2.25rem)"
          color="#6e57e0"
          onClick={() => navigate("/home")}
          sx={{
            "&:hover": {
              color: primaryLight,
              cursor: "pointer",
            },
          }}
        >
          StiveBook
        </Typography>
        {isNonMobileScreens && (
          <FlexBetween
            backgroundColor={neutralLight}
            borderRadius="9px"
            gap="3rem"
            padding="0.1rem 1.5rem"
          >
            <InputBase placeholder="Search..." />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
        )}
      </FlexBetween>

      {/* DESKTOP NAV */}
      {isNonMobileScreens ? (
        <FlexBetween gap="2rem">
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <DarkMode sx={{fontSize: "25px"}} />
            ) : (
              <LightMode sx={{color: dark, fontSize: "25px"}} />
            )}
          </IconButton>
          <Message sx={{fontSize: "25px"}} />
          <Notifications sx={{fontSize: "25px"}} />
          <Help sx={{fontSize: "25px"}} />
          <FormControl variant="standard" value={fullName}>
            <Select
              value={fullName}
              sx={{
                "backgroundColor": neutralLight,
                "width": "150px",
                "borderRadius": "0.25rem",
                "p": "0.25rem 1rem",
                "& .MuiSvgIcon-root": {
                  pr: "0.25rem",
                  width: "3rem",
                },
                "& .MuiSelect-select:focus": {
                  backgroundColor: neutralLight,
                },
              }}
              input={<InputBase />}
            >
              <MenuItem value={fullName}>
                <Typography>{fullName}</Typography>
              </MenuItem>
              <MenuItem onClick={() => dispatch(setLogout())}>Log Out</MenuItem>
            </Select>
          </FormControl>
        </FlexBetween>
      ) : (
        <IconButton onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}>
          <Menu />
        </IconButton>
      )}

      {/* MOBILE NAV */}
      {!isNonMobileScreens && isMobileMenuToggled && (
        <Box
          position="fixed"
          right="0"
          bottom="0"
          height="100%"
          zIndex="10"
          maxWidth="500px"
          minWidth="300px"
          backgroundColor={background}
        >
          {/* CLOSE ICON */}
          <Box display="flex" justifyContent="flex-end" p="1rem">
            <IconButton onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}>
              <Close />
            </IconButton>
          </Box>

          {/* MENU ITEMS */}
          <FlexBetween
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="3rem"
          >
            <IconButton onClick={() => dispatch(setMode())} sx={{fontSize: "20px"}}>
              {theme.palette.mode === "dark" ? (
                <DarkMode sx={{fontSize: "20px", cursor: "pointer"}} />
              ) : (
                <LightMode sx={{color: dark, fontSize: "20px", cursor: "pointer"}} />
              )}
            </IconButton>
            <Badge badgeContent={1} color="error">
              <Message sx={{fontSize: "20px", cursor: "pointer"}} />
            </Badge>
            <Badge badgeContent={1} color="error">
              <Notifications sx={{fontSize: "20px", cursor: "pointer"}} />
            </Badge>
            <Help sx={{fontSize: "20px", cursor: "pointer"}} />
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            {/*  <FormControl variant="standard" value={fullName}>
              <Select
                value={fullName}
                sx={{
                  "backgroundColor": neutralLight,
                  "width": "150px",
                  "borderRadius": "0.25rem",
                  "p": "0.25rem 1rem",
                  "& .MuiSvgIcon-root": {
                    pr: "0.25rem",
                    width: "3rem",
                  },
                  "& .MuiSelect-select:focus": {
                    backgroundColor: neutralLight,
                  },
                }}
                input={<InputBase />}
              >
                <MenuItem value={fullName}>
                  <Typography>{fullName}</Typography>
                </MenuItem>
                <MenuItem onClick={() => dispatch(setLogout())}>Log Out</MenuItem>
              </Select>
            </FormControl> */}
          </FlexBetween>
        </Box>
      )}
    </FlexBetween>
  );
};

export default Navbar;
