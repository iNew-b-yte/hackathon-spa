
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ChallengeCard = ({ id, heading, img_src, start_date, end_date }) => {

  const [status, setStatus] = useState();
  const [classname, setClassName] = useState("");

  //start date
  const _month = new Date(start_date).getMonth();
  const _year = new Date(start_date).getFullYear();
  const _date = new Date(start_date).getDate();


  //today date
  const month = new Date().getMonth();
  const year = new Date().getFullYear();
  const date = new Date().getDate();

  //end date
  const _end_date = new Date(end_date).getTime();

  useEffect(() => {
    const startDate = new Date(_year, _month, _date, 0, 0, 0, 0).getTime();
    const today = new Date(year, month, date, 0, 0, 0, 0).getTime();

    if (today < startDate) {
      setStatus("Upcoming");
      setClassName("bg-warning-subtle border-warning");
    } else if (startDate === today || today < _end_date) {
      setStatus("Active");
      setClassName("bg-success-subtle border-success");
    } else {
      setStatus(`Ended on ${end_date}`);
      setClassName("bg-danger-subtle border-danger");
    }

    return () => {

    }
  }, [date, month, year, _date, _month, _year, end_date, _end_date]);


  return (
    <div className="col-12 col-sm-6 col-md-4 px-0 py-3 pb-0 p-sm-3">
      <Link to={`/challengeDetail/${id}`} className='text-decoration-none text-dark '>
        <div className='bg-white rounded p-1'>
          <img className='card-img-top' src={img_src} alt="img-png" />
          <div className="card-body text-center">
            <p id='status' className={`d-inline-block px-2 custom-fontSize rounded-pill border ${classname}`}>{status}</p>
            <h1 className="card-title fs-6 mb-3">{heading}</h1>
            <button type='button' className='btn btn-sm rounded text-center card-button fw-bold px-4 w-75 custom-font-Size' >
              Participate Now
            </button>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default React.memo(ChallengeCard);