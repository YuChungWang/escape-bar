import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'
import IndexBody from './components/IndexBody'
import EscapeRoomMap from './components/Map'
import Article from './components/Article'
// import InfoWindow from './components/practice/InfoWindow'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <setcion>
          <Header/>
          <Nav/>
          <Route exact path="/" component={IndexBody} />
          <Route path="/map" component={EscapeRoomMap} /> */}
          {/* <IndexBody/> */}
          {/* <EscapeRoomMap/> */}
          <Footer/>
        </setcion>
      </BrowserRouter>
    );
  }
}
export default App;