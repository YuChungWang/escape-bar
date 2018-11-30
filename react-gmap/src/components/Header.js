import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import './main.scss'

class Header extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <React.Fragment>
                <header className="header">
                    <div className="mainLogo">
                        <Link to="/indexbody"><img src="./img/escapebarlogo.png"></img></Link>
                    </div>
                    <div className="memberStatus">
                        <span>登入</span>
                        <span> | </span>
                        <span>註冊</span>
                    </div>
                </header>
            </React.Fragment>
        );
    }
}
export default Header;