import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Nav from './Nav';
import Home from './Home';
import Characters from './Characters';
import Episodes from './Episodes';
import Locations from './Locations';
import SingleChar from './SingleChar';
import SingleEpisodes from './SingleEpisodes';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';


ReactDOM.render(
  <Router>
<Navbar bg="primary" variant="dark">
    <Navbar.Brand href="/">rick+morty</Navbar.Brand>
    {/* <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/characters">Characters</Nav.Link>
      <Nav.Link href="/episodes">Episodes</Nav.Link>
      <Nav.Link href="/locations">Locations</Nav.Link>

    </Nav> */}
   
  </Navbar>

 <Switch>
<Route path="/characters/:id" component={SingleChar} />
<Route path='/characters' component={Characters}/>
<Route path="/episodes/:id" component={SingleEpisodes} />
<Route path='/episodes' component={Episodes}/>
<Route exact path='/locations' exact component={Locations}/>
<Route exact path='/' exact component={Home}/>

</Switch>
  </Router>,

  document.getElementById('root')
);


