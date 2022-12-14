import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Home from "pages/home";
import Projects from "pages/projects";
import About from "pages/about";
import Contact from "pages/contact/Contact";
import Error from "pages/error/Error";
import Layout from "components/layout";
import GlobalStyle from "./styles/global";
import { theme } from "./styles/theme";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route component={Error} />
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
