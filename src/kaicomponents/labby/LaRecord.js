import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import moment from 'moment';
import './LaRecord.scss';

class LaRecord extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <React.Fragment>

                        {
                            this.props.record.map(record =>

                                <div class="row">
                                    <div class="col-3">
                                        <img className="lar_img" src={"../img/game/"+record.IMG_NAME}></img>
                                    </div>
                                    <div class="col-4">
                                        <div><span className="title_name">遊戲名稱：</span>{record.PRO_NAME}</div>
                                        <div><span className="title_name">遊戲紀錄：</span>{record.score}</div>
                                        <div><span className="title_name">遊玩日期：</span>{moment(record.play_date).format("YYYY/MM/DD")}</div>
                                        <div><span className="title_name">遊戲心得：</span>{record.play_review}</div>
                                    </div>

                                    <div class="col-3">
                                        <div><span className="title_name">闖關照片：</span></div>
                                        <img className="lar_img2" src={"http://localhost:3000/images/records/"+record.record_pic}></img>
                                    </div>
                                    
                                    <div class="col-2 align-self-center">
                                        <Link to="/center/record"><button className="btn btn-warning">查看我的紀錄</button></Link>
                                    </div>
                                </div>
                            )
                        }

            </React.Fragment>
        )
    }
}

export default LaRecord;