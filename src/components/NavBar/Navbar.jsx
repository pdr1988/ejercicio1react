import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Cartwidget from '../Cartwidget/Cartwidget';
import { Link } from 'react-router-dom';
import BadgeUnstyled, { badgeUnstyledClasses } from '@mui/base/BadgeUnstyled';
import { styled } from '@mui/system';
import logo from '../img/logo.jpg'


const categorias = ['sega', 'nintendo', 'sony', 'portatil', 'otros']

const StyledBadge = styled(BadgeUnstyled)`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 40px;
  list-style: none;
  font-family: IBM Plex Sans, sans-serif;
  position: relative;
  display: inline-block;
  line-height: 1;

  & .${badgeUnstyledClasses.badge} {
    z-index: auto;
    min-width: 20px;
    height: 20px;
    padding: 0 6px;
    color: #fff;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    white-space: nowrap;
    text-align: center;
    background: #07f;
    border-radius: 10px;
    box-shadow: 0 0 0 1px #fff;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    opacity: 1;
    transition: opacity 0.2s ease-in-out;
  }

  & .${badgeUnstyledClasses.invisible} {
    opacity: 0;
    pointer-events: none;
  }
`;

const Navbar = ({count}) => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

 
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  return (
    <AppBar position="static" style={{ background: '#109DFA' }} >
      <Container maxWidth="xl">
        <Toolbar disableGutters >
          <Link to={"/"}>
            <img src={logo} alt="logo" />
          </Link>
        <Box sx={{ flexGrow: 0, ml:50 }}>
          <Tooltip title="Categorias" >
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 1, color: 'black', textDecoration: 'none', fontFamily: 'monospace', fontStyle: 'italic',}}>
              BUSCADOR
            </IconButton>
          </Tooltip> 
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {categorias.map((categoria) => (
                <MenuItem key={categoria} onClick={handleCloseUserMenu}>
                  <Link to={`/category/${categoria}`}> 
                    <Typography textAlign="center">{categoria}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
        </Box>
      <Box>
        <Link to={`/cart`} >
          <Cartwidget/>                       
        </Link>   
      </Box>
     
    </Toolbar>
  </Container>
  </AppBar>

  );
};
export default Navbar;
