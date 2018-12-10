import React, { Component } from 'react';
import {BrowserRouter, Route, Link, NavLink} from 'react-router-dom'
import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'
import IndexBody from './components/IndexBody'
import EscapeRoomMap from './components/Map'
import Article from './components/Article'
// import InfoWindow from './components/practice/InfoWindow'

//ming
import './App.scss';
import Products from './mingcomponents/products/products.js';
import ProList from './mingcomponents/pro_list/pro_list.js';
import ProBuy from './mingcomponents/pro_buy/pro_buy.js';
//

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <section>
          <Header/>
          <Nav/>
          <Route exact path="/" component={IndexBody} />
          <Route path="/indexbody" component={IndexBody} />
          <Route path="/map" component={EscapeRoomMap} />
          <Route path="/article/:articlename" component={Article}/>
          <Route exact path="/proList" component={ProList} />
          <Route exact path="/proList/products/:ID" component={Products} /> 
          <Route path="/proList/products/reservation/:ID" component={ProBuy} />
          {/* <IndexBody/> */}
          {/* <EscapeRoomMap/> */}
          <Footer/>
        </section>
      </BrowserRouter>
    );
  }
}
export default App;