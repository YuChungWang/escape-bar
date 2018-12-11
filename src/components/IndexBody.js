import React, { Component } from 'react';
import {BrowserRouter, Route, Link, NavLink} from 'react-router-dom';
import './indexbody.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Input, Button, Label, Tooltip } from 'reactstrap';

class IndexBody extends Component {
    constructor(props){
        super(props)
    
        this.toggle = this.toggle.bind(this);
        this.state = {
        tooltipOpen: false,
        city: "&& m.`city_id` >=1 ",
        people: "",
        price: "",
        cate: "",
        text: "",
        searchStr: "",
        textResults: [],
        keywordOpen: ""
        // products: []
        };
    }

    toggle() {
        this.setState({
            tooltipOpen: !this.state.tooltipOpen
        });
    }
    keywordDown = (evt) => {
        let text = evt.target.value;
        console.log(text);
        if(text === ""){
            this.setState({
                text: "",
                keywordOpen: "close"
            }, () => {
                this.makeSearchString()
            })
        return;
        }
        this.setState({
        text: text,
        keywordOpen: ""
        }, () => {
            this.makeSearchString()
        })
        fetch('http://localhost:3000/eb/home/search/' + text,{
        method:'GET',
        mode: "cors",
        })
        .then(res=>res.json())
        .then(textResults => this.setState({
        textResults: textResults
        }))
    }
    closeInput = () => {
        setTimeout(()=>{
            this.setState({
              keywordOpen : "close"
            })
        }, 100)
    }
    suggestSel = (evt) => {
        let text = evt.target.dataset.text
        this.setState({
            text: text,
        }, () => {
            this.makeSearchString()
        })
    }
    makeSearchString = () => {
        let {city, people, price, cate, text} = this.state
        let text2 = ""
        if(text !== ""){
            // text2 = `&& (p.\`PRO_NAME\` LIKE '%${text}%' || com.\`c_name\` LIKE '%${text}%') `
            text2 = " && (p.`PRO_NAME` LIKE '%" + text + "%' || com.`c_name` LIKE '%" + text + "%') "
            // text2 = " && p.`PRICE` > 200 "
        }
        let str = city + people + price + cate + text2
        console.log(str)
        this.setState({
            searchStr: str
        })
    }
    selHomeCity = (evt) => {
        let city = evt.target.value
        // console.log(city)
        this.setState({
            city
        }, () => {
            this.makeSearchString()
        })
    }
    selHomePeople = (evt) => {
        let people = evt.target.value
        this.setState({
            people
        }, () => {
            this.makeSearchString()
        })
    }
    selHomePrice = (evt) => {
        let price = evt.target.value
        this.setState({
            price
        }, () => {
            this.makeSearchString()
        })
    }
    selHomeCate = (evt) => {
        let cate = evt.target.value
        this.setState({
            cate
        }, () => {
            this.makeSearchString()
        })
    }
    render(){
        return(
            <React.Fragment>
                <section className="indexBody">
                    <div className="heroSection">
                        <div className="searchBox py-4 px-4">
                            <h2 className="">找真人實境遊戲就在逃脫吧！</h2>
                            <h4 className="">國內近100間工作室，數百款各類實境解謎、密室逃脫遊戲資訊與網友評價，一網打盡。</h4>
                            <div className="dp-flex-col">
                                <Label for="inputQuery">馬上搜尋看看：</Label>
                                <Input type="text" name="inputQuery" id="inputQuery" className="inputQuery" onChange={this.keywordDown} tabIndex={0} onBlur={this.closeInput} value={this.state.text} placeholder="請輸入遊戲或工作室名稱..."></Input>
                                <div className="keyword">
                                    {this.state.textResults.map((text, i) =>
                                    <div key={i} className={"text_results" + " " + this.state.keywordOpen} onClick={this.suggestSel} data-text={text.PRO_NAME}>
                                        <span className="g_name">{text.PRO_NAME}</span> || {text.c_name}
                                    </div>
                                    )}
                                </div>
                            </div>
                            <div className="dp-flex-row my-2 flex-jc-sb">
                                <div className="dp-flex-col w-50 pr-2">
                                    <Label for="city" className="" id="cityInst">遊戲所在縣市</Label>
                                    <Tooltip placement="down" isOpen={this.state.tooltipOpen} target="cityInst" toggle={this.toggle}>
                                        僅顯示有常設實境遊戲的縣市喔！
                                    </Tooltip>
                                    <Input type="select" name="city" onChange={this.selHomeCity}>
                                        <option value="&& m.`city_id` >=1 " >全台灣</option>
                                        <option value="&& m.`city_id` =1 " >台北市</option>
                                        <option value="&& m.`city_id` =2 " >新北市</option>
                                        <option value="&& m.`city_id` =4 " >桃園市</option>
                                        <option value="&& m.`city_id` =5 " >新竹市</option>
                                        <option value="&& m.`city_id` =8 " >台中市</option>
                                        <option value="&& m.`city_id` =10 " >南投縣</option>
                                        <option value="&& m.`city_id` =12 " >嘉義市</option>
                                        <option value="&& m.`city_id` =14 " >台南市</option>
                                        <option value="&& m.`city_id` =15 " >高雄市</option>
                                        <option value="&& m.`city_id` =19 " >宜蘭縣</option>  
                                    </Input>
                                </div>
                                <div className="dp-flex-col w-50 pl-2">
                                    <Label for="people" className="">預計遊玩人數</Label>
                                    <Input type="select" name="people" onChange={this.selHomePeople}>
                                        <option value=" ">無限制</option>
                                        <option value="&& p.`PEOPLE_MIN` <= 1 && 1 <= p.`PEOPLE_MAX` ">1人</option>
                                        <option value="&& p.`PEOPLE_MIN` <= 2 && 2 <= p.`PEOPLE_MAX` ">2人</option>
                                        <option value="&& p.`PEOPLE_MIN` <= 3 && 3 <= p.`PEOPLE_MAX` ">3人</option>
                                        <option value="&& p.`PEOPLE_MIN` <= 4 && 4 <= p.`PEOPLE_MAX` ">4人</option>
                                        <option value="&& p.`PEOPLE_MIN` <= 5 && 5 <= p.`PEOPLE_MAX` ">5人</option>
                                        <option value="&& p.`PEOPLE_MIN` <= 6 && 6 <= p.`PEOPLE_MAX` ">6人</option>
                                        <option value="&& p.`PEOPLE_MIN` <= 7 && 7 <= p.`PEOPLE_MAX` ">7人</option>
                                        <option value="&& p.`PEOPLE_MIN` <= 7 && 7 <= p.`PEOPLE_MAX` ">8人</option>
                                        <option value="&& p.`PEOPLE_MIN` >= 8">超過8人</option>
                                    </Input>
                                </div>
                            </div>
                            <div className="dp-flex-row my-2">
                                <div className="dp-flex-col w-50 pr-2">
                                    <Label for="price" className="">每人預算</Label>
                                    <Input type="select" name="price" onChange={this.selHomePrice}>
                                        <option value=" ">無上限</option>
                                        <option value="&& p.`PRICE` <= 300">300元以下</option>
                                        <option value="&& p.`PRICE` <= 450">450元以下</option>
                                        <option value="&& p.`PRICE` <= 600">600元以下</option>
                                        <option value="&& p.`PRICE` >= 600">超過600元</option>
                                    </Input>
                                </div>
                                <div className="dp-flex-col w-50 pl-2">
                                    <Label for="feature" className="">遊戲特色</Label>
                                    <Input type="select" name="feature" onChange={this.selHomeCate}>
                                        <option value=" ">無限制</option>
                                        <option value="&& (f.`feature1` =1 || f.`feature2` =1 || f.`feature3` =1) ">新手入門</option>
                                        <option value="&& (f.`feature1` =2 || f.`feature2` =2 || f.`feature3` =2) ">中度玩家</option>
                                        <option value="&& (f.`feature1` =3 || f.`feature2` =3 || f.`feature3` =3) ">重度解謎</option>
                                        <option value="&& (f.`feature1` =4 || f.`feature2` =4 || f.`feature3` =4) ">偵探推理</option>
                                        <option value="&& (f.`feature1` =5 || f.`feature2` =5 || f.`feature3` =5) ">機關重重</option>
                                        <option value="&& (f.`feature1` =6 || f.`feature2` =6 || f.`feature3` =6) ">劇情厲害</option>
                                        <option value="&& (f.`feature1` =7 || f.`feature2` =7 || f.`feature3` =7) ">場景逼真</option>
                                        <option value="&& (f.`feature1` =8 || f.`feature2` =8 || f.`feature3` =8) ">輕鬆歡樂</option>
                                        <option value="&& (f.`feature1` =9 || f.`feature2` =9 || f.`feature3` =9) ">恐怖驚悚</option>
                                        <option value="&& (f.`feature1` =10 || f.`feature2` =10 || f.`feature3` =10) " >緊張刺激</option>
                                        <option value="&& (f.`feature1` =11 || f.`feature2` =11 || f.`feature3` =11) ">勾心鬥角</option>
                                        <option value="&& (f.`feature1` =12 || f.`feature2` =12 || f.`feature3` =12) ">團隊合作</option>
                                        <option value="&& (f.`feature1` =13 || f.`feature2` =13 || f.`feature3` =13) ">親子同遊</option>
                                    </Input>
                                </div>
                            </div>
                            <div className="dp-flex-row mt-3">
                                <div className="dp-flex-col w-50">
                                    <span className="">或者試試熱門關鍵字：</span>
                                    <div className="dp-flex-row flex-jc-ar my-2">
                                        <div className="keywordSgst mx-1 py-2 px-4">戶外遊戲</div>
                                        <div className="keywordSgst mx-1 py-2 px-4">親子同遊</div>
                                    </div>
                                    <div className="dp-flex-row flex-jc-ar my-2">
                                        <div className="keywordSgst mx-1 py-2 px-4">新手入門</div>
                                        <div className="keywordSgst mx-1 py-2 px-4">恐怖驚悚</div>
                                    </div>
                                </div>
                                <div className="searchBtnDiv dp-flex-row px-3 my-2 w-50">
                                    {/* <Button className="searchBtn indexBtn" onSubmit={this.homeSearch}>搜出好遊戲</Button> */}
                                    <NavLink className="searchBtn indexBtn" to={{pathname:`/proList`, state: {str: this.state.searchStr, type: 'homeSearch'}}}>搜出好遊戲</NavLink>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="indexContainer monthTopic">
                        <h3>本月主打</h3>
                        <hr className="indexHr"></hr>
                        <div className="dp-flex-row monthTopicInside row">
                            <div className="col-7 p-0">
                                <img className="monthTopicImg" src="/img/xmas.jpg" alt=""></img>
                            </div>
                            <div className="col-5">
                                <h4>聖誕節</h4>
                                <p>聖誕節是基督教用來紀念耶穌降生的節日，西方基督教通常將此節日定於12月25日。亦有人則稱之為耶誕節（意為耶穌誕辰日）[1]。
                                    <br/><br/>將聖誕節作為基督教禮儀年曆的重要節日，教會透過將臨期或降臨期來準備，並以八日慶典與禮儀節期延續慶祝。聖誕節也是許多國家和地區、尤其是西方國家等以基督教文化為主流之地區的公共假日；在教會以外的場合，聖誕節已轉化成一種民俗節日，並常與日期相近的公曆新年合稱「聖誕與新年季」。
                                </p>
                                <div className="seeMore"><Link className="" to="/article/topic201812"><Button color="warning" size="lg" className="indexBtn">看更多</Button></Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="escapeRoomMap">
                        <div className="indexContainer">
                            <h3>密室地圖</h3>
                            <hr className="indexHr"></hr>
                            <h5 className="py-3">想知道你附近有哪些密室逃脫嗎？<br/>用密室地圖來找吧！場館與遊戲資訊一目了然！</h5>
                            <div className="seeMap"><Link className="" to="/map"><Button color="danger" size="lg" className="indexBtn">馬上看地圖</Button></Link></div>
                        </div>
                    </div>
                    <div className="indexContainer grouping">
                        <h3>火熱揪團中</h3>
                        <hr className="indexHr"></hr>
                        <h5>找不到夠多朋友一起玩密室嗎～那還不趕快試試揪團功能來找隊友！？今晚吃雞，大吉大利。</h5>
                        <div className="dp-flex-row flex-jc-ar my-4">
                            <div className="groupingCard"></div>
                            <div className="groupingCard"></div>
                            <div className="groupingCard"></div>
                        </div>
                        <div className="seeMore"><Button color="success" size="lg" className="indexBtn">開始我的揪團</Button></div>
                    </div>
                    <div className="services">
                        <h3>跟著逃脫吧一起闖關吧！</h3>
                        <div className="dp-flex-row flex-jc-ar py-4 servicesInside">
                            <div className="serviceFeature">
                                <div className="serviceImgDiv">
                                    <img className="serviceImg" src="/img/book.png" alt=""></img>
                                </div>
                                <p className="mt-3"><Link className="linkClear" to="/article/whatisrealescape">新手教學</Link></p>
                            </div>
                            <div className="serviceFeature">
                                <div className="serviceImgDiv">
                                    <img className="serviceImg" src="/img/speed.png" alt=""></img>
                                </div>
                                <p className="mt-3">特色分類</p>
                            </div>
                            <div className="serviceFeature">
                                <div className="serviceImgDiv">
                                    <img className="serviceImg" src="/img/teamwork.png" alt=""></img>
                                </div>
                                <p className="mt-3"><Link className="" to="/article/groupactivity">福委活動與教育訓練</Link></p>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
export default IndexBody;