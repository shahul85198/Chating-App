
import { BrowserRouter, useHistory, Route, Routes } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home'
import React, { useContext } from 'react';
import {AuthContext} from './context/AuthContext'


function App() {

  const {currentUser} = useContext(AuthContext);

  const ProtectedRoute = ({children}) => {
    if (!currentUser) {
      return <useHistory to='/login'/>;
    }
    return children
  };


  return (
    <BrowserRouter>
     <Routes>
      <Route path='/'>
        <Route index element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path='login' element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
     </Routes>
    </BrowserRouter>
  );
}


export default App;
