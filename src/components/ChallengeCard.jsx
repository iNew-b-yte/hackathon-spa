import React from 'react';

// import image(s)
import butterfly from "../assets/butterfly.png";
import checkIcon from "../assets/checkIcon.png";

const ChallengeCard = () => {
  return (
    <div className="card w-25">
      <img className='card-img-top' src={butterfly} alt="butterfly-png" />
      <div className="card-body text-center">
      <p id='status pill'>Upcoming</p>
        <h1 className="card-title fs-4">Data Science Bootcamp - Graded Datathon</h1>
        <button type='button' className='btn btn-sm rounded text-white fw-bold px-4 card-button' >
          <img src={checkIcon} alt="check-icon" />
          Participate Now
        </button>
      </div>
    </div>
  )
}

export default ChallengeCard;