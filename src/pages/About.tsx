import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Toolbar } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import VerifiedIcon from '@mui/icons-material/Verified';

const values = [
  {
    icon: <EmojiObjectsIcon fontSize="large" color="primary" />,
    title: 'Innovation',
    description: 'We stay ahead of technology trends to deliver cutting-edge solutions',
  },
  {
    icon: <TrackChangesIcon fontSize="large" color="primary" />,
    title: 'Precision',
    description: 'Every project is executed with meticulous attention to detail',
  },
  {
    icon: <PeopleIcon fontSize="large" color="primary" />,
    title: 'Collaboration',
    description: 'We work closely with clients to bring their visions to life',
  },
  {
    icon: <VerifiedIcon fontSize="large" color="primary" />,
    title: 'Excellence',
    description: 'We maintain the highest standards in everything we deliver',
  },
];

const About = () => {
  return (
    <Box>
      <Toolbar />
      {/* Hero Section */}
      <Box sx={{ py: 8, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h1" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            About Us
          </Typography>
          <Typography variant="h5" color="text.secondary" paragraph>
            We are a forward-thinking technology company dedicated to creating exceptional digital experiences that push the boundaries of what's possible in the modern web.
          </Typography>
        </Container>
      </Box>

      {/* Mission Section */}
      <Box sx={{ py: 8, backgroundColor: 'background.paper' }}>
        <Container maxWidth="md">
          <Typography variant="h2" component="h2" gutterBottom align="center" sx={{ fontWeight: 'bold' }}>
            Our Mission
          </Typography>
          <Typography variant="h6" align="center" color="text.secondary" paragraph>
            At Paragon Tech Solutions, we believe that technology should be an enabler, not a barrier. Our mission is to bridge the gap between innovative ideas and practical digital solutions that make a real impact. We specialize in creating web platforms, educational systems, and creative media solutions that not only meet current needs but anticipate future requirements.
          </Typography>
        </Container>
      </Box>

      {/* Values Section */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" component="h2" gutterBottom align="center" sx={{ fontWeight: 'bold' }}>
            Our Core Values
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {values.map((value) => (
              <Grid item key={value.title} xs={12} sm={6} md={3}>
                <Card sx={{ height: '100%', textAlign: 'center' }}>
                  <CardContent>
                    <Box sx={{ mb: 2 }}>{value.icon}</Box>
                    <Typography variant="h5" component="h3" gutterBottom>
                      {value.title}
                    </Typography>
                    <Typography color="text.secondary">
                      {value.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default About;