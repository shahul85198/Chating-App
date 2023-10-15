

import './App.css';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home';
import React, { useContext } from 'react';
import {AuthContext} from './context/AuthContext';

import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';


 const ProtectedRoute = ({children}) => {

  const {currentUser} = useContext(AuthContext);
  const history = useHistory();
  

     if (currentUser) {

    return (
      <Route>
        {children}
      </Route> 
  
      ) 
     } else {
         
      history.push( '/login') 
    }
      return null
     }
  

  
function App() {
  return (
   <BrowserRouter>
     <Switch>
      <Route exact path='/'>
          <ProtectedRoute>
          <Home />
          </ProtectedRoute> 
        </Route>
        <Route exact path='login' component={Login} />
        <Route exact path="register" component={Register} />
      
     </Switch>
    </BrowserRouter>
  );
}


export default App;
