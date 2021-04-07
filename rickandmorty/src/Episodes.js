import React, { useState, useEffect } from "react";
import { Button, Card } from 'react-bootstrap';
import './Episodes.css'
import { Link } from 'react-router-dom';


const Episodes = () => {
    const [episode, setEpisode] = useState({});

    async function fetchData() {
        await fetch('https://rickandmortyapi.com/api/episode')
              .then((res) => (res.ok) ? Promise.resolve(res) : Promise.reject(new Error(res.statusText)))  // check the response of our APIs
              .then(res => res.json())    // parse it to Json
              .catch(error => console.log('There was a problem!', error))
  
      .then(data => {
        // assign to requested URL as defined in array with array index.
        const ep = data;
        //set state
        setEpisode(ep)
          })
          
        }
    
       useEffect(() => {
        fetchData()
       }, []);

       console.log('episode', episode)

         const episodesList = []
   for (let i in episode.results) {
    episodesList.push(<Card key={episode.results[i].id} style={{ width: '18rem' }}>
    {/* <Card.Img variant="top" src={episode.results[i].image} /> */}
    <Card.Body>
      <Card.Title>{episode.results[i].name}</Card.Title>
      {/* <Card.Text> */}
        <ul>
        {/* <li>{`Name: ${episode.results[i].name}`}</li> */}
        <li>{`Episode: ${episode.results[i].episode}`}</li>
        <li>{`Airdate: ${episode.results[i].air_date}`}</li>
        </ul>
      {/* </Card.Text> */}
      <Button variant="primary"> <Link key={episode.results[i].id} to={`/episodes/${episode.results[i].id}`}>Check out the cameos </Link></Button>

    </Card.Body>
  </Card>)
    
  }
    //    {console.log('episode', episode.results)}

    
return(
    <div className='container'>
    {episodesList}
    </div>
) 

}

export default Episodes;
