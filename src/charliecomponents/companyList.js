import React, {Component} from 'react';
import { Link } from "react-router-dom";
import $ from 'jquery';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './charlie.scss';

class companyList extends Component {
    constructor(props){
        super(props)
        this.state ={
            companies_taipei: [],
            companies_newTaipei: [],
            companies_taoyuan: [],
            companies_hsinchu: [],
            companies_taichung: [],
            companies_nantou: [],
            companies_chaiyi: [],
            companies_tainan: [],
            companies_kaohsiung: [],
            companies_yilan: [],
            companies_outdoor: [],
            gameImg_taipei: [],
            companySiteInfo: [],
            test: 1
        }
        // this.gameImg_taipei = this.gameImg_taipei.bind(this);
    }

    render(){
        
        return(
            <React.Fragment>
                <div >
                    <AnchorLink href='#top' className="topClass">
                        <i className="fas fa-angle-double-up fa-2x fasCenter"></i>
                    </AnchorLink>
                </div>
                <div className="card d-flex align-items-center justify-content-center mb-4 decorationNone" style={{height: 300 + "px"}} id="top">
                    <AnchorLink href='#taipei'>台北市</AnchorLink>
                    <AnchorLink href='#newTaipei'>新北市</AnchorLink>
                    <AnchorLink href='#newTaipei'>桃園市</AnchorLink>
                    <AnchorLink href='#hsinchu'>新竹市</AnchorLink>
                    <AnchorLink href='#taichung'>台中市</AnchorLink>
                    <AnchorLink href='#nantou'>南投縣</AnchorLink>
                    <AnchorLink href='#chaiyi'>嘉義市</AnchorLink>
                    <AnchorLink href='#tainan'>台南市</AnchorLink>
                    <AnchorLink href='#kaohsiung'>高雄市</AnchorLink>
                    <AnchorLink href='#yilan'>宜蘭市</AnchorLink>
                    <AnchorLink href='#outdoor'>戶外遊戲</AnchorLink>
                </div>
                <div className="ml-4">
                    <div className="container">
                        <p className="mt-3" id="taipei">台北市</p>
                        <div className="row">
                            {this.state.companies_taipei.map((companies, idx) =>
                                <div className="my-3 col-md-4" key={companies.cid}>
                                    <Link to={`${this.props.match.url}/companyInfo/${companies.cid}/1`} className="linkStyle" style={{ textDecoration: 'none' }}>
                                    <div className="card bg-light mx-2 companyInfo">
                                        <img className="c_logo" src={`/images/${companies.c_logo}`} alt="Card image cap"/>
                                        <div className="row justify-content-end mt-3">
                                            <div className="col-8 c_name">{companies.c_name}</div>
                                            <p className="col-8 city_name">{companies.city_name}</p>
                                        </div>
                                            <div className="card-body">
                                            </div>
                                    </div>
                                    </Link>
                                </div>
                            )}
                        </div>
                        <p className="mt-3" id="newTaipei">新北市</p>
                        <div className="row">
                            {this.state.companies_newTaipei.map((companies, idx) =>
                                <div className="my-3 col-md-4" key={companies.cid}>
                                    <Link to={`${this.props.match.url}/companyInfo/${companies.cid}/2`} className="linkStyle" style={{ textDecoration: 'none' }}>
                                    <div className="card bg-light mx-2 companyInfo">
                                        <img className="c_logo" src={`/images/${companies.c_logo}`} alt="Card image cap"/>
                                        <div className="row justify-content-end mt-3">
                                            <div className="col-8 c_name">{companies.c_name}</div>
                                            <p className="col-8 city_name">{companies.city_name}</p>
                                        </div>
                                            <div className="card-body">
                                            </div>
                                    </div>
                                    </Link>
                                </div>
                            )}
                        </div>
                        <p className="mt-3" id="taoyuan">桃園市</p>
                        <div className="row">
                            {this.state.companies_taoyuan.map((companies, idx) =>
                                <div className="my-3 col-md-4" key={companies.cid}>
                                    <Link to={`${this.props.match.url}/companyInfo/${companies.cid}/4`} className="linkStyle" style={{ textDecoration: 'none' }}>
                                    <div className="card bg-light mx-2 companyInfo">
                                        <img className="c_logo" src={`/images/${companies.c_logo}`} alt="Card image cap"/>
                                        <div className="row justify-content-end mt-3">
                                            <div className="col-8 c_name">{companies.c_name}</div>
                                            <p className="col-8 city_name">{companies.city_name}</p>
                                        </div>
                                            <div className="card-body">
                                            </div>
                                    </div>
                                    </Link>
                                </div>
                            )}
                        </div>
                        <p className="mt-3" id="hsinchu">新竹市</p>
                        <div className="row">
                            {this.state.companies_hsinchu.map((companies, idx) =>
                                <div className="my-3 col-md-4" key={companies.cid}>
                                    <Link to={`${this.props.match.url}/companyInfo/${companies.cid}/5`} className="linkStyle" style={{ textDecoration: 'none' }}>
                                    <div className="card bg-light mx-2 companyInfo">
                                        <img className="c_logo" src={`/images/${companies.c_logo}`} alt="Card image cap"/>
                                        <div className="row justify-content-end mt-3">
                                            <div className="col-8 c_name">{companies.c_name}</div>
                                            <p className="col-8 city_name">{companies.city_name}</p>
                                        </div>
                                            <div className="card-body">
                                            </div>
                                    </div>
                                    </Link>
                                </div>
                            )}
                        </div>
                        <p className="mt-3" id="taichung">台中市</p>
                        <div className="row">
                            {this.state.companies_taichung.map((companies, idx) =>
                                <div className="my-3 col-md-4" key={companies.cid}>
                                    <Link to={`${this.props.match.url}/companyInfo/${companies.cid}/8`} className="linkStyle" style={{ textDecoration: 'none' }}>
                                    <div className="card bg-light mx-2 companyInfo">
                                        <img className="c_logo" src={`/images/${companies.c_logo}`} alt="Card image cap"/>
                                        <div className="row justify-content-end mt-3">
                                            <div className="col-8 c_name">{companies.c_name}</div>
                                            <p className="col-8 city_name">{companies.city_name}</p>
                                        </div>
                                            <div className="card-body">
                                            </div>
                                    </div>
                                    </Link>
                                </div>
                            )}
                        </div>
                        <p className="mt-3" id="nantou">南投縣</p>
                        <div className="row">
                            {this.state.companies_nantou.map((companies, idx) =>
                                <div className="my-3 col-md-4" key={companies.cid}>
                                    <Link to={`${this.props.match.url}/companyInfo/${companies.cid}/10`} className="linkStyle" style={{ textDecoration: 'none' }}>
                                    <div className="card bg-light mx-2 companyInfo">
                                        <img className="c_logo" src={`/images/${companies.c_logo}`} alt="Card image cap"/>
                                        <div className="row justify-content-end mt-3">
                                            <div className="col-8 c_name">{companies.c_name}</div>
                                            <p className="col-8 city_name">{companies.city_name}</p>
                                        </div>
                                            <div className="card-body">
                                            </div>
                                    </div>
                                    </Link>
                                </div>
                            )}
                        </div>
                        <p className="mt-3" id="chaiyi">嘉義市</p>
                        <div className="row">
                            {this.state.companies_chaiyi.map((companies, idx) =>
                                <div className="my-3 col-md-4" key={companies.cid}>
                                    <Link to={`${this.props.match.url}/companyInfo/${companies.cid}/5`} className="linkStyle" style={{ textDecoration: 'none' }}>
                                    <div className="card bg-light mx-2 companyInfo">
                                        <img className="c_logo" src={`/images/${companies.c_logo}`} alt="Card image cap"/>
                                        <div className="row justify-content-end mt-3">
                                            <div className="col-8 c_name">{companies.c_name}</div>
                                            <p className="col-8 city_name">{companies.city_name}</p>
                                        </div>
                                            <div className="card-body">
                                            </div>
                                    </div>
                                    </Link>
                                </div>
                            )}
                        </div>
                        <p className="mt-3" id="tainan">台南市</p>
                        <div className="row">
                            {this.state.companies_tainan.map((companies, idx) =>
                                <div className="my-3 col-md-4" key={companies.cid}>
                                    <Link to={`${this.props.match.url}/companyInfo/${companies.cid}/14`} className="linkStyle" style={{ textDecoration: 'none' }}>
                                    <div className="card bg-light mx-2 companyInfo">
                                        <img className="c_logo" src={`/images/${companies.c_logo}`} alt="Card image cap"/>
                                        <div className="row justify-content-end mt-3">
                                            <div className="col-8 c_name">{companies.c_name}</div>
                                            <p className="col-8 city_name">{companies.city_name}</p>
                                        </div>
                                            <div className="card-body">
                                            </div>
                                    </div>
                                    </Link>
                                </div>
                            )}
                        </div>
                        <p className="mt-3" id="kaohsiung">高雄市</p>
                        <div className="row">
                            {this.state.companies_kaohsiung.map((companies, idx) =>
                                <div className="my-3 col-md-4" key={companies.cid}>
                                    <Link to={`${this.props.match.url}/companyInfo/${companies.cid}/15`} className="linkStyle" style={{ textDecoration: 'none' }}>
                                    <div className="card bg-light mx-2 companyInfo">
                                        <img className="c_logo" src={`/images/${companies.c_logo}`} alt="Card image cap"/>
                                        <div className="row justify-content-end mt-3">
                                            <div className="col-8 c_name">{companies.c_name}</div>
                                            <p className="col-8 city_name">{companies.city_name}</p>
                                        </div>
                                            <div className="card-body">
                                            </div>
                                    </div>
                                    </Link>
                                </div>
                            )}
                        </div>
                        <p className="mt-3" id="yilan">宜蘭市</p>
                        <div className="row">
                            {this.state.companies_yilan.map((companies, idx) =>
                                <div className="my-3 col-md-4" key={companies.cid}>
                                    <Link to={`${this.props.match.url}/companyInfo/${companies.cid}/19`} className="linkStyle" style={{ textDecoration: 'none' }}>
                                    <div className="card bg-light mx-2 companyInfo">
                                        <img className="c_logo" src={`/images/${companies.c_logo}`} alt="Card image cap"/>
                                        <div className="row justify-content-end mt-3">
                                            <div className="col-8 c_name">{companies.c_name}</div>
                                            <p className="col-8 city_name">{companies.city_name}</p>
                                        </div>
                                            <div className="card-body">
                                            </div>
                                    </div>
                                    </Link>
                                </div>
                            )}
                        </div>
                        <p className="mt-3" id="outdoor">戶外遊戲</p>
                        <div className="row">
                            {this.state.companies_outdoor.map((companies, idx) =>
                                <div className="my-3 col-md-4" key={companies.cid}>
                                    <Link to={`${this.props.match.url}/companyInfo/${companies.cid}/21`} className="linkStyle" style={{ textDecoration: 'none' }}>
                                    <div className="card bg-light mx-2 companyInfo">
                                        <img className="c_logo" src={`/images/${companies.c_logo}`} alt="Card image cap"/>
                                        <div className="row justify-content-end mt-3">
                                            <div className="col-8 c_name">{companies.c_name}</div>
                                            <p className="col-8 city_name">{companies.city_name}</p>
                                        </div>
                                            <div className="card-body">
                                            </div>
                                    </div>
                                    </Link>
                                </div>
                            )}
                        </div>
                </div>
                </div>
            </React.Fragment>
        );
    }
    
