
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home'
import React, { useContext } from 'react';
import {AuthContext} from './context/AuthContext'


function App() {
 
 const ProtectedRoute = ({children}) => {
  
  const {currentUser} = useContext(AuthContext);
    if (!currentUser) {
      return <Redirect to="/login" />;
  }
    return children;
  };
  return (
   <BrowserRouter>
     <Switch>
      <Route path='/'>
          <ProtectedRoute><Home /></ProtectedRoute> 
        </Route>
        <Route path='login' component={Login} />
        <Route path="register" component={Register} />
      
     </Switch>
    </BrowserRouter>
  );
}


export default App;
