import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./global";
import { themes } from "./themes";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import About from "./pages/about/About";
import Error from "./pages/error/Error";
import Footer from "./components/footer/Footer";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={themes.light}>
      <GlobalStyle />
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/about" component={About} />
          <Route component={Error} />
        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
