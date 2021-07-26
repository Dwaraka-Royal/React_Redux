import React, { Component } from "react";
import {Switch,Route,Link} from 'react-router-dom';
import Home from '../Components/Home';
import About from '../Components/About';
import Contact from '../Components/Contact';
import './NavBar.scss'
class NavBar extends Component {   
  render() {
    return (
      <div>
          <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
        </ul>
      </nav>
      <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/About" component={About}/>
            <Route path="/Contact" component={Contact}/>
        </Switch>
      </div>
    );
  }
}

export default NavBar;



