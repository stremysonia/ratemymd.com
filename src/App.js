import "./App.css"
import React from 'react';
import { Home, About, Contact} from './pages/index'
import { Navbar, Footer } from './components/index'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
          return (
            <>
              <Router>
                <Navbar/>
                <Switch>

                <Route path="/Contact">
                  <Contact/>
                  </Route>

                <Route path="/About">
                  <About/>
                  </Route>

                <Route exact path="/">
                  <Home/>
                </Route>
              </Switch>
              <Footer/>
            </Router>
            </>
  );
}

export default App;
