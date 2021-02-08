import "./App.css"
import React from 'react';
import { Home, About, Contact, Doctors, Nurses, MedicalCenters, Signup, Signin } from './pages/index'
import { Navbar, Footer } from './components/index'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
          return (
            <>
              <Router>
                <Navbar/>
                <Switch>

                <Route path="/Signin">
                  <Signin/>
                  </Route>

                <Route path="/Signup">
                  <Signup/>
                  </Route>

                <Route path="/MedicalCenters">
                  <MedicalCenters/>
                  </Route>

                <Route path="/Nurses">
                  <Nurses/>
                  </Route>

                <Route path="/Doctors">
                  <Doctors/>
                  </Route>

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
