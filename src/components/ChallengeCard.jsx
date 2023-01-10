import React from 'react';
import { Link } from 'react-router-dom';
// import image(s)
import butterfly from "../assets/butterfly.png";

const ChallengeCard = () => {
  return (
    <div className="custom-card col-12 col-sm-4 col-md-3 bg-white p-1 rounded">
      <img className='card-img-top' src={butterfly} alt="butterfly-png" />
      <div className="card-body text-center">
        <p id='status' className=''>Upcoming</p>
        <h1 className="card-title fs-6 mb-3">Data Science Bootcamp - Graded Datathon</h1>
        <button type='button' className='btn btn-sm rounded text-center card-button fw-bold px-4 w-75 custom-font-Size' >
          <Link to='/challengeDetail' className='text-decoration-none text-dark '>  Participate Now</Link>
        </button>
      </div>
    </div>
  )
}

export default ChallengeCard;