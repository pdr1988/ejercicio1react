import React from 'react';
import { Container } from '@mui/material';
import { Grid } from '@mui/material';
import { Box } from '@mui/material';
import { Link } from '@mui/material';
import './Footer.css'


export default function Footer() {
  return (
        <footer className='Footer'>
          <Box
            px={{ xs: 3, sm: 10 }}
            py={{ xs: 5, sm: 1 }}
            bgcolor="text.secondary"
            color="white"
          >
            <Container maxWidth="lg">
              <Grid container spacing={5}>
                <Grid item xs={12} sm={4}>
                  <Box borderBottom={1}>Help</Box>
                  <Box>
                    <Link href="/" color="inherit">
                      Contact
                    </Link>
                  </Box>
                  
                 
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Box borderBottom={1}>Account</Box>
                  <Box>
                    <Link href="/" color="inherit">
                      Login
                    </Link>
                  </Box>
                  
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Box borderBottom={1}>Messages</Box>
                  <Box>
                    <Link href="/" color="inherit">
                      Backup
                    </Link>
                  </Box>
                  
                 
                </Grid>
              </Grid>
            
            </Container>
          </Box>
        </footer>
      );
    }