import React, {Component} from 'react';
import { NavLink } from "react-router-dom";
import { FacebookProvider, Page } from 'react-facebook';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/src/alice-carousel.scss";
import './charlie.scss';
import GameSlider from './GameSlider';

class companyInfo extends Component {
    constructor(props){
        super(props)
        this.state ={
            selectOption: [],
            companyInfo: [],
            markersInfo: [],
            optionDefault: [],
            productsInfoAll: [],
            productsInfoThis: [],
            sid: '',
        }
        this.cid = props.match.params.cid;
        this.city_id = props.match.params.city_id;
    }

    onSlideChange(e) {
        console.log('Item`s position during a change: ', e.item);
        console.log('Slide`s position during a change: ', e.slide);
    };
    
    onSlideChanged(e) {
    console.log('Item`s position after changes: ', e.item);
    console.log('Slide`s position after changes: ', e.slide);
    };
      
    galleryItems() {
        return (
            this.state.productsInfoAll.map((products, i) =>
                <NavLink className="pro_card" key={products.PRO_SEQ} to={{pathname: `/proList/products/${products.PRO_SEQ}`,state: {id: products.PRO_SEQ}}}>
                    <img key={`key-${i}`} src={`/img/game/${products.IMG_NAME}`} className="products_images"/>
                    <p>{`${products.P_ID === this.state.sid ? '此分館遊戲遊戲' : ''}`}</p>
                </NavLink>
            )
        )
    };

    selectedHandler = (evt) =>{
        this.setState({
            sid: evt.target.value
        },function(){
            this.getMarkersInfo();
            this.getProductsInfoAll();
            this.getProductsInfoThis();
        })
    }

    consoleHandler = () =>{
        console.log(this.state);
    }

    render(){
        const items = this.galleryItems();
        return(
            <React.Fragment>
                <div className="container mt-5 bangSet">
                    <div className="row">
                        <div className="col-4">
                            <div className="c_logo_limit">
                                <img className="c_logo_big" src={`/img/company/default/${this.state.companyInfo.c_logo}`}/>
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="row companyInfoTitle">
                                <h2 className="mr-4">{this.state.companyInfo.c_name}</h2>
                                <select id="siteSelect" className="siteSelect" value={this.state.sid} onChange={this.selectedHandler}>
                                    {this.state.selectOption.map(selectOption => 
                                        <option
                                            key={selectOption.sid}
                                            name={selectOption.sid}
                                            value={selectOption.sid}>
                                            {selectOption.site_name}
                                        </option>
                                    )}
                                </select>
                            </div>
                            
                            <div className="row mt-2">
                                <div className="col-6">
                                    <p>地址：{this.state.markersInfo.s_add}</p>
                                    <p style={{display: this.state.markersInfo.s_tel === '' ? 'none' : 'block' }}>電話：{this.state.markersInfo.s_tel}</p>
                                    <p>營業時間：{this.state.markersInfo.s_ophr}</p>
                                    <p style={{display: this.state.companyInfo.c_website === '' ? 'none' : 'block' }}>工作室網站：<a href={this.state.companyInfo.c_website}>{this.state.companyInfo.c_website}</a></p>
                                </div>
                                <div className="col-6">
                                    {/* <div className="fb-page" data-href={this.state.companyInfo.c_facebook} data-tabs="timeline" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true" data-height="120" data-width="340" data-hide-cta="true" ><blockquote cite="https://www.facebook.com/facebook" className="fb-xfbml-parse-ignore" ><a href="https://www.facebook.com/facebook">Facebook</a></blockquote></div> */}
                                    <FacebookProvider appId="801282820265015">
                                        <Page href={this.state.companyInfo.c_facebook} hide_cta="true" height="300" tabs="timeline" />
                                    </FacebookProvider>
                                </div>
                            </div> 
                        </div>
                    </div>
                    <div className="c_intro mt-5">
                        <p>{this.state.companyInfo.c_intro}</p>
                    </div>
                    <div className="c_games mt-5">
                        <h5>工作室遊戲：</h5>
                    </div>
                        <GameSlider productsInfoAll={this.state.productsInfoAll} sid={this.state.sid}/>
                        <AliceCarousel
                            items={items}
                            duration={1000}
                            autoPlay={true}
                            startIndex = {1}
                            fadeOutAnimation={true}
                            mouseDragEnabled={true}
                            playButtonEnabled={false}
                            autoPlayInterval={5000}
                            autoPlayDirection="ltr"
                            responsive={this.responsive}
                            disableAutoPlayOnAction={true}
                            onSlideChange={this.onSlideChange}
                            onSlideChanged={this.onSlideChanged}
                        />
                    <div className="mb-5">
                    </div>
                </div>
                
            </React.Fragment>
        );
    }
    
    componentDidMount = () =>{
        this.getSelectOption();
        this.getCompanyInfo();
    }

    getSelectOption = () =>{
        fetch("http://localhost:3000/company/selectOption/" + this.cid,{
            method: 'GET',
        }).then(res=>res.json())
        .then(data => {
            this.setState({
                selectOption: data
            },function(){
                if(data.length === 1){
                    document.getElementById('siteSelect').style.display = "none";
                    this.getOptionDefault();
                }else{
                    this.getOptionDefault();
                }
            });
        })
    }

    getOptionDefault = () =>{
        fetch("http://localhost:3000/company/optionDefault/" + this.cid + "/" + this.city_id,{
            method: 'GET',
        }).then(res=>res.json())
        .then(data => {
            this.setState({
                optionDefault: data[0]
            },function(){
                if(this.state.optionDefault === ''){
                    return;
                }else{
                    this.setState({
                        sid: this.state.optionDefault.sid
                    },function(){
                        this.getMarkersInfo();
                        this.getProductsInfoAll();
                        this.getProductsInfoThis();
                    })  
                }
            });
        });
    }

    getCompanyInfo = () =>{
        fetch("http://localhost:3000/company/companyInfo/" + this.cid,{
            method: 'GET',
        }).then(res=>res.json())
        .then(data => {
            this.setState({
                companyInfo: data[0]
            });
        });
    }

    getMarkersInfo = () =>{
        fetch("http://localhost:3000/company/markersInfo/" + this.state.sid,{
            method: 'GET',
        }).then(res=>res.json())
        .then(data => {
            this.setState({
                markersInfo: data[0]
            });
        });
    }

    getProductsInfoAll = () =>{
        fetch("http://localhost:3000/company/productsInfoAll/" + this.cid,{
            method: 'GET',
        }).then(res=>res.json())
        .then(data => {
            this.setState({
                productsInfoAll: data
            });
        });
    }

    getProductsInfoThis = () =>{
        fetch("http://localhost:3000/company/productsInfoThis/" + this.cid + "/" + this.state.sid,{
            method: 'GET',
        }).then(res=>res.json())
        .then(data => {
            this.setState({
                productsInfoThis: data
            },function(){
                var res = this.state.productsInfoAll.map(obj => this.state.productsInfoThis.find(o => o.PRO_NAME === obj.PRO_NAME) || obj);
                this.setState({
                    productsInfoAll: res
                });
            });
        });
    }
    
}

export default companyInfo;