    componentDidMount = () =>{
        this.getCompanyList();
    }

    getCompanyList = () =>{
        fetch('http://localhost:3000/company/company_list/taipei')
        .then(res=>res.json())
        .then(data =>{
            this.setState({
                companies_taipei: data
            },function(){
                var gameImg_taipei = [];
                for(var i=0; i < this.state.companies_taipei.length; i ++){
                    fetch('http://localhost:3000/company/game_img/' + this.state.companies_taipei[i].cid)
                    .then(res=>res.json())
                    .then(data =>{
                        gameImg_taipei.push(data[0]);
                    })
                };
                this.setState({
                    gameImg_taipei: gameImg_taipei
                });
            })
        });
        fetch('http://localhost:3000/company/company_list/newTaipei')
        .then(res=>res.json())
        .then(data =>{
            this.setState({
                companies_newTaipei: data
            })
        });
        fetch('http://localhost:3000/company/company_list/taoyuan')
        .then(res=>res.json())
        .then(data =>{
            this.setState({
                companies_taoyuan: data
            })
        });
        fetch('http://localhost:3000/company/company_list/hsinchu')
        .then(res=>res.json())
        .then(data =>{
            this.setState({
                companies_hsinchu: data
            })
        })
        fetch('http://localhost:3000/company/company_list/taichung')
        .then(res=>res.json())
        .then(data =>{
            this.setState({
                companies_taichung: data
            })
        })
        fetch('http://localhost:3000/company/company_list/nantou')
        .then(res=>res.json())
        .then(data =>{
            this.setState({
                companies_nantou: data
            })
        });
        fetch('http://localhost:3000/company/company_list/chaiyi')
        .then(res=>res.json())
        .then(data =>{
            this.setState({
                companies_chaiyi: data
            })
        });
        fetch('http://localhost:3000/company/company_list/tainan')
        .then(res=>res.json())
        .then(data =>{
            this.setState({
                companies_tainan: data
            })
        });
        fetch('http://localhost:3000/company/company_list/kaohsiung')
        .then(res=>res.json())
        .then(data =>{
            this.setState({
                companies_kaohsiung: data
            })
        });
        fetch('http://localhost:3000/company/company_list/yilan')
        .then(res=>res.json())
        .then(data =>{
            this.setState({
                companies_yilan: data
            })
        });
        fetch('http://localhost:3000/company/company_list/outdoor')
        .then(res=>res.json())
        .then(data =>{
            this.setState({
                companies_outdoor: data
            })
        });
    }
}

export default companyList;