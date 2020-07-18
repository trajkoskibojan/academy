import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Navbar, Form, Error, Home, Details } from 'containers';
import ScrollToTop from 'components/ScrollToTop/ScrollToTop';
import DarkTheme from './theme/dark';
import LightTheme from './theme/light';

const Global = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin    : 0;
    padding   : 0;
    box-sizing: inherit;
  }
  html {
    font-size: 62.5%;
    overflow-x: hidden;
  }
  body {
    font-family   : 'Inter', sans-serif;
    font-weight   : 500;
    box-sizing: border-box;
    color: #808080;
    line-height: 1.7;
    overflow-x: hidden;
    background: linear-gradient(to bottom, rgba(2,0,36,1), rgba(102,102,255,1), rgba(0,212,255,1)) 
  }
`;

const App = () => {
  const [theme, setTheme] = useState(LightTheme);

  return (
    <ThemeProvider
      theme={{
        ...theme,
        setTheme: () => setTheme(theme.id === 'light' ? DarkTheme : LightTheme),
      }}
    >
      <Global />
      <Form />
      <BrowserRouter>
        <ScrollToTop>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/title/:title" component={Details} />
            <Route component={Error} />
          </Switch>
        </ScrollToTop>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
