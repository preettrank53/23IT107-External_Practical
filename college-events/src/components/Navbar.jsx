import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import EventIcon from '@mui/icons-material/Event';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <EventIcon sx={{ mr: 2 }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          College Events
        </Typography>
        <Box>
          <Button color="inherit" component={RouterLink} to="/">
            Home
          </Button>
          <Button color="inherit" component={RouterLink} to="/events">
            Events
          </Button>
          <Button color="inherit" component={RouterLink} to="/create-event">
            Create Event
          </Button>
          <Button color="inherit" component={RouterLink} to="/login">
            Login
          </Button>
          <Button color="inherit" component={RouterLink} to="/register">
            Register
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 