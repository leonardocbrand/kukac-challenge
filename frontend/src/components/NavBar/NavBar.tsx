import { AppBar, Box, IconButton, Toolbar } from '@mui/material';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import CustomDrawer from './components/Drawer';
import theme from '../../themes/theme';
import logo from '../../assets/logo.png';

function NavBar() {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const navItems = [
    {
      name: 'Palindromo',
      path: '/palindrome',
    },
    {
      name: 'Troco',
      path: '/change',
    },
    {
      name: 'Veículos',
      path: '/vehicles',
    },
    {
      name: 'CEP',
      path: '/zipcode',
    },
  ];

  const handleDrawerToggle = () => {
    setIsOpenDrawer(!isOpenDrawer);
  };

  return (
    <Box sx={ { display: 'flex' } }>
      <AppBar component="nav">
        <Box sx={ { bgcolor: theme.palette.primary.main, minHeight: '5px' } } />
        <Toolbar>
          <IconButton
            color="primary"
            aria-label="open drawer"
            edge="start"
            onClick={ handleDrawerToggle }
            sx={ { mr: 2 } }
          >
            <MenuIcon color="secondary" />
          </IconButton>
          <Link to="/">
            <Box
              mr={ 4 }
              component="img"
              src={ logo }
              alt="Kukac logo"
              sx={ { display: { xs: 'none', sm: 'block' }, width: '150px' } }
            />
          </Link>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <CustomDrawer
          handleDrawerToggle={ handleDrawerToggle }
          isOpenDrawer={ isOpenDrawer }
          navItems={ navItems }
        />
      </Box>
    </Box>
  );
}

export default NavBar;
