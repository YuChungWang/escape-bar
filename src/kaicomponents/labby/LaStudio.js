import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './LaStudio.scss';

class LaStudio extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <React.Fragment>

                    <div className="d-flex flex-wrap">
                        {
                            this.props.studio.map(studio =>

                                <div className="las-items mr-5 mb-2">
                                    <a href={studio.c_facebook} target="_blank"><img className="las-circle" src={"../img/company/origin/"+studio.c_logo}></img></a>
                                    <div className="las-center">{studio.c_name}</div>
                                </div>

                            )
                        }
                    </div>

                    <div class="row">
                        <div class="col-10"></div>
                        <div class="col-2 align-self-center">
                            <Link to="/center/studio"><button className="btn btn-warning">查看我的追蹤</button></Link>
                        </div>
                    </div>

            </React.Fragment>
        )
    }
}

export default LaStudio;