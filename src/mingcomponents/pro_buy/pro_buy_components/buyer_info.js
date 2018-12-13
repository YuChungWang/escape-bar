import React, {Component} from 'react'
import './buyer_info.scss'

class BuyerInfo extends Component {
  constructor(props){
    super(props)
    this.state = {
      login: false,
      nickname: "",
      email: "",
      password: "",
      password2: "",
      mobile: "",
      comment: "",
    }
  }
  nameChange = (evt) => {
    let nickname = evt.target.value
    this.setState({
      nickname
    }, () => {
      this.props.getBuyerInfo(this.state)
    })
  }
  emailChange = (evt) => {
    let email = evt.target.value
    this.setState({
      email
    }, () => {
      this.props.getBuyerInfo(this.state)
    })
  }
  passwordChange = (evt) => {
    let password = evt.target.value
    this.setState({
      password
    }, () => {
      this.props.getBuyerInfo(this.state)
    })
  }
  password2Change = (evt) => {
    let password2 = evt.target.value
    this.setState({
      password2
    }, () => {
      this.props.getBuyerInfo(this.state)
    })
  }
  mobileChange = (evt) => {
    let mobile = evt.target.value
    this.setState({
      mobile
    }, () => {
      this.props.getBuyerInfo(this.state)
    })
  }
  commentChange = (evt) => {
    let comment = evt.target.value
    this.setState({
      comment
    }, () => {
      this.props.getBuyerInfo(this.state)
    })
  }
  render(){
    let login = this.state.login ? "d-none" : ""
    return(
      <React.Fragment>
        <div id="buyer_info" ref={this.props.refProp}>
          <div className="title">
            <h3>購買人資料</h3>
            <div className={`tip ${login}`}>快好了！只要在標有<span>*</span>的欄位填入資訊就註冊成<u>會員</u>喽~</div>
          </div>
          <div id="info_form">
            <div className="for_label">
              <label><span>*</span>姓名</label>
              <label><span>*</span>E-mail</label>
              <label className={login}><span>*</span>密碼</label>
              <label className={login}><span>*</span>確認密碼</label>
              <label><span>*</span>手機</label>
              <label>備註</label>
            </div>
            <div className="for_input">
              <input type="input" maxLength={15} onChange={this.nameChange}></input><br/>
              <input type="email" onChange={this.emailChange}></input><br/>
              <input className={login} maxLength={255} type="password" onChange={this.passwordChange}></input><br className={login}/>
              <input className={login} maxLength={255} type="password" onChange={this.password2Change}></input><br className={login}/>
              <input type="tel" maxLength={10} onChange={this.mobileChange}></input><br/>
              <textarea rows="4" cols="40" name="comment" maxLength={255} onChange={this.commentChange}/>
            </div> 
          </div>
        </div>
      </React.Fragment>
    )
  }
}


export default BuyerInfo