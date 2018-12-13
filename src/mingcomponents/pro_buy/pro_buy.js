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
      BuyerInfo: false,

    }
    this.buyerInfoRef = React.createRef()
  }
  //拿到購買人資料
  getBuyerInfo = (form) => {
    this.setState({
      BuyerInfo: form
    })
  }
  //選擇付款方式
  checkPayType = (payType) => {
    this.setState({
      payType
    })
  }
  //按下同意條款
  agreeCheck = (check) => {
    this.setState({
      agreeCheck: check
    })
  }
  //scroll to 表單
  scrollToForm = () => {
    window.scrollTo({
      top: this.buyerInfoRef.current.offsetTop -80 ,
    })
  }
  //按下預約
  payCheck = () => {
    let {BuyerInfo, data} = this.state
    //表單都沒填寫
    if(!BuyerInfo){
      console.log(this.buyerInfoRef.current.offsetTop)
      this.scrollToForm()
      return
    }
    //姓名沒填寫
    if(BuyerInfo.nickname === ""){
      this.scrollToForm()
      return
    }
    //信箱沒填寫
    if(BuyerInfo.email === ""){
      this.scrollToForm()
      return
    }
    //密碼沒填寫
    if(BuyerInfo.password === ""){
      this.scrollToForm()
      return
    }
    //填寫沒手機
    if(BuyerInfo.mobile === ""){
      this.scrollToForm()
      return
    }
    //選擇付款方式確認
    if(!this.state.payType){
      alert("請選擇付款方式")
      return
    }
    //同意條款確認
    if(!this.state.agreeCheck){
      alert("請同意服務條款")
      return
    }
    //沒登入會員 購買
    if(!BuyerInfo.login){
      let info = this.state.BuyerInfo
      if(info.password !== info.password2){
        alert("確認密碼錯誤")
        return
      }
      let nowUid = "u"+Math.floor(Math.random()*1000)+1;
      let user = {uid: nowUid,
                  nickname: info.nickname, 
                  email: info.email, 
                  password: info.password, 
                  mobile: info.mobile}
      console.log(JSON.stringify(user))
      // 註冊成新會員
      fetch('http://localhost:3000/eb/buy/register' ,{
        method:'POST',
        mode: "cors",
        body: JSON.stringify(user), 
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      })
      .then(res => res.json()) 
      .then(result => {
        console.log(result.message)
        switch(result.message){
          case "email重複":
            alert("email重複")
            break
          case "註冊成功":
            alert("註冊成功")
            let list = {
              STOCK_SID: data.nowDateSid,
              UID: nowUid,
              PEOPLE_NUM: data.number,
              T_PRICE: (data.data.PRICE*data.number),
              PAY_TYPE: this.state.payType,
              STATUS: 1,
              CID: data.data.CID,
              COMM: BuyerInfo.comment
            }
            console.log(list)
            //新增購買清單 & 修改庫存
            fetch('http://localhost:3000/eb/buy/buyList' ,{
              method:'POST',
              mode: "cors",
              body: JSON.stringify(list), 
              headers: new Headers({
                'Content-Type': 'application/json'
              })
            }).then(res => res.json())
            .then(results => {
              console.log(results.message)
            })
            break
          default:
            break
        }
        //會員登入購買
        let loginList = {
          STOCK_SID: data.nowDateSid,
          UID: "STORAGE",
          PEOPLE_NUM: data.number,
          T_PRICE: (data.data.PRICE*data.number),
          PAY_TYPE: this.state.payType,
          STATUS: 1,
          CID: data.data.CID,
          COMM: BuyerInfo.comment
        }
        fetch('http://localhost:3000/eb/buy/buyList' ,{
          method:'POST',
          mode: "cors",
          body: JSON.stringify(loginList), 
          headers: new Headers({
            'Content-Type': 'application/json'
          })
        }).then(res => res.json())
        .then(results => {
          console.log(results.message)
        })
      })
    }

  }
  render(){
    console.log("data:"+this.state.data.data.CID)
    return(
      <React.Fragment>
        <div id="pro_buy" >
          <BuyFlow />
          <div id="buy_body80">
            <div className="body_l">
              <BuyerInfo getBuyerInfo={this.getBuyerInfo} refProp={this.buyerInfoRef}/>
              <PayType checkPayType={this.checkPayType} warn={this.state.payType}/>
              <CancelRule agreeCheck={this.agreeCheck} warn={this.state.agreeCheck}/>
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