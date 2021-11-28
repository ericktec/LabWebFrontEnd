import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from 'react-router-dom';


import Home from './pages/Home/Home';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Matches from './pages/Matches/Matches';
import Details from './pages/Details/Details';
import { useState, useEffect } from 'react';
import axios from 'axios';

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>)
}

function App() {

  const history = useHistory();
  const [loggedIn, setLoggedIn] = useState({
    signIn: false,
    userInfo: {
      userName: ''
    }
  });


  useEffect(() => {
    async function checkUserLoggedIn() {
      try {
        const response = await axios({
          method: 'get',
          withCredentials: true,
          url: 'http://127.0.0.1:3000/auth/checkLoggedIn'
        });
        const data = response.data;
        if (data.status === 'loggedIn') {
          setLoggedIn({
            signIn: true,
            userInfo: {
                userName: response.data.user.name
            }
        })
          return history.push('/dashboard');
        }else {
          localStorage.setItem('logIn', false);
          localStorage.setItem('userName', '');
        }
        console.log(response.data)
      } catch (error) {
        console.log(error);
        localStorage.setItem('logIn', false);
        localStorage.setItem('userName', '');
      }

    }
    checkUserLoggedIn();
    
  }, [loggedIn.signIn, history]);

  return (
    <>
      <Switch>
        <Route path='/login'>
          <Login setLoggedIn={setLoggedIn} />
        </Route>

        <Route path='/details'>
          <Details loggedIn={loggedIn} />
        </Route>

        <Route path='/signup'>
          <Signup loggedIn={loggedIn} />
        </Route>

        <Route path='/matches'>
          <Matches loggedIn={loggedIn} />
        </Route>

        <Route path='/dashboard'>
          <Dashboard loggedIn={loggedIn} />
        </Route>

        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </>

  );
}

export default AppWrapper;
