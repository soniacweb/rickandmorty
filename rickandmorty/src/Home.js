// import React, { useState, useEffect } from "react";
import React from "react";
import './Home.css';
import { Button, Jumbotron } from 'react-bootstrap';
import { Link} from 'react-router-dom';


const Home = () => {
return(
    <Jumbotron className="jumbotron jumbotron-fluid" id="jumbotron">
     <img src='https://i.imgur.com/4cOhKc2.jpg' id="intro-home"></img>
   
    <p className="p-background">
    <Link to={'/characters'}> <Button id="btn">Characters</Button></Link>
    <Link to={'/episodes'}> <Button id="btn">Episodes</Button> </Link>
    <Link to={'/locations'}>  <Button id="btn">Locations</Button> </Link>

    </p>
  </Jumbotron>
 
) 
}

export default Home;
