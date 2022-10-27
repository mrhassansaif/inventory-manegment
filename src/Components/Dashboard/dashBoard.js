import React from 'react'

import { auth, onAuthStateChanged, doc, getDoc, db, updateDoc } from "../FirebaseConfig/firebaseConfig";


export default function DashBoard() {

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const ref = doc(db, "users", user.uid);
      const docSnap = getDoc(ref)
      .then((snapshot) => {
        snapData = snapshot.data()
        console.log(snapData.name)
        uid = user.uid
        console.log(uid)

      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      // const uid = user.uid;
      // console.log(user.uid)
      // ...
    } 
  }
    else {
      // User is signed out
      // ...
    }
  });
  return (
    <div>Welcome </div>
  )
}
