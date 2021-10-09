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

function App() {
  return (
    <div>
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
