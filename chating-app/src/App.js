

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home'
import React, { useContext } from 'react';
import {AuthContext} from './context/AuthContext'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
 
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
         
      history.push({pathname: '/login', state: {from: history.location}
    })
      return null
     }
  };

  
function App() {
  return (
   <BrowserRouter>
     <Switch>
      <Route exact path='/'>
          <ProtectedRoute><Home /></ProtectedRoute> 
        </Route>
        <Route path='login' component={Login} />
        <Route path="register" component={Register} />
      
     </Switch>
    </BrowserRouter>
  );
}


export default App;
