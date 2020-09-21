import React, { useState, useEffect } from 'react';
import './App.css';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import HomePage from './pages/Homepage';
import { 
  Switch,
  Route,
  useHistory ,
  BrowserRouter 
} from "react-router-dom";


function App() { 
  const history = useHistory()

  // useEffect(() => {
  //   return history.listen((location) => {

  //     if(location.pathname === "/")
  //     {
  //       setsearchString("");
  //     }
  //     // console.log(`You changed the page to: ${location.pathname}`)
  //   })
  // },[history])


  // const [searchString, setsearchString] = useState('');
  // //const [searchval, setsearchval] = useState('');
  // const btnclick = (val: any) => {
  //   setsearchString(val);
  // } 
 
  
  

  return (
    <div className="App">
     <BrowserRouter>
        <Switch>          
            <Route exact path="/"><LoginPage /></Route>            
            <Route exact path="/register">< RegistrationPage /></Route> 
            <Route exact path="/home">< HomePage /></Route> 
        </Switch>
        </BrowserRouter>
    </div>
  );
}
export default App;