import { Container, Typography, Box, Button, Grid, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import EventIcon from '@mui/icons-material/Event';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <EventIcon sx={{ fontSize: 60, mb: 2 }} />
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to College Events
          </Typography>
          <Typography variant="h5" paragraph>
            Discover, Create, and Manage College Events All in One Place
          </Typography>
          <Box sx={{ mt: 4 }}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              onClick={() => navigate('/events')}
              sx={{ mr: 2 }}
            >
              Browse Events
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              size="large"
              onClick={() => navigate('/create-event')}
            >
              Create Event
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" align="center" gutterBottom>
          Features
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
              <Typography variant="h5" gutterBottom>
                Create Events
              </Typography>
              <Typography>
                Easily create and manage various types of college events with our
                intuitive interface.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
              <Typography variant="h5" gutterBottom>
                Search & Discover
              </Typography>
              <Typography>
                Find events that interest you with our powerful search and filter
                capabilities.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
              <Typography variant="h5" gutterBottom>
                Manage Events
              </Typography>
              <Typography>
                Edit, update, or delete events as needed. Keep your event
                information up to date.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Call to Action */}
      <Box sx={{ bgcolor: 'grey.100', py: 8 }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>
            Ready to Get Started?
          </Typography>
          <Typography variant="h6" color="text.secondary" paragraph>
            Join our community and start managing your college events today.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => navigate('/register')}
          >
            Sign Up Now
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 