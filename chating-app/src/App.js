import React from 'react'
import Home from './Pages/Home'

function App() {
    return (
        <div>
          <Home />
        </div>
    )
}




/*
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home'
import { useContext } from 'react';
import {AuthContext} from './context/AuthContext'


function App() {

  const {currentUser} = useContext(AuthContext);
  

 const ProtectedRoute = ({children}) => {
    if (!currentUser) {
      return <Redirect to="/login" />;
  }
    return children;
  };

  return (
  
   <BrowserRouter>
     <Switch>
      <Route path='/'>
        <Route  component={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path='login' component={<Login />} />
        <Route path="register" component={<Register />} />
      </Route>
     </Switch>
    </BrowserRouter>
  );
}

*/
export default App;
