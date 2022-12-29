import React from 'react';

// import image(s)
import butterfly from "../assets/butterfly.png";
import checkIcon from "../assets/checkIcon.png";

const ChallengeCard = () => {
  return (
    <div className="custom-card bg-white p-1 m-2">
      <img className='card-img-top' src={butterfly} alt="butterfly-png" />
      <div className="card-body text-center">
      <p id='status' className=''>Upcoming</p>
        <h1 className="card-title fs-6 mb-3">Data Science Bootcamp - Graded Datathon</h1>
        <button type='button' className='btn btn-sm rounded text-dark card-button fw-bold px-4 ' >
          <img src={checkIcon} alt="check-icon" />
          Participate Now
        </button>
      </div>
    </div>
  )
}

export default ChallengeCard;