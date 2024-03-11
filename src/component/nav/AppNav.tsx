import { Box, Container, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import PJMLogo from '../../../public/images/PJM-Logo.png';
import '../../assets/AppNav.css';

export default function AppNav() {
  return (
    <>
      <AppBar>
        <Container sx={{ '&.MuiContainer-root': { maxWidth: '100%' } }}>
          <Toolbar
            disableGutters
            sx={{ display: 'flex', justifyContent: 'space-between' }}
          >
            {' '}
            <Box sx={{ display: 'flex' }} component={Link} to='/'>
              <img src={PJMLogo} alt='PJM Logo' className='logo' />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
