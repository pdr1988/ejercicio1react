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
import LandscapeIcon from '@mui/icons-material/Landscape';


const categorias = ['atma', 'samsung', 'sanyo']

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  return (
    <AppBar position="static" style={{ background: '#2E3B55' }} >
      <Container maxWidth="xl">
        <Toolbar disableGutters >
          <Link to={"/"}>
           <LandscapeIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color:'white'}} />
          
           <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 100,
              letterSpacing: '.1rem',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            MiTienda
          </Typography>
          </Link>
                  <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Categorias">
             
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 1, color: 'white', textDecoration: 'none', fontFamily: 'monospace',}}>
                CATEGORIAS
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
          <Cartwidget/>

      </Box>
     
          
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
