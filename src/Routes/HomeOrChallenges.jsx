import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

// import component(s)
import ChallengeCard from '../components/ChallengeCard';
import ObjectiveCard from '../components/ObjectiveCard';
import CheckedOptions from '../components/CheckedOptions';

// import image
import rocket from '../assets/rocket.png';
import ai from "../assets/ai.png";
import person from "../assets/person.png";
import healing from "../assets/healing.png";

// import data
import cardsData from "../data/_objectiveCard.js";

function HomeOrChallenges() {
    const events = useSelector(state => state._event.eventsArr);
    const status = useSelector(state => state._status.statusArr);

    //stores the 'checked' input tags
    const [target, setTarget] = useState([]);
    

    //for filter options
    const [checked, setChecked] = useState([]);
    const [checkFilterEvents, setCheckFilterEvents] = useState([]);

    //for search bar
    const [searchTxt, setSearchTxt] = useState("");
    const [searchEvents, setSearchEvent] = useState([]);

    //for filter options
    const onCheckedHandler = (e) => {
        var updatedList = [...checked];
        setTarget(prevValue => {
            return [...prevValue, e.target];
        });

        if (e.target.checked) {
            updatedList = [...checked, e.target.value];
        } else {
            updatedList.splice(checked.indexOf(e.target.value), 1);
        }
        setChecked(updatedList);

    }

    //for filtering events based on filter options
    useEffect(() => {    
        // let data = events.filter((x) =>{
        //     return status.find(item => {
        //        return item.challengeId === x.challenge_name_input && checked.find(i =>{
        //         return item.challengeStatus === i;
        //        });
        //     });
        // });    
        let checkedEvents = events.filter((x) => {
            return x.level_type_dropdown === checked.find((item) => item === x.level_type_dropdown)|| status.find(item => {
                return item.challengeId === x.challenge_name_input && checked.find(i =>{
                 return item.challengeStatus === i;
                });
             });  ;
        });               
        setCheckFilterEvents(checkedEvents);
        
    }, [checked, events, status]);



    //for search bar filtering
    const changeHandler = (e) => {
        e.preventDefault();
        setSearchTxt(e.target.value);
        filteredEvent(e.target.value);
    }

    const filteredEvent = (value) => {
        if (value.length === 0) {
            setSearchEvent([]);
            return;
        };
        setSearchEvent(events.filter(event => {
            return event.challenge_name_input.search(value) !== -1;
        }));
    }

    //sent as prop to 'CheckedOptions' component, deletes the value from the array when clicked
    const onDelete = (id) => {
        
        const foundTarget = target.find(x => x.value === id);

        //marks the input tags as 'unchecked'  
        foundTarget.checked = false;

        //removes the 'unchecked' input tag values from the array
        setChecked(prevValue => {
            return prevValue.filter(check => {
                return check !== id;
            })
        });
    }

    //originalEvents : events created using 'Create Challenge' btn on homepage
    const originalEvents = events.map(event => {
        return <ChallengeCard key={event.challenge_name_input}
            id={event.challenge_name_input}
            heading={event.challenge_name_input}
            img_src={event.image_input}
            start_date={event.start_date_input}
            end_date={event.end_date_input}
        />
    });

    //searchedEvents : when searched using the search bar
    const searchedEvents = searchEvents.map(event => {
        return <ChallengeCard key={event.challenge_name_input}
            id={event.challenge_name_input}
            heading={event.challenge_name_input}
            img_src={event.image_input}
            start_date={event.start_date_input}
            end_date={event.end_date_input}
        />
    });

    //checkedEvent : 'checked' input tag values checked in the filter options
    const checkedEvent = checkFilterEvents.map(event => {
        return <ChallengeCard key={event.challenge_name_input}
            id={event.challenge_name_input}
            heading={event.challenge_name_input}
            img_src={event.image_input}
            start_date={event.start_date_input}
            end_date={event.end_date_input}
        />
    });

    //Final events array result to display based on action performed
    let eventResult = searchTxt.length !== 0 ? searchedEvents : checkFilterEvents.length !== 0 ? checkedEvent : originalEvents;
    return (
        <>
            <section id="achievements" className='achievements container-fluid p-5'>
                <div className='row text-md-start text-center'>
                    <div className="col-md-7">
                        <h1 className='border-start 
                            border-warning border-5 
                            fw-bold px-2 px-sm-5 
                            text-white'
                        >
                            Accelerate Innovation with Global AI Challenges
                        </h1>
                        <p className='text-white px-0 px-sm-5 mt-4 subText'>AI Challenges at DPhi simulate real-world problems.
                            It is a great place to put your AI/Data Science skills
                            to test on diverse datasets allowing you to foster
                            learning through competitions.</p>
                        <Link to='/createChallenge'>
                            <button type='button'
                                className='btn btn-sm 
                                border-primary rounded 
                                bg-white fw-bold 
                                text-primary p-2
                                mt-3 ms-0 ms-md-5'
                            >
                                Create Challenge
                            </button>
                        </Link>
                    </div>
                    <div className="col-md-5 text-center">
                        <img className='img-fluid' src={rocket} alt="rocket-take-off" />
                    </div>
                </div>
                <div className='row text-center mt-md-5 mt-lg-0'>
                    <div className="col-sm-12 col-md-4 text-white">
                        <div className="row">
                            <div className="col-12 col-md-6 text-center text-md-end">
                                <img src={ai} alt="ai-png" />
                            </div>
                            <div className="col text-center text-md-start">
                                <h1 className='fs-4 text-white'>100K+</h1>
                                <p className='text-white custom-fontSize'>AI model submissions</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 text-white">
                        <div className="row">
                            <div className="col-12 col-md-6 text-center text-md-end">
                                <img src={person} alt="person-png" />
                            </div>
                            <div className="col text-center text-md-start">
                                <h1 className='fs-4 text-white'>50K+</h1>
                                <p className='text-white custom-fontSize'>Data Scientists</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 text-white">
                        <div className="row">
                            <div className="col-12 col-md-6 text-center text-md-end">
                                <img src={healing} alt="healing-png" />
                            </div>
                            <div className="col text-center text-md-start">
                                <h1 className='fs-4 text-white'>100+</h1>
                                <p className='text-white custom-fontSize'>AI Challenges hosted</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>








            <section id="objectives" className='container-fluid p-5'>
                <h1 className='text-dark fw-bold text-center mb-5'>Why Participate in <span className='text-success'>AI Challenges?</span></h1>
                <div className="row gap-3 gap-md-4 justify-content-center ">

                    {cardsData.map(data => {
                        return <div key={data.id} className="col-12 col-md-5 rounded bg-light pt-3 pt-md-5 ps-3 text-center text-sm-start">
                            <ObjectiveCard _src={data.img} heading={data.heading} content={data.content} />
                        </div>
                    })}

                </div>
            </section>





            <section id="challenges-List" className='container-fluid p-0 pb-5'>
                <h1 className='fs-4 text-center p-4 text-white'>Explore Challenges</h1>
                <div className='row m-0 mx-0 mx-md-5'>
                    <div className="col-sm-12 col-md-8 text-end  px-5 px-md-0 ps-md-5">
                        <input type="text" className='form-control rounded-pill custom-input ps-5' placeholder='Search' onChange={changeHandler} value={searchTxt} />
                    </div>
                    <div className='col-sm-12 col-md-4 text-center pe-md-5'>
                        <button data-bs-toggle='collapse'
                            data-bs-target='#filterOptions'
                            type='button'
                            className='btn btn-outline-dark bg-light text-dark mt-3 mt-md-0 w-50 rounded-pill'>
                            Filter
                        </button>
                    </div>
                    <ul className='d-flex list-unstyled flex-wrap mt-3 justify-content-center'>
                        {checked.map(check => {
                            return <CheckedOptions key={check} id={check} option={check} deleteFn={onDelete} />
                        })}
                    </ul>
                    <div id='filterOptions' className='collapse bg-light text-dark'>
                        <hr />
                        Status
                        <label className='d-block'>
                            <input type="checkbox" name="Active" value="Active" id="active" onChange={onCheckedHandler} />
                            : Active
                        </label>
                        <label className='d-block'>
                            <input type="checkbox" name="Upcoming" value="Upcoming" id="upcoming" onChange={onCheckedHandler} />
                            : Upcoming
                        </label>
                        <label className='d-block'>
                            <input type="checkbox" name="Past" value="Past" id="past" onChange={onCheckedHandler} />
                            : Past
                        </label>

                        <hr />
                        Level
                        <label className='d-block'>
                            <input type="checkbox" name="Easy" value="Easy" id="easy" onChange={onCheckedHandler} />
                            : Easy
                        </label>
                        <label className='d-block'>
                            <input type="checkbox" name="Medium" value="Medium" id="medium" onChange={onCheckedHandler} />
                            : Medium
                        </label>
                        <label className='d-block'>
                            <input type="checkbox" name="Hard" value="Hard" id="hard" onChange={onCheckedHandler} />
                            : Hard
                        </label>
                    </div>
                </div>
                <div className="row p-5 m-0 mt-5 ">
                    {eventResult}
                </div>
            </section>
        </>
    )
}

export default HomeOrChallenges;