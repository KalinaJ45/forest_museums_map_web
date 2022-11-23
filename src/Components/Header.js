import React from 'react';
import logoLP from './Assets/LogoLP.png'

// MUI imports
import { AppBar, Toolbar, Typography, IconButton, Button } from '@mui/material'

function Header() {
  return (
    <div style={{ height: '10vh', display: 'flex', justifyContent: 'center' }}>
      <AppBar position="static" style={{ backgroundColor: '#006453' }}>
        <Toolbar>
          <div style={{ marginRight: 'auto' }}>
            <IconButton href='https://www.lasy.gov.pl/pl' style={{ marginLeft: "4rem" }}>
              <img src={logoLP} alt='Forest museum icon' style={{ height: '3.4rem' }}></img>
            </IconButton>
            <Button color="inherit" href='https://www.lasy.gov.pl/pl'>
              <Typography variant="h6" style={{ marginLeft: "3rem" }} >
                PAŃSTWOWE GOSPODARSTWO LEŚNE - LASY PAŃSTWOWE
              </Typography>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;


