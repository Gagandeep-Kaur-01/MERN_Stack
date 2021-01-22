import { SwipeableDrawer } from '@material-ui/core';
import React, { useState } from 'react';
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: 'steve jobs',
      url:'data:image/jpeg;base64,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'
    },
    {
      name: 'marks zuckenberg',
      url:'data:image/jpeg;base64,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'
    }
    ]);

    const swiped = (direction, nameToDelete) => {
      console.log("removing: " + nameToDelete);
      //setLastDirection(direction);
    };

    const outOfFrame = (name) => {
      console.log(name + "Left the screen!");
    };

  return (
    <div className="tinderCards">  
      <div className="tinderCards_cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
           >
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
