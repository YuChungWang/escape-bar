import React, {Component} from 'react'
import './pro_buy.scss'
import {BuyFlow,
        BuyerInfo,
        PayType,
        CancelRule,
        ProDetail
} from './pro_buy_components/index.js'

class ProBuy extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: this.props.location.state.id,
      payType: false,
      agreeCheck: false,

    }
  }
  getBuyerInfo = (form) => {
    
  }
  checkPayType = (payType) => {
    this.setState({
      payType
    })
  }
  agreeCheck = (check) => {
    this.setState({
      agreeCheck: check
    })
  }
  payCheck = () => {
    if(!this.state.payType){
      alert("請選擇付款方式")
    }
    if(!this.state.agreeCheck){
      alert("請同意服務條款")
    }
  }
  render(){
    console.log("data:"+this.state.data)
    return(
      <React.Fragment>
        <div id="pro_buy">
          <BuyFlow />
          <div id="buy_body80">
            <div className="body_l">
              <BuyerInfo getBuyerInfo={this.getBuyerInfo}/>
              {/* <BuyerInfoLogin /> */}
              <PayType checkPayType={this.checkPayType}/>
              <CancelRule agreeCheck={this.agreeCheck}/>
              <div id="pay-btn" onClick={this.payCheck}>確認付款</div>
            </div>
            <div className="body_r">
              <ProDetail data={this.state.data} />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}


export default ProBuy