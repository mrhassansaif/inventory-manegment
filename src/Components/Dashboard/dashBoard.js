import { React, useState } from 'react'

import { auth, onAuthStateChanged, doc, getDoc, db, updateDoc } from "../FirebaseConfig/firebaseConfig";

let snapData;
export default function DashBoard() {
  const [data, setdata] = useState()

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const ref = doc(db, "Users", user.uid);
      const docSnap = getDoc(ref)
        .then((snapshot) => {
          snapData = snapshot.data()
          console.log(snapData.name)
          const uid = user.uid
          console.log(uid)
          setdata(snapData.name)
        })
   } else {
      console.log("error");
    }
  });
  return (
    <div>Welcome {data}</div>
  )
}
