import './App.css';
import Manatee from './Manatee/Manatee';
import Narwhal from './Narwhal/Narwhal';
import Whale from './Whale/Whale';
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="container">
      <h1>Marine Mamals</h1>
      <BrowserRouter>

        <nav>
          <ul>
            <li><Link to="/manatee">Manatee</Link></li>
            <li><Link to="/narwhal">Narwhal</Link></li>
            <li><Link to="/whale">Whale</Link></li>
            {/* <li><Link to="/whale?type=beluga">Beluga Whale</Link></li>
            <li><Link to="/whale?type=blue">Blue Whale</Link></li> */}
             <li><Link to="/whale/beluga">Beluga Whale</Link></li>
            <li><Link to="/whale/blue">Blue Whale</Link></li>
          </ul>
        </nav>

      
       <Switch>
        <Route path="/manatee">
            <Manatee />
        </Route>
        <Route path="/narwhal">
            <Narwhal />
        </Route>

        <Route path="/whale/:type">
            <Whale />
        </Route>
        
        <Route path="/whale">
            <Whale />
        </Route>
        
       </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
