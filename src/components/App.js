import React, { useState, useEffect } from 'react';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import { getDatabase, ref, onValue, push as firebasePush } from 'firebase/database';

import { getAuth, onAuthStateChanged } from 'firebase/auth';

import { NavBar } from './NavBar.js';
import { Footer } from './Footer';

import { HomePage } from './HomePage';
import { HotelsPage } from './HotelsPage.js';
import { ActivitiesPage } from './ActivitiesPage.js';
import { DiningPage } from './DiningPage';
import { About } from './About';
import { FormPage } from './FormPage';
import { Quiz } from './Quiz';
import ErrorPage from './ErrorPage.js'
import SignInPage from './SignInPage.js'



export default function App(props) {
  const [cardData, setCardData] = useState([]);
  const [currentUser, setCurrentUser] = useState({"userId": null, "userName": "Log Out"});
  const [quizData, setQuizData] = useState([]);

  useEffect(function() {
    fetch('/data/quiz_data.json')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      setQuizData(data);
    }).catch(function(error) {
      console.log(error);
    })
  }, [])

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (firebaseUser) => {
      if(firebaseUser) {
        console.log("logged in as", firebaseUser.displayName);
        console.log(firebaseUser);
        firebaseUser.userId = firebaseUser.uid
        firebaseUser.userName = firebaseUser.displayName;
        setCurrentUser(firebaseUser);
      } else {
        console.log("logged out");
        setCurrentUser({"userId": null, "userName": "Log Out"});
      }
    })
  }, [])

  useEffect(() => {
    const db = getDatabase(); // calling database
    const allCardsRef = ref(db, "allCards"); // add allCards
    onValue(allCardsRef, (snapshot) => { //snapshot is like a event
      const changedValue = snapshot.val(); // getting new data after changed
      const objKeys = Object.keys(changedValue); //array of strings

      const objArray = objKeys.map((keyString) => {
        const theObj = changedValue[keyString]; //get the object using brackets
        theObj.key = keyString;
        return theObj;
      })

      setCardData( objArray );
    })
  }, []);


  // create addnewCard call back function
  const addNewCard = (newCardObj) => {
    const db = getDatabase();
    const allCardsRef = ref(db, "allCards"); // add allCards
    firebasePush(allCardsRef, newCardObj);
  };



  return (
    <div>
      <NavBar currentUser={currentUser} />
      <Routes>
        <Route index element={<HomePage />} />
        
        <Route path="about" element={<About />} />
        <Route path="hotels" element={<HotelsPage cardData={cardData} />} />
        <Route path="activities" element={<ActivitiesPage cardData={cardData} />} />
        <Route path="dinings" element={<DiningPage cardData={cardData} />} />
        <Route path="quiz" element={<Quiz quizData={quizData} />} />
        <Route path="signin" element={<SignInPage currentUser={currentUser}/>} />
        
        <Route element={<ProtectedPage currentUser={currentUser} />}>
          <Route path="form" element={<FormPage cardData={cardData} addNewCardCallback={addNewCard} currentUser={currentUser} />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  )
}


function ProtectedPage(props) {
  //...determine if user is logged in
  if (props.currentUser.userId === null) { //if no user, send to sign in
    return <Navigate to="/signin" />
  }
  else { //otherwise, show the child route content
    return <Outlet />
  }
}