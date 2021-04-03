import './Characters.css';
import React, { useState, useEffect } from "react";
// import Button from 'react-bootstrap/Button';
import { Button, Card, Jumbotron } from 'react-bootstrap';


const Characters = () => {
  // const [hasError, setErrors] = useState(false);
  const [character, setCharacter] = useState({});


  async function fetchData() {
    const charsEndpoint = 'https://rickandmortyapi.com/api/character'
    const res = await fetch(charsEndpoint)
    const data = await res.json()
    const [...item] = data.results 
    console.log(item)
    setCharacter(item)
    }

   useEffect(() => {
    fetchData()
   }, []);

  //  {console.log(character)}

   const list = []
   for (let i in character) {
    list.push(<Card key={character[i].id} style={{ width: '18rem' }}>
    <Card.Img variant="top" src={character[i].image} />
    <Card.Body>
      <Card.Title>{character[i].name}</Card.Title>
      {/* <Card.Text> */}
        <ul>
        <li>{`Status: ${character[i].status}`}</li>
        <li>{`Species: ${character[i].species}`}</li>
        <li>{`Location: ${character[i].location.name}`}</li>
        </ul>
      {/* </Card.Text> */}
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>)
    
  }
   
  return (
    <div className="Characters"> 
    <Jumbotron className="jum">
  <h1>Characters</h1>
  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>
  <p>
    <Button variant="primary">Learn more</Button>
  </p>
</Jumbotron>

        {list}
   
    </div>
  );
 }


export default Characters;
