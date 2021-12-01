import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import Body from '../components/body/body';
import Login from './login/login';
import User from './profile/profile';




export default function Root() {
    return (

        <Router>
            <Routes>
                <Route  path="/" element={<Body/>} />
                <Route  path="/login" element={<Login />} />
                <Route path='/user' element={<User/>} />
            </Routes>
        </Router>
    )
}