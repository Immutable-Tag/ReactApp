import React from 'react';
import './Team.css';

function Team() {
  return (
    <div class="team-container">
        <h1 class="h1-white">Our Team</h1>
        <img class='team' src='/images/team.png' type="images/png" alt="" style={{width: "90%", 'background-color': "#20282f !important" }} />
    </div>
  );
}

export default Team;