import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import moment from 'moment';
import './LaGroup.scss';

class LaGroup extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <React.Fragment>
                
                {
                    this.props.group.map(group =>

                        <div class="row">
                            <div class="col-3">
                            <img className="lag_img" src={"../img/game/"+group.IMG_NAME}></img>
                            </div>
                            <div class="col-7">
                                <div>您於<span className="date_style"> {moment(group.t_created_at).format("YYYY/MM/DD")} </span>發起了一項揪團</div>
                                <div><span className="name_style">{group.PRO_NAME}</span></div>
                                <div>揪團進度，還差<span className="date_style"> {group.ask_people} </span>名隊友</div>
                                <div>距離揪團截止，還有<span className="date_style"> {moment(group.t_deadline, "YYYYMMDD").fromNow()} </span></div>
                            </div>
                            <div class="col-2 align-self-center">
                                <Link to="/center/group"><button className="btn btn-warning">查看我的揪團</button></Link>
                            </div>
                        </div>

                    )
                }

            </React.Fragment>
        )
    }
}

export default LaGroup;