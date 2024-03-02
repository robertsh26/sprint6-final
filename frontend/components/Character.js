import React, {useState} from 'react'
import planetsData from '../../backend/data/planets';


function Character({character}) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  const { name, homeworld } = character;
  const [showHomeworld, setShowHomeworld] = useState(false);
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  const toggleHomeworld = () => {
    setShowHomeworld(!showHomeworld)
  };

  const getHomeworldName = (homeworldId) => {
    const planet = planetsData.find((planet) => planet.id === homeworldId);
    return planet ? planet.name : 'Unknown Planet';
  };

  return (
    <div className="character-card" onClick={toggleHomeworld}>
      <h3 className="character-name">{name}</h3>
      {showHomeworld && (
        <p>
          Planet:
          <span className="character-planet"> {getHomeworldName(homeworld)}</span> 
        </p>
      /* Use the same markup with the same attributes as in the mock */
      )}
    </div>
  )
}

export default Character
