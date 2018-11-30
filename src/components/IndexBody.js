import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import './indexbody.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Input, Button, Label, Tooltip } from 'reactstrap';

class IndexBody extends Component {
    constructor(props){
        super(props)
    
        this.toggle = this.toggle.bind(this);
        this.state = {
        tooltipOpen: false
        };
    }

    toggle() {
        this.setState({
            tooltipOpen: !this.state.tooltipOpen
        });
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
                                <Input type="text" name="inputQuery" id="inputQuery" className="inputQuery" placeholder="請輸入遊戲或工作室名稱..."></Input>
                            </div>
                            <div className="dp-flex-row my-2 flex-jc-sb">
                                <div className="dp-flex-col w-50 pr-2">
                                    <Label for="city" className="" id="cityInst">遊戲所在縣市</Label>
                                    <Tooltip placement="down" isOpen={this.state.tooltipOpen} target="cityInst" toggle={this.toggle}>
                                        僅顯示有常設實境遊戲的縣市喔！
                                    </Tooltip>
                                    <Input type="select" name="city">
                                        <option value="">全台灣</option>
                                        <option value="1">台北市</option>
                                        <option value="2">新北市</option>
                                        <option value="4">桃園市</option>
                                        <option value="5">新竹市</option>
                                        <option value="8">台中市</option>
                                        <option value="10">南投縣</option>
                                        <option value="12">嘉義市</option>
                                        <option value="14">台南市</option>
                                        <option value="15">高雄市</option>
                                        <option value="19">宜蘭縣</option>  
                                    </Input>
                                </div>
                                <div className="dp-flex-col w-50 pl-2">
                                    <Label for="people" className="">預計遊玩人數</Label>
                                    <Input type="select" name="people">
                                        <option value="">無限制</option>
                                        <option value="">1人</option>
                                        <option value="">2人</option>
                                        <option value="">3人</option>
                                        <option value="">4人</option>
                                        <option value="">5人</option>
                                        <option value="">6人</option>
                                        <option value="">7人</option>
                                        <option value="">8人</option>
                                        <option value="">超過8人</option>
                                    </Input>
                                </div>
                            </div>
                            <div className="dp-flex-row my-2">
                                <div className="dp-flex-col w-50 pr-2">
                                    <Label for="price" className="">每人預算</Label>
                                    <Input type="select" name="price">
                                        <option value="">無上限</option>
                                        <option value="">300元以下</option>
                                        <option value="">450元以下</option>
                                        <option value="">600元以下</option>
                                        <option value="">超過600元</option>
                                    </Input>
                                </div>
                                <div className="dp-flex-col w-50 pl-2">
                                    <Label for="feature" className="">遊戲特色</Label>
                                    <Input type="select" name="feature">
                                        <option value="">請選擇</option>
                                        <option value="">新手入門</option>
                                        <option value="">中度玩家</option>
                                        <option value="">重度解謎</option>
                                        <option value="">偵探推理</option>
                                        <option value="">機關重重</option>
                                        <option value="">劇情厲害</option>
                                        <option value="">場景逼真</option>
                                        <option value="">輕鬆歡樂</option>
                                        <option value="">恐怖驚悚</option>
                                        <option value="">緊張刺激</option>
                                        <option value="">勾心鬥角</option>
                                        <option value="">團隊合作</option>
                                        <option value="">親子同遊</option>
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
                                    <Button className="searchBtn indexBtn">搜出好遊戲</Button>
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
                                <div className="seeMore"><Button color="warning" size="lg" className="indexBtn">看更多</Button></div>
                            </div>
                        </div>
                    </div>
                    <div className="escapeRoomMap">
                        <div className="indexContainer">
                            <h3>密室地圖</h3>
                            <hr className="indexHr"></hr>
                            <h5 className="py-3">想知道你附近有哪些密室逃脫嗎？<br/>用密室地圖來找吧！場館與遊戲資訊一目了然！</h5>
                            <div className="seeMap"><Button color="danger" size="lg" className="indexBtn">馬上看地圖</Button></div>
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
                                <p className="mt-3">新手教學</p>
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
                                <p className="mt-3">福委與教育訓練</p>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
export default IndexBody;