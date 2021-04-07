import React, { useState, useEffect, useRef } from "react";
import { Jumbotron, Button, Card, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Locations = () => {
    const [location, setLocation] = useState({})
    const [totalResults, setTotalResults] = useState(0)
    const prevResults = usePrevious(totalResults)

    async function fetchData() {
        await fetch('https://rickandmortyapi.com/api/location')
              .then((res) => (res.ok) ? Promise.resolve(res) : Promise.reject(new Error(res.statusText)))  // check the response of our APIs
              .then(res => res.json())    // parse it to Json
              .catch(error => console.log('There was a problem!', error))
  
      .then(data => {
        // assign to requested URL as defined in array with array index.
        const ep = data;
        //set state
        setLocation(ep)
          })
          
        }
    
       useEffect(() => {
        fetchData()
       }, []);

    //    console.log('location', location)

    function usePrevious(value) {
        const ref = useRef();
        useEffect(() => {
          ref.current = value;
        });
        return ref.current;
      }


         const locationsList = []
   for (let i in location.results) {
    locationsList.push(<Card key={location.results[i].id} style={{ width: '18rem' }}>
    {/* <Card.Img variant="top" src={location.results[i].image} /> */}
    <Card.Body>
      <Card.Title>{location.results[i].name}</Card.Title>
      {/* <Card.Text> */}
        <ul>
        {/* <li>{`Name: ${location.results[i].name}`}</li> */}
        <li>{`Dimension: ${location.results[i].dimension}`}</li>
        <li>{`Type: ${location.results[i].type}`}</li>
        </ul>
      {/* </Card.Text> */}
      <Button variant="primary">Check out the cameos</Button>
    </Card.Body>
  </Card>)
    
  }
    //    {console.log('location', location.results)}

    
return(
    <div className='container'>
        <Jumbotron id="jumbotron1" className="jumbotron jumbotron-fluid">
     {/* <img src='https://i.imgur.com/4cOhKc2.jpg' id="intro-home"></img> */}
      <div className="search-component">
      <img className="rmimg" src="https://i.imgur.com/lsL2SOX.png"></img>

    <Link to={'/'}> <Button id="btn">Home</Button></Link>
    
    <Form inline>
      <FormControl 
      type="text" 
      placeholder="Search" 
      className="search mr-sm-2" 
    //   value={searchTerm}
    //   onChange={handleSearchChanges}
      />
      <Button variant="outline-light" type="submit">Search</Button>
    </Form>
    </div>
  </Jumbotron>
    {locationsList}
    </div>
  ) 
}

export default Locations;
