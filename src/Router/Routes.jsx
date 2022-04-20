import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Main from '../Components/Main/Main';
import Signin from '../Components/Signup/Signup';
import Login from '../Components/Login/Login';
import TodoAdd from '../Components/Todos/TodoAdd';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<TodoAdd/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/signin' element={<Signin />} />
    </Routes>
  )
}

export default AllRoutes