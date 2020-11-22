import React from 'react';
import {useSelector } from 'react-redux'
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat'
import Login from './Login'
import { selectUser } from './features/userSlice'

function App() {
  const user = useSelector(selectUser)
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
