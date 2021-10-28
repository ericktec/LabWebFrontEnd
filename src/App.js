import './Styles/App.scss';

import {
  BrowserRouter as Router,
  // Link,
  Switch,
  Route
} from 'react-router-dom';


import Home from './pages/Home/Home';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Matches from './pages/Matches/Matches';

function App() {
  return (
    <div>
      
      <Router>
        <Switch>
          <Route path='/login'>
            <Login/>
          </Route>

          <Route path='/signup'>
            <Signup/>
          </Route>

          <Route path='/dashboard'>
            <Dashboard/>
          </Route>

          <Route path='/matches'>
            <Matches/>
          </Route>

          <Route path='/'>
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>

  );
}

export default App;
