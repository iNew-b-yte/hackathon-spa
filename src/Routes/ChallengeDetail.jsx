import React from 'react';
import { useNavigate } from 'react-router-dom';

function ChallengeDetail() {
  const navigate = useNavigate();

  function handleClick(event){
    event.preventDefault();
    navigate(-1);
  }


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
      <div className='row p-0 px-md-5 m-0 shadow bg-light '>

        <div className="col-12 col-sm-6 p-0 text-center text-sm-start px-5 m-0">
          <h1 className='fs-4 d-inline-block m-0 py-2 px-2 border-bottom border-success border-3'>Overview</h1>
        </div>
        <div className="col-6 d-none d-sm-block text-end m-0 py-2 px-5">
          <button className='btn btn-sm bg-warning text-white me-1 px-3' onClick={handleClick}>Back</button>
          <button className='btn btn-sm bg-success text-white me-1 px-3'>Edit</button>
          <button className='btn btn-sm border-danger text-danger ms-1'>Delete</button>
        </div>
      </div>
      <p className="p-2 subText px-md-5 mx-sm-5">Butterflies are the adult flying stage of certain insects
        belonging to an order or group called Lepidoptera. The word "Lepidoptera" means
        "scaly wings" in Greek. This name perfectly suits the insects in this group because
        their wings are covered with thousands of tiny scales overlapping in rows.
        <br /><br />

        An agency of the Governmental Wildlife Conservation is planning to implement an
        automated system based on computer vision so that it can identify butterflies
        based on captured images. As a consultant for this project, you are responsible
        for developing an efficient model. <br /><br />

        Your Task is to build an Image Classification Model using CNN that classifies to
        which class of weather  each image belongs to.</p><br />
      <div className="d-block d-sm-none text-center m-0 py-2 px-5">
        <button className='backBtn btn btn-sm bg-warning text-white me-1 px-3' onClick={handleClick}>Back</button>
        <button className='editBtn btn btn-sm bg-success text-white mx-1 px-3'>Edit</button>
        <button className='delBtn btn btn-sm border-danger text-danger ms-1'>Delete</button>
      </div>

    </section>
  )
}

export default ChallengeDetail;