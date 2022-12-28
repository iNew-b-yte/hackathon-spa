import reportWebVitals from './reportWebVitals';
import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components import starts here
const HomeOrChallenges = lazy(() => import("./Routes/HomeOrChallenges"));
const CreateChallengeForm = lazy(() => import("./Routes/CreateChallengeForm"));
const ChallengeDetail = lazy(() => import("./Routes/ChallengeDetail"));



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Suspense fallback={
      <div className="spinner-border 
      text-success
      text-center" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>}>
        <Routes>
          <Route path="/" element={<HomeOrChallenges />} />
          <Route path="/createChallenge" element={<CreateChallengeForm />} />
          <Route path='/challengeDetail' element={<ChallengeDetail />} />
        </Routes>
      </Suspense>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
