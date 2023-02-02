import React, { useState } from 'react';

import { useNavigate, useLocation } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { createEvent, editEvent } from '../Reducer/eventDetails';

function CreateChallengeForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const [locationState, setLocationState] = useState(location.state !== null && location.state !== undefined ? true : false);

    // const statusArr = useSelector(state => state._status.statusArr);
    // let challengeId = statusArr.filter(challenge => {
    //     return challenge.challengeId !== location.state;
    // })




    let event_found;
    const events = useSelector(state => state._event.eventsArr);
    if (locationState) {
        event_found = events.find((challenge) => {
            return location.state === challenge.challenge_name_input
        });
    }

    const [eventDetail, setEventDetail] = useState({
        challenge_name_input: locationState ? event_found.challenge_name_input : "",
        start_date_input: locationState ? event_found.start_date_input : "",
        end_date_input: locationState ? event_found.end_date_input : "",
        task_input: locationState ? event_found.task_input : "",
        description_textarea: locationState ? event_found.description_textarea : "",
        image_input: "",
        level_type_dropdown: locationState ? event_found.level_type_dropdown : ""
    });





    const onChangeHandler = (event) => {
        event.preventDefault();

        const { name, value } = event.target;
        setEventDetail(prevValue => {
            return { ...prevValue, [name]: value };
        });
    }

    const handleClick = (event) => {
        event.preventDefault();

        if(locationState){
            dispatch(editEvent({name:location.state, data:eventDetail}));
        }else{
            dispatch(createEvent(eventDetail));
        }

        
        navigate('/');
    }

    return (
        <div className="container-fluid p-0">
            <h1 className='p-4 bg-light fs-4 fw-bold text-center text-sm-start'>Challenge Details</h1>
            <form className='d-grid gap-4 p-4'>
                <div className='col-12 col-sm-6'>
                    <label htmlFor="challenge-name" className='form-label'>Challenge Name</label>
                    <input className='form-control' type="text" onChange={onChangeHandler} name="challenge_name_input" value={eventDetail.challenge_name_input} id="challenge-name" />
                </div>
                <div className='col-12 col-sm-6'>
                    <label htmlFor="start-date" className='form-label'>Start Date</label>
                    <input className='form-control' type="date" onChange={onChangeHandler} name="start_date_input" value={eventDetail.start_date_input} id="start-date" placeholder='Add start date' />
                </div>
                <div className='col-12 col-sm-6'>
                    <label htmlFor="end-date" className='form-label'>End Date</label>
                    <input className='form-control' type="date" onChange={onChangeHandler} name="end_date_input" value={eventDetail.end_date_input} id="end-date" placeholder='Add end date' />
                </div>
                <div className='col-12 col-sm-6'>
                    <label htmlFor="task" className='form-label'>Task to complete</label>
                    <input className='form-control' type="text" onChange={onChangeHandler} name="task_input" value={eventDetail.task_input} id="task" placeholder='define task here...' />
                </div>
                <div className='col-12 col-sm-9'>
                    <label htmlFor="description" className='form-label'>Description</label>
                    <textarea className='form-control' onChange={onChangeHandler} name="description_textarea" value={eventDetail.description_textarea} id="description" cols="30" rows="10" />
                </div>
                <div className='col-12 col-sm-6'>
                    <label htmlFor="image" className="form-label">Image</label>
                    <input className='form-control' type="file" onChange={onChangeHandler} name="image_input" id="image" />
                </div>
                <div className='col-12 col-sm-3'>
                    <label htmlFor="level-type" className='form-label'>Level Type</label>
                    <select id='level-type' onChange={onChangeHandler} name='level_type_dropdown' className='form-control' value={eventDetail.level_type_dropdown}>
                        <option >...</option>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                </div>
                <button className="btn 
                      card-button text-white 
                      fw-bold text-center col-12 col-sm-4"
                    onClick={handleClick}>
                    {!locationState ? 'Create Challenge' : 'Save changes'}
                </button>
            </form>
        </div>
    )
}

export default CreateChallengeForm;