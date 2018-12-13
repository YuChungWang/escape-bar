import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import './main.scss'

import {withRouter} from "react-router-dom"; // kai
import Register from '../kaicomponents/register/Register'; // kai

class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            mobileMenuStatus: false,
        }
    }

    logout(e) {
        e.preventDefault()

        localStorage.removeItem('userId')
        this.props.history.push("/indexbody"); // 導到首頁
    }

    mobileMenuOpen(){
        this.setState({
            mobileMenuStatus: true,
        })
    }
    mobileMenuClose(){
        this.setState({
            mobileMenuStatus: false,
        })
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
        
        // let mobileMenuToggle = this.state.mobileMenuStatus ? "mobileMenuOpen" : "" ;

        return(
            <React.Fragment>
                <header className="header">
                    <div className="mainLogo">
                        {/* <Link to="/indexbody"><img src="./img/escapebarlogo.png"></img></Link> */}
                        <Link to="/indexbody"><img src={require(`../images/Group6.svg`)}></img></Link>
                    </div>
                    <div className="memberStatus">
                        {/* <span>登入</span>
                        <span> | </span>
                        <span>註冊</span> */}
                    </div>
                    
                        {/* {localStorage.getItem('userId') ? userLink : loginRegLink} */}
                        

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

                    <div className={`mobileMenuOpenBtn ${this.state.mobileMenuStatus ? "d_none" : "d_block"}`} onClick={this.mobileMenuOpen.bind(this)}>
                        <i class="fas fa-bars"></i>
                    </div>
                    <div className={`mobileMenuCloseBtn ${this.state.mobileMenuStatus ? "d_block" : "d_none"}`} onClick={this.mobileMenuClose.bind(this)}>
                        <i class="fas fa-times"></i>
                    </div>
                </header>
                <div id="" className={`mobileMenu ${this.state.mobileMenuStatus ? "d_block" : ""}`}>

                    <div className="mobileMenuItem">
                        登入 | 註冊
                    </div>
                    <div className="mobileMenuItem">
                        <ul className="mobileMenuItemChild">主要功能
                            <Link className="" to="/proList"><li className="mobileMenuItemChildList">找遊戲</li></Link>
                            <li className="mobileMenuItemChildList">找工作室</li>
                            <Link className="" to="/article/topic201812"><li className="mobileMenuItemChildList">本月主打</li></Link>
                            <Link className="" to="/map"><li className="mobileMenuItemChildList">用地圖找</li></Link>
                            <li className="mobileMenuItemChildList">揪團一起玩</li>
                        </ul>
                    </div>
                    <div className="mobileMenuItem">
                        <ul className="mobileMenuItemChild">關於密室逃脫
                            <Link className="" to="/article/whatisrealescape"><li className="mobileMenuItemChildList">什麼是密室逃脫</li></Link>
                            <Link className="" to="/article/groupactivity"><li className="mobileMenuItemChildList">福委活動與教育訓練</li></Link>
                            {/* <li className="">密室逃脫的二三事</li> */}
                        </ul>
                    </div>
                    <div className="mobileMenuItem">關於逃脫吧</div>
                    <div className="mobileMenuItem">與我們聯繫</div>
                </div>
            </React.Fragment>
        );
    }
}
// export default Header;
export default withRouter(Header); // kai