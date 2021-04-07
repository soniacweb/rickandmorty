import React, { useState, useEffect } from "react";
// import { Jumbotron, Button, Card, Form, FormControl } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

const SingleChar = ({ match }) => {
    const [singleChar, setSingleChar] = useState({});
    let {id} = match.params;


async function fetchData() {
    {console.log(id)}
    await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((res) => (res.ok) ? Promise.resolve(res) : Promise.reject(new Error(res.statusText)))  // check the response of our APIs
    .then(res => res.json())    // parse it to Json
    .catch(error => console.log('There was a problem!', error))

    .then(data => {
// assign to requested URL as defined in array with array index.
    const char = data;
//set state
    setSingleChar(char)
        })
    }

useEffect(() => {
fetchData()
}, [id]);

{console.log(singleChar)}

return (
<>
<section className="SingleChar-show">
 <h1>{singleChar.name}</h1>
   <div className="SingleCharInfo">
    <img src={singleChar.image} alt={singleChar.name} />
      <div className="SingleCharDetails">
       <div>
        <h4><span>Species:</span></h4>
         <p>{singleChar.species}</p>
          </div>
         <div>
        <h4>Status:</h4>
       <p>{singleChar.status}</p>

       <h4><span>Location:</span></h4>
       <p>{singleChar.location.name}</p>
     
      </div>
     </div>
    </div>
 </section>
</>
)
}

export default SingleChar;