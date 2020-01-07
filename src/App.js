import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { createGlobalStyle } from 'styled-components';

import Nav from './Components/nav/nav';
import Footer from './Components/footer/footer';
import routes from './router';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Backsplash>
            <span />
          </Backsplash>
          <GlobalStyle />
          <Container>
            <Nav />
            {routes}
            <Footer />
          </Container>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;

    ::selection {
      background: rgba(146, 206, 182, .6);
    }
  }

  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
  }
`;