import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

//reducers
import eventReducer from './Reducer/eventDetails';
import statusReducer from './Reducer/status';

import reportWebVitals from './reportWebVitals';

// Components import starts here
const HomeOrChallenges = lazy(() => import("./Routes/HomeOrChallenges"));
const CreateChallengeForm = lazy(() => import("./Routes/CreateChallengeForm"));
const ChallengeDetail = lazy(() => import("./Routes/ChallengeDetail"));

const store = configureStore({
  reducer: {
    _event : eventReducer,
    _status: statusReducer
  },
});



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <Router>
        <Suspense fallback={
          <div id="spin" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>}>
          <Routes>
            <Route path="/" element={<HomeOrChallenges />} />
            <Route path="/createChallenge" element={<CreateChallengeForm />} />
            <Route path='/challengeDetail/:challengeId' element={<ChallengeDetail />} />
          </Routes>
        </Suspense>
      </Router>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
