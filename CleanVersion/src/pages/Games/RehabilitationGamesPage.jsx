import React, { useState } from "react";
import "./RehabilitationGamesPage.css";

const RehabilitationGamesPage = () => {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (index) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  const handleGameClick = (gameName) => {
    console.log(`You clicked on ${gameName}`);
    // You can navigate, open modal, or perform any action here
  };

  return (
    <div className="rehab-games-container">
      <h2>Rehabilitation Games</h2>

      {/* Category 1 */}
      <div className="category">
        <div className="category-header" onClick={() => toggleCategory(0)}>
          <h3>Cognitive & Coordination</h3>
          <span>{openCategory === 0 ? "−" : "+"}</span>
        </div>
        {openCategory === 0 && (
          <ul className="game-list">
            <li onClick={() => handleGameClick("Balloon Burst")}>Balloon Burst</li>
            <li onClick={() => handleGameClick("Shape Tracer")}>Shape Tracer</li>
            <li onClick={() => handleGameClick("Memory Match")}>Memory Match</li>
            <li onClick={() => handleGameClick("Hand-Eye Coordination Games")}>Hand-Eye Coordination Games</li>
            <li onClick={() => handleGameClick("Focus & Recall")}>Focus & Recall</li>
          </ul>
        )}
      </div>

      {/* Category 2 */}
      <div className="category">
        <div className="category-header" onClick={() => toggleCategory(1)}>
          <h3>Upper Body Rehabilitation</h3>
          <span>{openCategory === 1 ? "−" : "+"}</span>
        </div>
        {openCategory === 1 && (
          <ul className="game-list">
            <li onClick={() => handleGameClick("Shoulder Game")}>Shoulder Game</li>
            <li onClick={() => handleGameClick("Arm Strength Games")}>Arm Strength Games</li>
            <li onClick={() => handleGameClick("Grip Strength Games")}>Grip Strength Games</li>
            <li onClick={() => handleGameClick("Resistance Band Pulls")}>Resistance Band Pulls</li>
            <li onClick={() => handleGameClick("Wall Push-Ups")}>Wall Push-Ups</li>
          </ul>
        )}
      </div>

      {/* Category 3 */}
      <div className="category">
        <div className="category-header" onClick={() => toggleCategory(2)}>
          <h3>Lower Body Rehabilitation</h3>
          <span>{openCategory === 2 ? "−" : "+"}</span>
        </div>
        {openCategory === 2 && (
          <ul className="game-list">
            <li onClick={() => handleGameClick("Knee Flexibility Challenge")}>Knee Flexibility Challenge</li>
            <li onClick={() => handleGameClick("Ankle Balance Games")}>Ankle Balance Games</li>
            <li onClick={() => handleGameClick("Leg Stretch Games")}>Leg Stretch Games</li>
            <li onClick={() => handleGameClick("Heel Raises")}>Heel Raises</li>
            <li onClick={() => handleGameClick("Side Leg Lifts")}>Side Leg Lifts</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default RehabilitationGamesPage;
