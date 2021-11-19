import React, { useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import About from './components/pages/About';
import SignUp from './components/pages/SignUp';
import CreateTag from './components/CreateTag';
import history from './components/history';
import FormGetTag from './components/FormGetTag';

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
          <Route path='/about' component={About} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/createTag' exact component={CreateTag} />
          <Route path='/getTag' exact component={FormGetTag} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
