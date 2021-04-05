import React, { useState, useEffect } from "react";
import { Button, Card } from 'react-bootstrap';


const Locations = () => {
    const [location, setLocation] = useState({})

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

       console.log('location', location)

         const locationsList = []
   for (let i in location.results) {
    locationsList.push(<Card key={location.results[i].id} style={{ width: '18rem' }}>
    {/* <Card.Img variant="top" src={location.results[i].image} /> */}
    <Card.Body>
      <Card.Title>{location.results[i].name}</Card.Title>
      {/* <Card.Text> */}
        <ul>
        {/* <li>{`Name: ${location.results[i].name}`}</li> */}
        <li>{`location: ${location.results[i].location}`}</li>
        <li>{`Airdate: ${location.results[i].air_date}`}</li>
        </ul>
      {/* </Card.Text> */}
      <Button variant="primary">Check out the cameos</Button>
    </Card.Body>
  </Card>)
    
  }
    //    {console.log('location', location.results)}

    
return(
    <div className='container'>
    {locationsList}
    </div>
) 
}

export default Locations;
