import React, { Component } from 'react';
import './Order.scss';
import moment from 'moment';

class OrderListCancel extends Component {
    constructor(props){
        super(props)
        console.log("===MemberList===");
        console.log(this.props.members);
    }

    render(){
        return(
            <React.Fragment>
                

                {
                    this.props.members2.map(member =>

                        <div class="row mb-3">
                            <div class="col-3">
                                <img className="order_img" src={"../img/game/"+member.IMG_NAME}></img>
                            </div>
                            <div class="col-3">
                                <div><span className="order_title_items">遊戲名稱：</span>{member.PRO_NAME}</div>
                                <div><span className="order_title_items">日期時間：</span>{moment(member.DATE).format("YYYY/MM/DD")}</div>
                                <div><span className="order_title_items">遊玩人數：</span>{member.PEOPLE_NUM}人</div>
                                <div><span className="order_title_items">付款方式：</span>{member.PAY_TYPE}</div>
                                <div><span className="order_title_items">付款金額：</span>{member.T_PRICE}元</div>
 
                            </div>
                            <div class="col-4">
                                <div><span className="order_title_items">工作室名稱：</span>{member.c_name}</div>
                                <div><span className="order_title_items">遊戲地址：</span>{member.s_add}</div>
                                <div><span className="order_title_items">訂單狀態：</span><span className="order_status2_item">{member.STATUS_NAME}</span></div>
                            </div>
                            <div class="col-2 align-self-center">
                            
                            </div>
                        </div>

                    )
                }

            </React.Fragment>
        )
    }
}

export default OrderListCancel;