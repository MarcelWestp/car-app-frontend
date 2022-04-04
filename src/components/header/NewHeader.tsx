import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Logo from "./../../res/img/logo.jpeg";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./../../state/index";
import { RootState } from "./../../state/reducers/index";
import { reducers } from "./../../state/reducers/index";

const NewHeader = () => {

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const user = useSelector((state: RootState) => state.user);

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const dispatch: any = useDispatch();

  const { logoutUser } = bindActionCreators(actionCreators, dispatch);

  const pages = [
    {
      title: "Become a host",
      url: "/signup",
    },
    {
      title: "Sign up",
      url: "/signup",
    },
    {
      title: "Login",
      url: "/login",
    },
  ];

  const settings = [
    {
      title: "Profile",
      url: "/profile",
      handler: undefined,
    },
    {
      title: "Become a host",
      url: "/hostacar",
      handler: undefined,
    },
    {
      title: "Logout",
      url: "/",
      handler: logoutUser,
    },
  ];

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <Link to="/" className="brand">
              <Box sx={{ display: "flex" }}>
                <Box sx={{ width: 50, height: 50 }}>
                  <img src={Logo} alt="Logo" />
                </Box>
                <h1>
                  <span>C</span>ar<span>D</span>ealer
                </h1>
              </Box>
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            {user === undefined && (
              <div>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {pages.map((page, index) => (
                    <Link to={page.url} key={index}>
                      <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{page.title}</Typography>
                      </MenuItem>
                    </Link>
                  ))}
                </Menu>
              </div>
            )}
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <Link to="/" className="brand">
              <Box sx={{ display: "flex" }}>
                <Box sx={{ width: 50, height: 50 }}>
                  <img src={Logo} alt="Logo" />
                </Box>
                <h1>
                  <span>C</span>ar<span>D</span>ealer
                </h1>
              </Box>
            </Link>
          </Typography>

          {user !== undefined && user.id === 0 ? (
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "right",
              }}
            >
              {pages.map((page, index) => (
                <Link to={page.url} key={index}>
                  <Button
                    key={page.title}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page.title}
                  </Button>
                </Link>
              ))}
            </Box>
          ) : (
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "right",
                marginRight: 6,
              }}
            >
              <Link to={settings[1].url}>
                <Button
                  key={settings[1].title}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {settings[1].title}
                </Button>
              </Link>
            </Box>
          )}

          {user !== undefined && user.id !== 0 && (
            <Box sx={{ flexGrow: 0 }}>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting, index) => (
                  <Link to={setting.url} key={index}>
                    <MenuItem onClick={setting.handler} key={setting.title}>
                      <Typography textAlign="center">
                        {setting.title}
                      </Typography>
                    </MenuItem>
                  </Link>
                ))}
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NewHeader;
