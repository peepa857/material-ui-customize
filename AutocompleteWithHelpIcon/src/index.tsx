import * as React from 'react';
import ReactDOM from 'react-dom';
import StyledEngineProvider from '@material-ui/core/StyledEngineProvider';
import Demo from './demo';

ReactDOM.render(
  <StyledEngineProvider injectFirst>
    <Demo />
  </StyledEngineProvider>,
  document.querySelector("#root")
);