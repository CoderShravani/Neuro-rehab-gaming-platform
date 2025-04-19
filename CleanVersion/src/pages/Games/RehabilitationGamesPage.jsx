import React, { useState } from "react";
import "./RehabilitationGamesPage.css";

const gamesData = [
  {
    category: "Cognitive & Coordination",
    games: [
      "Balloon Burst",
      "Shape Tracer",
      "Memory Match",
      "Hand-Eye Coordination Games",
      "Focus & Recall",
    ],
  },
  {
    category: "Upper Body Rehabilitation",
    games: [
      "Shoulder Game",
      "Arm Strength Games",
      "Grip Strength Games",
      "Resistance Band Pulls",
      "Wall Push-Ups",
    ],
  },
  {
    category: "Lower Body Rehabilitation",
    games: [
      "Knee Flexibility Challenge",
      "Ankle Balance Games",
      "Leg Stretch Games",
      "Heel Raises",
      "Side Leg Lifts",
    ],
  },
];

const RehabilitationGamesPage = () => {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (index) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  return (
    <div className="rehab-games-container">
      <h2>Rehabilitation Games</h2>
      {gamesData.map((section, index) => (
        <div key={index} className="category">
          <div
            className="category-header"
            onClick={() => toggleCategory(index)}
          >
            <h3>{section.category}</h3>
            <span>{openCategory === index ? "−" : "+"}</span>
          </div>
          {openCategory === index && (
            <ul className="game-list">
              {section.games.map((game, idx) => (
                <li key={idx}>{game}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default RehabilitationGamesPage;
