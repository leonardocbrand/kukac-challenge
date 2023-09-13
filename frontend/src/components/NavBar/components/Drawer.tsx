import { Link } from 'react-router-dom'
import logo from '../../../assets/logo.png'
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer,
  useTheme
} from '@mui/material'

type Props = {
  isOpenDrawer: boolean
  handleDrawerToggle: () => void
  navItems: {name: string, path:string }[]
  window?: () => Window
}

const drawerWidth = 240

export default function CustomDrawer({
  handleDrawerToggle,
  navItems,
  window,
  isOpenDrawer
}: Props) {
  const container =
    window !== undefined ? () => window().document.body : undefined

  const theme = useTheme();

  return (
    <Drawer
      container={container}
      variant="temporary"
      open={isOpenDrawer}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true
      }}
      sx={{
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
      }}
    >
      <Box 
        onClick={handleDrawerToggle} 
        sx={{ textAlign: 'center', bgcolor: theme.palette.primary.main, minHeight: '100vh' }}
      >
        <Link to="/">
          <Box component="img" src={logo} sx={{ my: 2, width: '150px' }} />
        </Link>
        <Divider />
        <List>
          {navItems.map((item) => (
            <ListItem key={item.name} component={Link} to={item.path} >
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText 
                  primary={item.name} 
                  primaryTypographyProps={{color: 'white', fontWeight: 600}} 
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  )
}