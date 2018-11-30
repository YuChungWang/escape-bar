import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import './main.scss'

class Nav extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <React.Fragment>
                <nav className="navList">
                    <div className="navItem">工作室列表</div>
                    <div className="navItem">遊戲列表</div>
                    <div className="navItem">本月主打</div>
                    <div className="navItem"><Link className="linkClear" to="/map">密室地圖</Link></div>
                    <div className="navItem">揪團一起玩</div>
                </nav>                
            </React.Fragment>
        );
    }
}
export default Nav;