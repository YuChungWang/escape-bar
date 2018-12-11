import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './LaCollect.scss';

class LaCollect extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <React.Fragment>
                    <div className="d-flex flex-wrap">
                        {
                            this.props.collect.map(collect =>

                                <div className="card laccard mr-4 ml-4 mb-2 mt-3">

                                    <img className="card-img-top lacimg" src={"../img/game/"+collect.IMG_NAME}></img>

                                    <div className="lacclogo">
                                        <img className="lac-circle" src={"../img/company/40/"+collect.c_logo}></img>
                                    </div>
                                    
                                    <div className="card-body lac_title">
                                        <p className="card-text">{collect.PRO_NAME}</p>
                                    </div>
                                </div>

                            )
                            
                        }
                    </div>
                    <div class="row">
                        <div class="col-10"></div>
                        <div class="col-2 align-self-center">
                            <Link to="/center/collect"><button className="btn btn-warning">查看我的收藏</button></Link>
                        </div>
                    </div>
            </React.Fragment>
        )
    }
}

export default LaCollect;