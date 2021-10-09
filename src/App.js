import './Styles/App.scss';

import {
  BrowserRouter as Router,
  // Link,
  Switch,
  Route
} from 'react-router-dom';

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Navbar from './components/NavBar/NavBar';

function App() {
  return (
    <div>
      <Navbar/>
      <Router>

        <Switch>
          <Route path='/home'>
            <Home />
          </Route>

          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/signup'>
            <Signup />
          </Route>

          <Route path='/'>
            <h1>App</h1>
          </Route>
        </Switch>
        
      </Router>
    </div>

  );
}

export default App;
