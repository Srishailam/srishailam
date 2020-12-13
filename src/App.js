import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Projects from './components/Projects/Projects';
import Articles from './components/Articles/Articles';
import AboutMe from './components/AboutMe/AboutMe';
import NavBar from './components/NavBar/NavBar';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import './App.css';
import SideBar from './components/SideBar/SideBar';
import Home from './components/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <SideBar />
        <NavBar />
        <Main>
          <Switch>
            <Route
              exact
              path="/srishailam/"
              render={() => {
                return (
                  <Redirect to="/home" />
                )
              }}
            />
            <Route exact path="/projects" component={Projects} />
            <Route path="/articles" component={Articles} />
            <Route path="/about-me" component={AboutMe} />
            <Route path="/" component={Home}></Route>
          </Switch>
        </Main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
