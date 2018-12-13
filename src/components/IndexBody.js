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
                            <h2 className="slogan">找真人實境遊戲就在逃脫吧！</h2>
                            <h4 className="subSlogan">國內近100間工作室，數百款各類實境解謎、密室逃脫遊戲資訊與網友評價，一網打盡。</h4>
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
                                        <span className="keywordSgst">機關重重</span>
                                        <span className="keywordSgst">親子同遊</span>
                                    </div>
                                    <div className="dp-flex-row flex-jc-ar my-2">
                                        <span className="keywordSgst">新手入門</span>
                                        <span className="keywordSgst">恐怖驚悚</span>
                                    </div>
                                </div>
                                <div className="searchBtnDiv dp-flex-row px-3 my-2 w-50">
                                    <Button className="searchBtn indexBtn">搜出好遊戲</Button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="indexContainer monthTopic">
                        <h3 className="subTitle">本月主打</h3>
                        <hr className="indexHr"></hr>
                        <div className="dp-flex-row monthTopicInside row">
                            <div className="col-6 p-0">
                                <img className="monthTopicImg" src="/img/xmas.jpg" alt=""></img>
                            </div>
                            <div className="col-6">
                                <h4>聖誕節</h4>
                                <p>說到十二月，大家會想到什麼呢？<br/>
                                    沒錯，心裡是不是馬上浮現出了「叮叮噹～叮叮噹～鈴聲多響亮」的旋律呢？<br/>
                                    雖然聖誕節是來自西方的宗教節日，但是在台灣這麼international的環境，近年過聖誕的氣氛也是非常濃厚！！<br/>
                                    而聖誕節看似是專屬於情侶的節日，其實在西方國家都是利用此時的假期與家人好好團聚一番～～<br/>
                                    而在這一年的尾聲，是不是也應該跟好朋友來一場暖心的密室逃脫呢～？<br/>
                                    小編幫大家整理了與聖誕節相關的主題，趕緊來看看有沒有你還沒玩過的！</p>
                                <div className="seeMore"><Link className="" to="/article/topic201812"><Button color="warning" size="lg" className="indexBtn">看更多</Button></Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="escapeRoomMap">
                        <div className="indexContainer">
                            <h3 className="subTitle">密室地圖</h3>
                            <hr className="indexHr"></hr>
                            <h5 className="py-3 subRemark">想知道你附近有哪些密室逃脫嗎？<br/>用密室地圖來找吧！場館與遊戲資訊一目了然！</h5>
                            <div className="seeMap"><Link className="" to="/map"><Button color="danger" size="lg" className="indexBtn">馬上看地圖</Button></Link></div>
                        </div>
                    </div>
                    <div className="indexContainer grouping">
                        <h3 className="subTitle">火熱揪團中</h3>
                        <hr className="indexHr"></hr>
                        <h5 className="subRemark">找不到夠多朋友一起玩密室嗎～那還不趕快試試揪團功能來找隊友！？今晚吃雞，大吉大利。</h5>
                        <div className="dp-flex-row flex-jc-ar my-4">
                            <div className="groupingCard">
                                <div className="groupGameImgBox">
                                    <img className="groupGameImg" src="../img/game/玩笑實驗室_炸鬥府_01.jpg"></img>
                                </div>
                                <div className="groupGameCompany">
                                    <div className="groupGameTitle">炸鬥府</div>
                                    <div className="groupCompany">玩笑實驗室</div>
                                </div>
                                <div className="groupInfo">
                                    <div className="groupHolder">
                                        <img className="groupHolderImg" src="../img/user/1.png"></img>
                                    </div>
                                    <div className="groupHolderId">發起人：Bulbasaur</div>
                                    <div className="groupHoldingInfo d-flex flex-column">
                                        <div className="d-flex justify-content-around">
                                            <div><i class="fas fa-map-marker-alt"></i><span> 台北市</span></div>
                                            <div><i class="fas fa-user"></i><span> 還缺 </span><span>3</span><span> 人</span></div>
                                        </div>
                                        <div className="d-flex justify-content-around align-items-center my-2">
                                            <div><span className="deadLine">即將截止！</span></div>
                                            <div><button className="btn btn-warning btn-lg">快去看看</button></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="groupingCard">
                                <div className="groupGameImgBox">
                                    <img className="groupGameImg" src="../img/game/Qhat帽子烤_翻箱倒櫃_01.jpg"></img>
                                </div>
                                <div className="groupGameCompany">
                                    <div className="groupGameTitle">翻箱倒櫃2.0</div>
                                    <div className="groupCompany">QhAt帽子烤工廠</div>
                                </div>
                                <div className="groupInfo">
                                    <div className="groupHolder">
                                        <img className="groupHolderImg" src="../img/user/25.png"></img>
                                    </div>
                                    <div className="groupHolderId">發起人：Pikachu</div>
                                    <div className="groupHoldingInfo d-flex flex-column">
                                        <div className="d-flex justify-content-around">
                                            <div><i class="fas fa-map-marker-alt"></i><span> 台北市</span></div>
                                            <div><i class="fas fa-user"></i><span> 還缺 </span><span className="deadLine">2</span><span> 人</span></div>
                                        </div>
                                        <div className="d-flex justify-content-around align-items-center my-2">
                                            <div><span className="">還有 10 天</span></div>
                                            <div><button className="btn btn-warning btn-lg">快去看看</button></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="groupingCard">
                                <div className="groupGameImgBox">
                                    <img className="groupGameImg" src="../img/game/笨蛋工作室_羅伯班克_1.jpg"></img>
                                </div>
                                <div className="groupGameCompany">
                                    <div className="groupGameTitle">羅伯班克</div>
                                    <div className="groupCompany">笨蛋工作室</div>
                                </div>
                                <div className="groupInfo">
                                    <div className="groupHolder">
                                        <img className="groupHolderImg" src="../img/user/7.png"></img>
                                    </div>
                                    <div className="groupHolderId">發起人：Squirtle</div>
                                    <div className="groupHoldingInfo d-flex flex-column">
                                        <div className="d-flex justify-content-around">
                                            <div><i class="fas fa-map-marker-alt"></i><span> 台中市</span></div>
                                            <div><i class="fas fa-user"></i><span> 還缺 </span><span>5</span><span> 人</span></div>
                                        </div>
                                        <div className="d-flex justify-content-around align-items-center my-2">
                                            <div><span className="">還有 21 天</span></div>
                                            <div><button className="btn btn-warning btn-lg">快去看看</button></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="seeMore"><Button color="success" size="lg" className="indexBtn">開始我的揪團</Button></div>
                    </div>
                    <div className="services">
                        <h3 className="subTitle">讓逃脫吧陪你一起闖關吧！</h3>
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
                                <p className="mt-3"><Link className="linkClear" to="/proList">特色分類</Link></p>
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