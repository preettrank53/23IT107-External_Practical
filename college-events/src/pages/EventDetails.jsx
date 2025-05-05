import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Paper,
  Typography,
  Box,
  Button,
  Grid,
  CircularProgress,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// Mock data for demonstration
const mockEvents = [
  {
    id: 1,
    title: 'Annual Sports Day',
    description: 'Join us for a day of sports and fun activities!',
    date: '2024-04-15',
    time: '09:00',
    location: 'College Sports Complex',
    type: 'Sports',
    image: 'https://images.unsplash.com/photo-1702303208608-fc27f8826b9a?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    title: 'Tech Workshop',
    description: 'Learn about the latest technologies in this hands-on workshop.',
    date: '2024-04-20',
    time: '14:00',
    location: 'Computer Lab',
    type: 'Workshop',
    image: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=800&h=600&fit=crop',
  },
  {
    id: 3,
    title: 'Cultural Festival',
    description: 'Experience diverse cultures through music, dance, and art performances.',
    date: '2024-05-01',
    time: '16:00',
    location: 'College Auditorium',
    type: 'Cultural',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=600&fit=crop',
  },
  {
    id: 4,
    title: 'Career Fair',
    description: 'Connect with top companies and explore career opportunities.',
    date: '2024-05-10',
    time: '10:00',
    location: 'Main Hall',
    type: 'Academic',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
  },
  {
    id: 5,
    title: 'Science Exhibition',
    description: 'Showcase of innovative projects and scientific discoveries.',
    date: '2024-05-15',
    time: '11:00',
    location: 'Science Block',
    type: 'Academic',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop',
  },
  {
    id: 6,
    title: 'Music Concert',
    description: 'Annual music concert featuring student bands and solo performances.',
    date: '2024-05-20',
    time: '18:00',
    location: 'Open Air Theater',
    type: 'Cultural',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop',
  }
];

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const fetchEvent = () => {
      const foundEvent = mockEvents.find((e) => e.id === parseInt(id));
      setEvent(foundEvent);
      setLoading(false);
    };

    fetchEvent();
  }, [id]);

  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!event) {
    return (
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom>
            Event not found
          </Typography>
          <Button
            variant="contained"
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate('/events')}
            sx={{ mt: 2 }}
          >
            Back to Events
          </Button>
        </Paper>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Button
        variant="outlined"
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate('/events')}
        sx={{ mb: 3 }}
      >
        Back to Events
      </Button>
      <Paper elevation={3} sx={{ p: 4 }}>
        <img
          src={event.image}
          alt={event.title}
          style={{
            width: '100%',
            height: '400px',
            objectFit: 'cover',
            borderRadius: '8px',
          }}
        />
        <Typography variant="h4" component="h1" gutterBottom sx={{ mt: 3 }}>
          {event.title}
        </Typography>
        <Grid container spacing={3} sx={{ mt: 2 }}>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle1" color="text.secondary">
              Date
            </Typography>
            <Typography variant="body1" gutterBottom>
              {event.date}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle1" color="text.secondary">
              Time
            </Typography>
            <Typography variant="body1" gutterBottom>
              {event.time}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle1" color="text.secondary">
              Location
            </Typography>
            <Typography variant="body1" gutterBottom>
              {event.location}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle1" color="text.secondary">
              Event Type
            </Typography>
            <Typography variant="body1" gutterBottom>
              {event.type}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1" color="text.secondary">
              Description
            </Typography>
            <Typography variant="body1" paragraph>
              {event.description}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default EventDetails; 