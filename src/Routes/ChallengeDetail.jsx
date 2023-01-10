import React from 'react';

function ChallengeDetail() {
  return (
    <section id="challenge-Detail" className='container-fluid p-0'>
      <div className="cardHeading p-2 py-3 p-md-5">
        <div className='ms-sm-5 bg-warning px-2 px-sm-5 text-center rounded fw-bold d-inline-block custom-font-Size'>
          Starts on {new Date().toString()}
        </div>
        <h1 className='ms-sm-5 text-white heading mt-3'>Data Sprint 72 - Butterfly Identification</h1>
        <p className='ms-sm-5 text-white subText mt-3'>Identify the class to which each butterfly belongs to</p>
        <span className='ms-sm-5 px-3 py-1 mt-3 bg-light text-dark rounded fw-bold'>Easy</span>
      </div>
      <div className='row shadow bg-light p-0 m-0'>
        <div className="col-6 p-0 text-center m-0">
          <h1 className='fs-4 d-inline-block m-0 py-2 px-2 border-bottom border-dark border-3'>Overview</h1>
        </div>
        <div className="col-6 text-end m-0 py-2">
          <button className='editBtn btn btn-sm bg-success text-white me-1 px-3'>Edit</button>
          <button className='delBtn btn btn-sm border-danger text-danger ms-1'>Delete</button>
        </div>
      </div>
    </section>
  )
}

export default ChallengeDetail;