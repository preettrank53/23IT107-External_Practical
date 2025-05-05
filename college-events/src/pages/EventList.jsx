import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  TextField,
  Box,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { toast } from 'react-toastify';

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
    image: 'https://source.unsplash.com/random/800x600/?sports',
  },
  {
    id: 2,
    title: 'Tech Workshop',
    description: 'Learn about the latest technologies in this hands-on workshop.',
    date: '2024-04-20',
    time: '14:00',
    location: 'Computer Lab',
    type: 'Workshop',
    image: 'https://source.unsplash.com/random/800x600/?technology',
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

const EventList = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState(mockEvents);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedEvent(null);
  };

  const handleDelete = (eventId) => {
    setEvents(events.filter((event) => event.id !== eventId));
    toast.success('Event deleted successfully!');
  };

  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ mb: 4 }}>
        <TextField
          fullWidth
          label="Search Events"
          variant="outlined"
          value={searchTerm}
          onChange={handleSearch}
          sx={{ mb: 2 }}
        />
      </Box>

      <Grid container spacing={3}>
        {filteredEvents.map((event) => (
          <Grid item xs={12} sm={6} md={4} key={event.id}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="200"
                image={event.image}
                alt={event.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {event.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {event.description.substring(0, 100)}...
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Date: {event.date}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Time: {event.time}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Location: {event.location}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Type: {event.type}
                </Typography>
              </CardContent>
              <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between' }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleEventClick(event)}
                >
                  View Details
                </Button>
                <Box>
                  <IconButton
                    color="primary"
                    onClick={() => navigate(`/edit-event/${event.id}`)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    color="error"
                    onClick={() => handleDelete(event.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="md" fullWidth>
        {selectedEvent && (
          <>
            <DialogTitle>{selectedEvent.title}</DialogTitle>
            <DialogContent>
              <Box sx={{ mt: 2 }}>
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }}
                />
                <Typography variant="body1" sx={{ mt: 2 }}>
                  {selectedEvent.description}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                  Date: {selectedEvent.date}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Time: {selectedEvent.time}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Location: {selectedEvent.location}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Type: {selectedEvent.type}
                </Typography>
              </Box>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog}>Close</Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Container>
  );
};

export default EventList; 