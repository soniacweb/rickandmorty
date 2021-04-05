import React, { useState, useEffect } from "react";
import { Jumbotron, Button, Card, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Characters = () => {
  const [character, setCharacter] = useState({});

    async function fetchData() {
        await fetch('https://rickandmortyapi.com/api/character')
              .then((res) => (res.ok) ? Promise.resolve(res) : Promise.reject(new Error(res.statusText)))  // check the response of our APIs
              .then(res => res.json())    // parse it to Json
              .catch(error => console.log('There was a problem!', error))
  
      .then(data => {
        // assign to requested URL as defined in array with array index.
        const char = data;
        //set state
        setCharacter(char)
          })
          
        }
    
       useEffect(() => {
        fetchData()
       }, []);

       console.log('character', character)

         const charactersList = []
   for (let i in character.results) {
    charactersList.push(<Card key={character.results[i].id} style={{ width: '18rem' }}>
    <Card.Img variant="top" src={character.results[i].image} />
    <Card.Body>
      <Card.Title>{character.results[i].name}</Card.Title>
      {/* <Card.Text> */}
        <ul>
        {/* <li>{`Name: ${character.results[i].name}`}</li> */}
        <li>{`Species: ${character.results[i].species}`}</li>
        <li>{`Status: ${character.results[i].status}`}</li>

        <li>{`Location: ${character.results[i].location.name}`}</li>
        <li>{`Origin: ${character.results[i].origin.name}`}</li>
        </ul>
      {/* </Card.Text> */}
      <Button variant="primary">Check out the cameos</Button>
    </Card.Body>
  </Card>)
    
  }
    //    {console.log('character', character.results)}

    
return(
  <>
  <Jumbotron id="jumbotron">
     {/* <img src='https://i.imgur.com/4cOhKc2.jpg' id="intro-home"></img> */}
   
    <p className="p-background">
    <Link to={'/'}> <Button id="btn">Home</Button></Link>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form>
    </p>
  </Jumbotron>
    <div className='container'>
    
 
    {charactersList}
    </div>
    </>
) 
}

export default Characters;
