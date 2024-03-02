import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Character from './Character'
import styled from 'styled-components'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  const [characters, setCharacters] = useState([]);
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    // Fetch data from both endpoints concurrently
    const fetchData = async () => {
      try {
        const [peopleResponse, planetsResponse] = await Promise.all([
          axios.get(urlPeople),
          axios.get(urlPlanets),
        ]);

        // Extract data from responses
        const peopleData = peopleResponse.data;
        const planetsData = planetsResponse.data;

        // Update state
        setCharacters(peopleData);
        setPlanets(planetsData);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);


  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {/* ❗ Map over the data in state, rendering a Character at each iteration */}
      {characters.map(character => (
        <Character key={Character.id} character={character} />
      ))}
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
