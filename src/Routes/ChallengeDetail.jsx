import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import { deleteEvent } from '../Reducer/eventDetails';


function ChallengeDetail() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //status of challenge
  const [state, setState] = useState("");

  const { challengeId } = useParams();


  const status = useSelector(state => state._status.statusArr);
  

  const events = useSelector(state => state._event.eventsArr);
  let event_found = events.find((challenge) => {
    return challengeId === challenge.challenge_name_input
  }); 


  const fetchStatus = useCallback(()=> {
    let event_status = status.find((x)=>{
      return challengeId === x.challengeId;
    });

  
    
    setState(event_status.challengeStatus);
  },[challengeId,status]);

  useEffect(()=>{      
    fetchStatus();
  },[fetchStatus]);


  

  const statusResult = state === "Past" ? `Ended on ${new Date(event_found.end_date_input).toString()}` : state === "Active" ? `Started on ${new Date(event_found.start_date_input).toString()}` :`Starts on ${new Date(event_found.start_date_input).toString()}` ;

  function handleBackPress(event) {
    event.preventDefault();
    navigate(-1);
  }


  function handleDeletePress(event) {
    event.preventDefault();
    dispatch(deleteEvent(challengeId));
    navigate('/');
  }




  return (
    <section id="challenge-Detail" className='container-fluid p-0'>
      <div className="cardHeading p-2 py-3 p-md-5">
        <div className='ms-sm-5 bg-warning px-2 px-sm-5 text-center rounded fw-bold d-inline-block custom-font-Size'>
          {statusResult}
        </div>
        <h1 className='ms-sm-5 text-white heading mt-3'>{event_found.challenge_name_input}</h1>
        <p className='ms-sm-5 text-white subText mt-3'>{event_found.task_input}</p>
        <span className='ms-sm-5 px-3 py-1 mt-3 bg-light text-dark rounded fw-bold'>{event_found.level_type_dropdown}</span>
      </div>
      <div className='row p-0 px-md-5 m-0 shadow bg-light '>

        <div className="col-12 col-sm-6 p-0 text-center text-sm-start px-5 m-0">
          <h1 className='fs-4 d-inline-block m-0 py-2 px-2 border-bottom border-success border-3'>Overview</h1>
        </div>
        <div className="col-6 d-none d-sm-block text-end m-0 py-2 px-5">
          <button className='btn btn-sm bg-warning text-white me-1 px-3' onClick={handleBackPress}>Back</button>
          <Link to='/createChallenge' state={challengeId}>
            <button className='btn btn-sm bg-success text-white me-1 px-3'>Edit</button>
          </Link>
          <button className='btn btn-sm border-danger text-danger ms-1' onClick={handleDeletePress} >Delete</button>
        </div>
      </div>
      <p className="p-2 subText px-md-5 mx-sm-5">{event_found.description_textarea}</p><br />
      <div className="d-block d-sm-none text-center m-0 py-2 px-5">
        <button className='backBtn btn btn-sm bg-warning text-white me-1 px-3' onClick={handleBackPress}>Back</button>
        <Link to='/createChallenge' state={challengeId}>
          <button className='editBtn btn btn-sm bg-success text-white mx-1 px-3'>Edit</button>
        </Link>
        <button className='delBtn btn btn-sm border-danger text-danger ms-1' onClick={handleDeletePress}>Delete</button>
      </div>

    </section>
  )
}

export default ChallengeDetail;