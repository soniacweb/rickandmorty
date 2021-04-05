# Rick and Morty Project :cookie:
<img src="https://i.imgur.com/hzSRrZD.jpg"/>


A fun app detailing the characters and episodes from the popular show Rick and Morty using the Rick and Morty API.

### :crystal_ball: Tech stack: 
<ul>
<li>Bootstrap</li>
<li>React Hooks (useState and UseEffect)</li>
<li>React Router</li>
</ul>

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### :dart: Day 1: fetching data from the api and constructing a characters page

I created a functional `Characters` component and initialised `useState`. The excerpt below will show that within this component I used an async operation to fetch the data from the `character` endpoint from the api. Once the promise was met, I reformated the response into a JavaScript object to then use the data.

```
  async function fetchData() {
    const charsEndpoint = 'https://rickandmortyapi.com/api/character'
    const res = await fetch(charsEndpoint)
    const data = await res.json()
    const [...item] = data.results 
    setCharacter(item)
    }
```
I wanted to incorporate `useEffect` and practise state management in this project. `useEffect` is a hook for encapsulating code that has 'side effects'. It's like a combination of componentDidMount, componentDidUpdate, and componentWillUnmount and updates the DOM with after effects accordingly. 

I passed in an invoked `fetchData()` and an empty array as a second parameter to avoid endless remounting (a quirk with React's useEffect).

NB: Previously, functional components didn't have access to the component life cycle, but with useEffect you can tap into it.  

```
 useEffect(() => {
    fetchData()
   }, []);
```

Day 2: Establish some routing via navbar to make is easier to navigate across each page so I can flesh out individual characters pages and eposodes pages
Day 3: Incorporate searches and filters