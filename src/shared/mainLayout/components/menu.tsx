import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import { HOME_PATH, LOGIN_PATH } from '../../../config/routes';
import { useDispatch } from 'react-redux';
import { AuthenticationAction } from '../../../redux/actions/auth.actions';
import { Divider } from '@mui/material';

export default function BasicMenu() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogoClicked = () => {
        navigate(HOME_PATH);
    }

    const handleLogout = () => {
        dispatch({type: AuthenticationAction.LOGOUT})
        navigate(LOGIN_PATH)
    }
      

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                Menu
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                
                <Divider />
                <MenuItem onClick={handleLogout}>Sair</MenuItem>
            </Menu>
        </div>
    );
}
