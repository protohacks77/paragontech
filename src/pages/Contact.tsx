import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, TextField, Button, Toolbar, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SendIcon from '@mui/icons-material/Send';

const contactInfo = [
  {
    icon: <EmailIcon color="primary" />,
    primary: 'Email',
    secondary: 'paragontech@gmail.com',
    href: 'mailto:paragontech@gmail.com',
  },
  {
    icon: <PhoneIcon color="primary" />,
    primary: 'Phone',
    secondary: '+263 782 456 936',
    href: 'tel:+263782456936',
  },
  {
    icon: <LocationOnIcon color="primary" />,
    primary: 'Location',
    secondary: '190 Rugare Street, Pangolin',
  },
];

const Contact = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      name: data.get('name'),
      email: data.get('email'),
      message: data.get('message'),
    });
  };

  return (
    <Box>
      <Toolbar />
      {/* Hero Section */}
      <Box sx={{ py: 8, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h1" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            Contact Us
          </Typography>
          <Typography variant="h5" color="text.secondary" paragraph>
            Ready to transform your digital presence? Get in touch with our team of experts and let's create something extraordinary together.
          </Typography>
        </Container>
      </Box>

      {/* Contact Form and Info */}
      <Box sx={{ py: 8, backgroundColor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h4" component="h2" gutterBottom>
                    Send us a Message
                  </Typography>
                  <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          autoComplete="given-name"
                          name="name"
                          required
                          fullWidth
                          id="name"
                          label="Name"
                          autoFocus
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          fullWidth
                          id="email"
                          label="Email Address"
                          name="email"
                          autoComplete="email"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          multiline
                          rows={4}
                          id="message"
                          label="Message"
                          name="message"
                        />
                      </Grid>
                    </Grid>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                      endIcon={<SendIcon />}
                    >
                      Send Message
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h4" component="h2" gutterBottom>
                    Contact Information
                  </Typography>
                  <List>
                    {contactInfo.map((item) => (
                      <ListItem key={item.primary} component="a" href={item.href} target="_blank">
                        <ListItemIcon>
                          {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.primary} secondary={item.secondary} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Contact;