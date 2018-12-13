import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import './main.scss'

import {withRouter} from "react-router-dom"; // kai
import Register from '../kaicomponents/register/Register'; // kai

class Header extends Component {
    constructor(props){
        super(props)
    }

    logout(e) {
        e.preventDefault()

        localStorage.removeItem('userId')
        this.props.history.push("/indexbody"); // 導到首頁
    }

    render(){

        const loginRegLink = (
            <ul className="navbar-nav">
                {/* <li className="nav-item">
                    <Link className="nav-link" to="/register">登入|註冊</Link>
                </li> */}

                <li className="nav-item">
                    <button type="button" className="btn btn-outline-light login-style2" data-toggle="modal" data-target="#exampleModal">
                    登入|註冊
                    </button>
                    <br />
                    <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <Register />
                            </div>
                        </div>
                    </div>
                </li>

            </ul>
        )

        const userLink = (
            <React.Fragment>
                <div className="login-style">
                    <Link to="" onClick={this.logout.bind(this)}><span className="login-style">登出</span></Link>
                    <Link to="/center"><span className="login-style">會員中心</span></Link>
                </div>
            </React.Fragment>
        )

        return(
            <React.Fragment>
                <header className="header">
                    <div className="mainLogo">
                        <Link to="/indexbody"><img src="./img/escapebarlogo.png"></img></Link>
                    </div>
                    <div className="memberStatus">
                        {/* <span>登入</span>
                        <span> | </span>
                        <span>註冊</span> */}
                    </div>
                    
                        {localStorage.getItem('userId') ? userLink : loginRegLink}
                        
                </header>

                {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="/">Escape bar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/home">首頁</Link>
                            </li>
                        </ul>
                        {localStorage.getItem('userId') ? userLink : loginRegLink}
                    </div>
                </nav> */}

            </React.Fragment>
        );
    }
}
// export default Header;
export default withRouter(Header); // kai