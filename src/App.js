import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ZipCodeSearch from "./components/ZipCodeSearch";
import AfterSearch from "./components/AfterSearch";
import { Button, NavLink, InputGroup, FormControl, Jumbotron} from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (

    <ZipCodeSearch/>


    );
}


export default App;


