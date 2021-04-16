import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import BaseTemp from "../components/BaseTemp"
import { createMuiTheme, Paper } from '@material-ui/core';
import { UserContextProvider } from '../context/userContext';
import Portfolio from './Portfolio';
import Profile from './Profile'
import { Switch as RouterSwitch, BrowserRouter as Router, Route } from "react-router-dom";
import NotFound from './NotFound';
import ToggleButton from '@material-ui/lab/ToggleButton';
import Brightness6Icon from '@material-ui/icons/Brightness6';
import { UidContextProvider } from '../context/uidContext';

function App() {
  const [DarkMode, setDarkMode] = useState(false);

  const theme = createMuiTheme({
    typography: {
      fontFamily: 'Raleway, Arial',
    },
    palette: {
      primary: {
        main: '#f48fb1',
        light: '#f6a5c0',
        dark: '#aa647b'
      },
      secondary: {
        main: '#90caf9',
        light: '#a6d4fa',
        dark: '#648dae'
      },
      type: DarkMode ? 'dark' : 'light'
    }
  });

  const switchComp = (
    <ToggleButton
      value="check"
      selected={DarkMode}
      onChange={() => {
        setDarkMode(!DarkMode);
      }}
    >
      <Brightness6Icon />
    </ToggleButton>
  )

  return (
    <ThemeProvider theme={theme}>
      <UserContextProvider>
        <UidContextProvider>

          <Router>
            <RouterSwitch>

              <Route exact path="/profile/:uid">
                <Profile switchComp={switchComp} />
              </Route>

              <Route exact path="/:uid">
                <Portfolio />
              </Route>

              <Route exact path="/">
                <Paper>
                  <BaseTemp switchComp={switchComp} />
                </Paper>
              </Route>

              <Route path="/*">
                <Paper>
                  <NotFound />
                </Paper>
              </Route>

            </RouterSwitch>
          </Router>
        </UidContextProvider>
      </UserContextProvider>
    </ThemeProvider>
  );
}

export default App;