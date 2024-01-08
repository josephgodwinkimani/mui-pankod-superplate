import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { IconButton } from '@mui/material';
import PropTypes from 'prop-types';
import * as React from 'react';

function ToggleDarkMode({ darkMode, handleDarkModeToggle }) {
	return (
		<IconButton onClick={handleDarkModeToggle} color="inherit">
			{darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
		</IconButton>
	);
}

ToggleDarkMode.propTypes = {
	darkMode: PropTypes.bool.isRequired,
	handleDarkModeToggle: PropTypes.func.isRequired,
};

export default ToggleDarkMode;