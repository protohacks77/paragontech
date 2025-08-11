import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Card, CardContent, Container, Grid, Typography, Toolbar, CardActions } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import SecurityIcon from '@mui/icons-material/Security';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import StarIcon from '@mui/icons-material/Star';

const services = [
  {
    icon: <FlashOnIcon fontSize="large" color="primary" />,
    title: 'Web Development',
    description: 'Modern, responsive websites built with cutting-edge technologies',
  },
  {
    icon: <SecurityIcon fontSize="large" color="primary" />,
    title: 'School Platforms',
    description: 'Complete educational management systems and learning platforms',
  },
  {
    icon: <RocketLaunchIcon fontSize="large" color="primary" />,
    title: 'Creative Media',
    description: 'Branding, photography, and multimedia content creation',
  },
];

const projects = [
  { name: 'ExamsideMan', url: 'https://examsidemann.org', category: 'Education' },
  { name: 'Mwenezi Pay Fees', url: 'https://mwenezipayfees.netlify.app', category: 'Fintech' },
  { name: 'Prominent Carpentry', url: 'https://prominentcarpentry.netlify.org', category: 'Business' },
  { name: 'ScanBiz App', url: 'https://scanbizapp.netlify.app', category: 'Tech' },
];

const Home = () => {
  return (
    <Box>
      {/* Add Toolbar to offset content due to fixed AppBar */}
      <Toolbar />

      {/* Hero Section */}
      <Box sx={{
        minHeight: 'calc(100vh - 64px)', // 64px is the standard AppBar height
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        py: 8
      }}>
        <Container maxWidth="md">
          <Typography variant="h1" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            PARAGON
          </Typography>
          <Typography variant="h3" component="h2" gutterBottom>
            TECH SOLUTIONS
          </Typography>
          <Typography variant="h5" color="text.secondary" paragraph>
            Next-generation technology solutions that transform ideas into digital reality. We craft exceptional web experiences and innovative platforms.
          </Typography>
          <Box sx={{ mt: 4, display: 'flex', gap: 2, justifyContent: 'center' }}>
            <Button component={Link} to="/services" variant="contained" size="large" endIcon={<ArrowForwardIcon />}>
              Explore Services
            </Button>
            <Button component={Link} to="/portfolio" variant="outlined" size="large">
              View Portfolio
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Services Preview */}
      <Box sx={{ py: 8, backgroundColor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Typography variant="h2" component="h2" gutterBottom align="center" sx={{ fontWeight: 'bold' }}>
            Our Services
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            We deliver cutting-edge solutions across multiple domains.
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
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
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Featured Projects */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" component="h2" gutterBottom align="center" sx={{ fontWeight: 'bold' }}>
            Featured Projects
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {projects.map((project) => (
              <Grid item key={project.name} xs={12} sm={6} md={3}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                      <StarIcon color="primary" />
                       <Typography sx={{  fontSize: '0.8rem',  borderRadius: '16px', padding: '0.25em 0.75em' }}>
                        {project.category}
                      </Typography>
                    </Box>
                    <Typography variant="h6" component="h3" gutterBottom>
                      {project.name}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button component="a" href={project.url} target="_blank" rel="noopener noreferrer" size="small">
                      Visit Project
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ py: 8, backgroundColor: 'background.paper' }}>
        <Container maxWidth="md">
          <Typography variant="h2" component="h2" gutterBottom align="center" sx={{ fontWeight: 'bold' }}>
            Ready to Build the Future?
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Let's transform your vision into a digital masterpiece. Get started with a free consultation.
          </Typography>
          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
            <Button component={Link} to="/contact" variant="contained" size="large">
              Get Started Today
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;