import React, { useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Team from './components/pages/Team';
import About from './components/pages/About';
import SignUp from './components/pages/SignUp';
import CreateTag from './components/CreateTag';
import history from './components/history';
import GetTag from './components/GetTag';

function App() {

  const [user, setUser] = useState({gitRepoUrl: "", tagId: "", commitId: ""});

  const Create = details => {
    console.log(details);
  }
  return (
    <>
      <Router history={history}>
        <Navbar />
        {/* <CreateTag /> */}
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/team' component={Team} />
          <Route path='/about' component={About} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/createTag' exact component={CreateTag} />
          <Route path='/getTag' exact component={GetTag} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
