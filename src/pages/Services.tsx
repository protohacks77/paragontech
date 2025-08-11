import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardActions, Button, Toolbar } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import BrushIcon from '@mui/icons-material/Brush';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import DescriptionIcon from '@mui/icons-material/Description';
import SmartphoneIcon from '@mui/icons-material/Smartphone';

const services = [
  {
    icon: <CodeIcon fontSize="large" color="primary" />,
    title: 'Web Development',
    description: 'Modern, responsive websites and web applications built with cutting-edge technologies.',
  },
  {
    icon: <SchoolIcon fontSize="large" color="primary" />,
    title: 'School Tech Platforms',
    description: 'Complete educational management systems and learning platforms for modern institutions.',
  },
  {
    icon: <BrushIcon fontSize="large" color="primary" />,
    title: 'Creative Media',
    description: 'Branding, photography, and multimedia content creation services.',
  },
  {
    icon: <CameraAltIcon fontSize="large" color="primary" />,
    title: 'Photography Services',
    description: 'Professional photography for events, products, and corporate needs.',
  },
  {
    icon: <DescriptionIcon fontSize="large" color="primary" />,
    title: 'Document Solutions',
    description: 'Professional document creation and management services.',
  },
  {
    icon: <SmartphoneIcon fontSize="large" color="primary" />,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
  },
];

const Services = () => {
  return (
    <Box>
      <Toolbar />
      {/* Hero Section */}
      <Box sx={{ py: 8, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h1" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            Our Services
          </Typography>
          <Typography variant="h5" color="text.secondary" paragraph>
            Comprehensive technology solutions designed to elevate your business and bring your digital vision to life.
          </Typography>
        </Container>
      </Box>

      {/* Services Grid */}
      <Box sx={{ py: 8, backgroundColor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {services.map((service) => (
              <Grid item key={service.title} xs={12} sm={6} md={4}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Box sx={{ mb: 2 }}>{service.icon}</Box>
                    <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                      {service.title}
                    </Typography>
                    <Typography color="text.secondary">
                      {service.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Learn More</Button>
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

export default Services;