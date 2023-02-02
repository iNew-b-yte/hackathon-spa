
import React, { useState, useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { statusUpdater } from '../Reducer/status';
import { Link } from 'react-router-dom';

const ChallengeCard = ({ id, heading, img_src, start_date, end_date }) => {
  const findStatus = useSelector(state => state._status.statusArr);

  const dispatch = useDispatch();
  const [classname, setClassName] = useState("");

  //start date
  const _month = new Date(start_date).getMonth();
  const _year = new Date(start_date).getFullYear();
  const _date = new Date(start_date).getDate();


  //today's date
  const month = new Date().getMonth();
  const year = new Date().getFullYear();
  const date = new Date().getDate();

  //end date
  const _end_date = new Date(end_date).getTime();

  useEffect(() => {
    const startDate = new Date(_year, _month, _date, 0, 0, 0, 0).getTime();
    const today = new Date(year, month, date, 0, 0, 0, 0).getTime();

    if (today < startDate) {
      setClassName("bg-warning-subtle border-warning");
      dispatch(statusUpdater({ challengeId: id, challengeStatus: 'Upcoming' }));

    } else if (startDate === today || today < _end_date) {
      setClassName("bg-success-subtle border-success");
      dispatch(statusUpdater({ challengeId: id, challengeStatus: 'Active' }));

    } else {
      setClassName("bg-danger-subtle border-danger");
      dispatch(statusUpdater({ challengeId: id, challengeStatus: 'Past' }));
    }

    return () => {

    }
  }, [id, date, month, year, _date, _month, _year, _end_date, start_date, end_date, dispatch]);

  // console.log(findStatus);
  const foundStatus = findStatus.find(x => x.challengeId === id);
  // console.log(foundStatus);
  const _status = foundStatus !== undefined? foundStatus.challengeStatus : "na";
  console.log(_status);
  


  return (
    <div className="col-12 col-sm-6 col-md-4 px-0 py-3 pb-0 p-sm-3">
      <Link to={`/challengeDetail/${id}`} className='text-decoration-none text-dark '>
        <div className='bg-white rounded p-1'>
          <img className='card-img-top' src={img_src} alt="img-png" />
          <div className="card-body text-center">
            <p id='status' className={`d-inline-block px-2 custom-fontSize rounded-pill border ${classname}`}>{_status}</p>
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

export default memo(ChallengeCard);