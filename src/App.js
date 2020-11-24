import React, {useEffect} from 'react';
import {useDispatch,useSelector } from 'react-redux'
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat'
import Login from './Login'
import { selectUser } from './features/userSlice'
import { auth } from './firebase'
import { login, logout } from './features/userSlice'


function App() {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)

  useEffect(() => {
     auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //the user is login
        dispatch
        (login({
          uid:authUser.uid,
          photo:authUser.photoURL,
          email:authUser.email,
          displyName:authUser.displayName,
        }))
      } else {
        //user is not logged in 
        dispatch(logout())

      }
    })
  }, [dispatch])


     return ( 
    <div className="app">
      {user ? (
        <div>
        <Sidebar />
          <Chat />
     </div>
      ):
      (
       <Login />
      )}
       
    </div>
  );
}

export default App;
