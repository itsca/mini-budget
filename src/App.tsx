import React, { useState } from 'react';
import './App.css';

import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import { useAuthState } from 'react-firebase-hooks/auth'
// import { Auth } from '@firebase/auth';
// import { FieldPath, query } from '@firebase/firestore';
import { SignIn } from './components/SignIn/SignIn';
import { BudgetList } from './components/budgetList/budgetList';

firebase.initializeApp({
  apiKey: "AIzaSyCDbSvL958r-2fnsDhWiZnEMkb3atejyEk",
  authDomain: "minibudget-511f6.firebaseapp.com",
  projectId: "minibudget-511f6",
  storageBucket: "minibudget-511f6.appspot.com",
  messagingSenderId: "986185224193",
  appId: "1:986185224193:web:895dd65f5e53e13c207000"
})
const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const [user] = useAuthState(auth);
  console.log('User', user);
  return (
    <div className="App">
      <header className="App-header">
        {user && <>
          <p>Welcome {user.displayName} 🌞</p>
          <SignOut/>
          <br/>
        </>}
        {user ? <BudgetList store={firestore} /> : <SignIn auth={auth} />}
      </header>
    </div>
  );
}

function SignOut() {
  return auth.currentUser && (
    <button onClick={() => auth.signOut()}>
      Sign Out
    </button>
  );
}


export default App;
