import LocationOnIcon from '@mui/icons-material/LocationOn';
import MenuIcon from '@mui/icons-material/Menu';
import MovieIcon from '@mui/icons-material/Movie';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import ToggleDarkMode from "../components/darkmode";


const drawerWidth = 240;

function ResponsiveDrawer({ children, darkMode, handleDarkModeToggle }) {
	const { t } = useTranslation();

	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawer = (

		<div>
			<Toolbar />
			<Divider />
			<List>
				<Link to="/" style={{ textDecoration: 'none', color: 'inherit', }}>
					<ListItem disablePadding>

						<ListItemButton>
							<ListItemIcon>
								<MovieIcon />
							</ListItemIcon>
							<ListItemText primary={t('episodes')} />
						</ListItemButton>

					</ListItem>
				</Link>
				<Link to="/characters" style={{ textDecoration: 'none', color: 'inherit', }}>
					<ListItem disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<SupervisedUserCircleIcon />
							</ListItemIcon>
							<ListItemText primary={t('characters')} />
						</ListItemButton>
					</ListItem>
				</Link>
				<Link to="/locations" style={{ textDecoration: 'none', color: 'inherit', }}>
					<ListItem disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<LocationOnIcon />
							</ListItemIcon>
							<ListItemText primary={t('locations')} />
						</ListItemButton>
					</ListItem>
				</Link>
			</List>
		</div>

	);

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar
				position="fixed"
				sx={{
					width: { sm: `calc(100% - ${drawerWidth}px)` },
					ml: { sm: `${drawerWidth}px` },
				}}
			>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: 'none' } }}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						Ricky and Morty
					</Typography>
					<ToggleDarkMode darkMode={darkMode} handleDarkModeToggle={handleDarkModeToggle} />
				</Toolbar>
			</AppBar>
			<Box
				component="nav"
				sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
				aria-label="mailbox folders"
			>
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Drawer
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
					}}
				>
					{drawer}
				</Drawer>
				<Drawer
					variant="permanent"
					sx={{
						display: { xs: 'none', sm: 'block' },
						'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
					}}
					open
				>
					{drawer}
				</Drawer>
			</Box>
			<Box
				component="main"
				sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
			>
				<Toolbar />
				<Typography paragraph>
					{children}
				</Typography>
			</Box>
		</Box>
	);
}

ResponsiveDrawer.propTypes = {
	children: PropTypes.node.isRequired,
	darkMode: PropTypes.bool.isRequired,
	handleDarkModeToggle: PropTypes.func.isRequired,
};


export default ResponsiveDrawer;