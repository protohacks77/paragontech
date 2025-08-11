import React from 'react';
import { Box, Container, Typography, Grid, Card, CardMedia, CardContent, CardActions, Button, Toolbar } from '@mui/material';

const blogPosts = [
  {
    title: 'The Future of Web Development: Trends to Watch in 2024',
    excerpt: 'Explore the emerging technologies and methodologies that are shaping the future of web development...',
    image: 'https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Building Effective School Management Systems',
    excerpt: 'Key considerations and best practices for developing comprehensive educational platforms...',
    image: 'https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'The Art of Digital Branding: Creating Memorable Online Experiences',
    excerpt: 'How to build a strong digital brand that resonates with your target audience...',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

const Blog = () => {
  return (
    <Box>
      <Toolbar />
      {/* Hero Section */}
      <Box sx={{ py: 8, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h1" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            Tech Insights
          </Typography>
          <Typography variant="h5" color="text.secondary" paragraph>
            Stay updated with the latest trends, insights, and best practices in technology, development, and digital innovation.
          </Typography>
        </Container>
      </Box>

      {/* Blog Posts Grid */}
      <Box sx={{ py: 8, backgroundColor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {blogPosts.map((post) => (
              <Grid item key={post.title} xs={12} sm={6} md={4}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={post.image}
                    alt={post.title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {post.title}
                    </Typography>
                    <Typography>
                      {post.excerpt}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Read More</Button>
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

export default Blog;