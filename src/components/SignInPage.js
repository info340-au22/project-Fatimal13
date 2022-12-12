import React from 'react';
import { Navigate } from 'react-router-dom';

import { getAuth, EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { StyledFirebaseAuth } from 'react-firebaseui';

export default function SignInPage(props) {
  const currentUser = props.currentUser;

  const auth = getAuth();

  const configObj = {
    signInOptions: [
      {
        provider: EmailAuthProvider.PROVIDER_ID,
        requireDisplayName: true,
      },
      {
        provider: GoogleAuthProvider.PROVIDER_ID
      }
    ],
    signInFlow: 'popup',
    callbacks: {
      signInSuccessWithAuthResult: () => false
    },
    credentialHelper: 'none'
  }

  //a bit hacky, doesn't totally
  if(currentUser.userId) { //if I'm signed in
    return <Navigate to="/" />
  }

  return (
    <div>
      <header>
        <h1>SIGN IN</h1>
      </header>
      <div className="card bg-light signin-container">
        <div className="container card-body">
          <StyledFirebaseAuth firebaseAuth={auth} uiConfig={configObj} />
        </div>
      </div>
    </div>
  )
}