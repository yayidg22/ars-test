import React, { Fragment } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Home from './views/home/home';
import { Global } from '@emotion/react';

function App() {
  return (
    <Fragment>
      <Global
        styles={`
          body {
            margin: 0;

          }
        `}
      />
      <Home />
    </Fragment>
  );
}

export default App;
