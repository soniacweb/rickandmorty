import React, { useState, useEffect } from "react";
// import { Jumbotron, Button, Card, Form, FormControl } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

const SingleEpisodes = ({ match }) => {
    const [singleEp, setSingleEp] = useState({});
    let {id} = match.params;


async function fetchData() {
    {console.log(id)}
    await fetch(`https://rickandmortyapi.com/api/episode/${id}`)
    .then((res) => (res.ok) ? Promise.resolve(res) : Promise.reject(new Error(res.statusText)))  // check the response of our APIs
    .then(res => res.json())    // parse it to Json
    .catch(error => console.log('There was a problem!', error))
    .then(data => {
// assign to requested URL as defined in array with array index.
    const episode = data;
//set state
    setSingleEp(episode)
        })
    }

useEffect(() => {
fetchData()
}, [id]);

{console.log(singleEp)}

let charprofiles = []
{let arr = singleEp.characters
    arr.map(char=> charprofiles.push(`<img src='${char}.jpg' />`))
}

return (
<>
<section className="SingleEp">
 <h1>{singleEp.name}</h1>
   <div className="SingleEpInfo">
    {/* <img src={singleChar.image} alt={singleChar.name} /> */}
      <div className="SingleEpDetails">
       <div>
        {/* <h4><span>Species:</span></h4> */}
         <p>{singleEp.episode}</p>
          </div>
         <div>
      
        <charprofiles/>
       
     
      </div>
     </div>
    </div>
 </section>
</>
)
}

export default SingleEpisodes;