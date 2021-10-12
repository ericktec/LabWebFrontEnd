import './Styles/App.scss';

import {
  BrowserRouter as Router,
  // Link,
  Switch,
  Route
} from 'react-router-dom';

import Navbar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';

function App() {
  return (
    <div>
      <Navbar/>
      
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

          <Route path='/'>
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>

  );
}

export default App;
