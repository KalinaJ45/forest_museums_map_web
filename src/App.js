import React from 'react';

// MUI imports
import { CssBaseline } from '@mui/material'

// Components
import Header from './Components/Header';
import MyMap from './Components/MyMap';

function App() {
  return (
    <div>
      <CssBaseline />
        <Header />
        <MyMap />
    </div>
  );
}

export default App;
