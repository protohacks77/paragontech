import React from 'react';
import { Box, Container, Typography, Grid, Card, CardMedia, CardContent, CardActions, Button, Toolbar } from '@mui/material';

const projects = [
  {
    title: 'ExamsideMan',
    category: 'Education',
    url: 'https://examsidemann.org',
    image: 'https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Comprehensive online examination platform with advanced analytics and secure test delivery.',
  },
  {
    title: 'Mwenezi Pay Fees',
    category: 'Fintech',
    url: 'https://mwenezipayfees.netlify.app',
    image: 'https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Modern school fee payment platform with multiple payment gateways and receipt management.',
  },
  {
    title: 'Prominent Carpentry',
    category: 'Business',
    url: 'https://prominentcarpentry.netlify.org',
    image: 'https://images.pexels.com/photos/162551/carpenter-wood-hammer-wooden-162551.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Professional carpentry business website with portfolio showcase and service booking.',
  },
  {
    title: 'ScanBiz App',
    category: 'Tech',
    url: 'https://scanbizapp.netlify.app',
    image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'QR code business card solution with digital contact sharing and analytics.',
  },
];

const Portfolio = () => {
  return (
    <Box>
      <Toolbar />
      {/* Hero Section */}
      <Box sx={{ py: 8, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h1" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            Portfolio
          </Typography>
          <Typography variant="h5" color="text.secondary" paragraph>
            Explore our collection of innovative projects that showcase our expertise across various industries and technologies.
          </Typography>
        </Container>
      </Box>

      {/* Projects Grid */}
      <Box sx={{ py: 8, backgroundColor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {projects.map((project) => (
              <Grid item key={project.title} xs={12} sm={6} md={4}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={project.image}
                    alt={project.title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {project.title}
                    </Typography>
                    <Typography>
                      {project.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" component="a" href={project.url} target="_blank" rel="noopener noreferrer">
                      View Project
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Portfolio;