import React from 'react';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

// import component(s)
import ChallengeCard from '../components/ChallengeCard';
import ObjectiveCard from '../components/ObjectiveCard';

// import image
import rocket from '../assets/rocket.png';
import ai from "../assets/ai.png";
import person from "../assets/person.png";
import healing from "../assets/healing.png";

// import data
import cardsData from "../data/_objectiveCard.js";

function HomeOrChallenges() {
    const events = useSelector(state => state._event.eventsArr );
    console.log(events);
    // const [click, setClick] = useState(false);

    // function handleClick(){
    //     setClick((prevValue)=>{
    //         return !prevValue;
    //     });
    // }


    

    return (
        <>
            <section id="achievements"
                className='achievements 
                    container-fluid                     
                    p-5'                
            >
                <div className='row text-md-start text-center'>
                    <div className="col-md-7">
                        <h1
                            className='border-start 
                        border-warning 
                        border-5 
                        
                        fw-bold 
                        px-2 px-sm-5 
                        text-white
                        '
                        >
                            Accelerate Innovation with Global AI Challenges
                        </h1>
                        <p className='text-white px-0 px-sm-5 mt-4 subText'>AI Challenges at DPhi simulate real-world problems.
                            It is a great place to put your AI/Data Science skills
                            to test on diverse datasets allowing you to foster
                            learning through competitions.</p>
                        <Link to='/createChallenge'>
                            <button
                                type='button'
                                className='btn btn-sm 
                        border-primary 
                        rounded 
                        bg-white 
                        fw-bold 
                        text-primary 
                        p-2
                        mt-3
                        ms-0
                        ms-md-5                  
                       '
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
                        <input type="text" className='form-control rounded-pill custom-input ps-5' placeholder='Search' />
                    </div>
                    <div className='col-sm-12 col-md-4 text-center pe-md-5'>
                        <button data-bs-toggle='collapse'
                            data-bs-target='#filterOptions'
                            type='button'                            
                            className='btn btn-outline-dark bg-light text-dark mt-3 mt-md-0 w-50 rounded-pill'>
                            Filter
                        </button>
                    </div>
                    <div id='filterOptions' className='collapse bg-light text-dark'>
                        data data data data
                    </div>
                </div>


                <div className="row p-5 m-0 mt-5 ">

                {events.map(event => {
                   return <ChallengeCard key={event.challenge_name_input}
                   id={event.challenge_name_input}
                    heading={event.challenge_name_input} 
                    img_src={event.image_input} />
                })}
                    {/* <ChallengeCard />
                    <ChallengeCard />
                    <ChallengeCard />
                    <ChallengeCard /> */}
                    


                </div>
            </section>
        </>
    )
}

export default HomeOrChallenges;