import React, {Component} from 'react'
import './buyer_info.scss'

class BuyerInfo extends Component {
  constructor(props){
    super(props)
    this.state = {
      login: false,
      b_name: "",
      b_email: "",
      b_password: "",
      b_password2: "",
      b_mobile: "",
      b_comment: "",
    }
  }
  nameChange = (evt) => {
    let b_name = evt.target.value
    this.setState({
      b_name
    }, () => {
      this.props.getBuyerInfo(this.state)
    })
  }
  emailChange = (evt) => {
    let b_email = evt.target.value
    this.setState({
      b_email
    }, () => {
      this.props.getBuyerInfo(this.state)
    })
  }
  passwordChange = (evt) => {
    let b_password = evt.target.value
    this.setState({
      b_password
    }, () => {
      this.props.getBuyerInfo(this.state)
    })
  }
  password2Change = (evt) => {
    let b_password2 = evt.target.value
    this.setState({
      b_password2
    }, () => {
      this.props.getBuyerInfo(this.state)
    })
  }
  mobileChange = (evt) => {
    let b_mobile = evt.target.value
    this.setState({
      b_mobile
    }, () => {
      this.props.getBuyerInfo(this.state)
    })
  }
  commentChange = (evt) => {
    let b_comment = evt.target.value
    this.setState({
      b_comment
    }, () => {
      this.props.getBuyerInfo(this.state)
    })
  }
  render(){
    let login = this.state.login ? "d-none" : ""
    return(
      <React.Fragment>
        <div id="buyer_info">
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
              <input type="input" maxlength={15} onChange={this.nameChange}></input><br/>
              <input type="email" onChange={this.emailChange}></input><br/>
              <input className={login} maxlength={255} type="password" onChange={this.passwordChange}></input><br className={login}/>
              <input className={login} maxlength={255} type="password" onChange={this.password2Change}></input><br className={login}/>
              <input type="tel" maxlength={10} onChange={this.mobileChange}></input><br/>
              <textarea rows="4" cols="40" name="comment" onChange={this.commentChange}/>
            </div> 
          </div>
        </div>
      </React.Fragment>
    )
  }
}


export default BuyerInfo