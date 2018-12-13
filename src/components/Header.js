import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import './main.scss'

class Header extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        var menuBtn = document.querySelector(".mobileMenuToggle");
        var mobileMenuOpen = document.querySelector(".mobileMenu").style.display;

        menuBtn.addEventListener("click", function(){
            console.log(mobileMenuOpen);

        })

        // $(".mobileMenuToggle").click(function(){
        //     let mo = $(".mobileMenu").css("display"); 
        //     if(mo==="none"){
        //       $(".mobileMenu").css("display", "block");
        //     } else {
        //       $(".mobileMenu").css("display", "none");
        //     }
        // })
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
                    <div className="mobileMenuToggle">
                        <i class="fas fa-bars"></i>
                    </div>

                </header>
                <div id="mobileMenuBtn" className="mobileMenu">
                    <div className="mobileMenuItem">
                        註冊 | 登入
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
export default Header;