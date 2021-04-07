import './Characters.css';
import React, { useState, useEffect } from "react";
import { Button, Card, Jumbotron } from 'react-bootstrap';

// this is a dud component i may use later on..

const Characters = () => {
  
  const [character, setCharacter] = useState({});
  const [episode, setEpisode] = useState({});
  const [location, setLocation] = useState({})

  const urls = [
    'https://rickandmortyapi.com/api/character',
    'https://rickandmortyapi.com/api/episode',
    'https://rickandmortyapi.com/api/location'
];

  async function fetchData() {
    await Promise.all(urls.map(url =>
      fetch(url)
          .then((res) => (res.ok) ? Promise.resolve(res) : Promise.reject(new Error(res.statusText)))  // check the response of our APIs
          .then(res => res.json())    // parse it to Json
          .catch(error => console.log('There was a problem!', error))
  ))
  .then(data => {
    // assign to requested URL as defined in array with array index.
    const char = data[0];
    const ep = data[1];
    const loc = data[2];

    //set state
    setCharacter(char)
    setEpisode(ep)
    setLocation(loc)
      })
      
    }

   useEffect(() => {
    fetchData()
   }, []);

  
  //  const list = []
  //  for (let i in character) {
  //   list.push(<Card key={character[i].id} style={{ width: '18rem' }}>
  //   <Card.Img variant="top" src={character[i].image} />
  //   <Card.Body>
  //     <Card.Title>{character[i].name}</Card.Title>
  //     {/* <Card.Text> */}
  //       <ul>
  //       <li>{`Status: ${character[i].status}`}</li>
  //       <li>{`Species: ${character[i].species}`}</li>
  //       <li>{`Location: ${character[i].location.name}`}</li>
  //       </ul>
  //     {/* </Card.Text> */}
  //     <Button variant="primary">Go somewhere</Button>
  //   </Card.Body>
  // </Card>)
    
  // }
   
  {console.log('character', character.results)}
  // {console.log('episode', episode.results)}
  {console.log('location', location.results)}

  return (
    
    <>
        <h1>characters</h1>
    </>
//     <div className="Characters"> 
//     <Jumbotron className="jum">
//   <h1>Characters</h1>
//   <p>
//     This is a simple hero unit, a simple jumbotron-style component for calling
//     extra attention to featured content or information.
//   </p>
//   <p>
//     <Button variant="primary">Learn more</Button>
//   </p>
// </Jumbotron>

//         {list}
   
//     </div>
  );
 }


export default Characters;
