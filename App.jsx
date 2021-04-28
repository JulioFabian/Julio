import React from 'react';

import {ThemeProvider} from '@material-ui/core/styles'
import theme from './temaConfig'
import Contenedor from './componentes/Contenedor'

function App() {

  return (
    <ThemeProvider theme = {theme}>
      
      <Contenedor>

      </Contenedor>

    </ThemeProvider>
  );
}

export default App;
