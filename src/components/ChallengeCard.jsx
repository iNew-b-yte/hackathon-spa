import React from 'react';
import { Link } from 'react-router-dom';
// import image(s)
// import butterfly from "../assets/butterfly.png";

const ChallengeCard = ({heading, img_src,id}) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 px-0 py-3 pb-0 p-sm-3">
    <div className='bg-white rounded p-1'>
      <img className='card-img-top' src={img_src} alt="butterfly-png" />
      <div className="card-body text-center">
        <p id='status' className=''>Upcoming</p>
        <h1 className="card-title fs-6 mb-3">{heading}</h1>
        <button type='button' className='btn btn-sm rounded text-center card-button fw-bold px-4 w-75 custom-font-Size' >
          <Link to={`/challengeDetail/${id}`} className='text-decoration-none text-dark '>  Participate Now</Link>
        </button>
      </div>
      </div>
    </div>
  )
}

export default ChallengeCard;