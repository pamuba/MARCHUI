import './App.css';
import Manatee from './Manatee/Manatee';
import Narwhal from './Narwhal/Narwhal';
import Whale from './Whale/Whale';
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom'

function App() {
  const { search } = useLocation();
  const match = search.match(/type=(.*)/)
  const type = match?.[1]
  return (
    <div className="container">
      <h1>Marine Mamals</h1>
      <BrowserRouter>

        <nav>
          <ul>
            <li><Link to="/manatee">Manatee</Link></li>
            <li><Link to="/narwhal">Narwhal</Link></li>
            <li><Link to="/whale">Whale</Link></l