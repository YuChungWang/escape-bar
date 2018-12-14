import React, {Component} from 'react';
import './products.scss';
import ProSlider from './pro_slider.js';
import ProName from './pro_name.js';
import ProInfo from './pro_info.js';
import ProPrice from './pro_price.js';
import ProMap from './pro_map.js';
import ProShare from './pro_share.js';
import ProManu from './pro_manu.js';
import ProBuyRule from './pro_buy_rule.js';
import ProStock from './pro_stock.js';
import ProAd from './pro_ad.js';

//Nick
import PRO_COMMENT from '../Nickcomponents/comment/membercomment';
import StarRatingComponent from 'react-star-rating-component';

class Products extends Component{
    constructor(props){
        super(props)
        // this.ID = props.match.params.ID;
        this.state = {
            data: [],
            status: false
        }
        this.refStock = React.createRef()
    }
    changeSite = (data) => {
        this.setState({
            data : data[0]
        })
    }
    // componentWillReceiveProps(){
        
    // }
    componentWillMount(){
        let id = this.props.location.state.id
        fetch('http://localhost:3000/eb/pro_list/site/' + id, {
            method:'GET',
            mode: "cors",
        })
        .then(res=>res.json())
        .then(data => this.setState({
            data: data[0],
            status: true
        }));
    }
    makeBodyLeft = () => {
        if(this.state.status){
            return (
                <div className="pro_body_l">
                    <ProSlider id={this.state.data.PRO_SEQ} />
                    <ProName data={this.state.data} changeSite={this.changeSite}/>
                    <ProInfo info={this.state.data.PRO_INFO}/>
                    <PRO_COMMENT id={this.state.data.PRO_SEQ}/>

                    <ProBuyRule/>
                </div>
            )
        }
    }
    makeBodyRight = () => {
        if(this.state.status){
            return (
                <div className="pro_body_r">
                    <ProPrice price={this.state.data.PRICE} scrollToStock={this.scrollToStock}/>
                    <ProMap data={this.state.data}/>
                    <ProShare id={this.state.data.PRO_SEQ}/>
                    <ProManu data={this.state.data}/>
                    <ProStock data={this.state.data} changeSite={this.changeSite} refProp={this.refStock}/>
                </div>
            )
        }
    }
    scrollToStock = () => {
        window.scrollTo({
            top: this.refStock.current.offsetTop - 200,
            behavior: "smooth"
        })
    }
    render(){
        return(
            <React.Fragment>
                <div id="products">
                    <div id="pro_body">
                        {this.makeBodyLeft()}
                        {this.makeBodyRight()}
                        {/* <div className="pro_body_l"> */}
                            
                            {/* <ProSlider id={this.state.data.PRO_SEQ}/>
                            <ProName data={this.state.data} changeSite={this.changeSite}/>
                            <ProInfo info={this.state.data.PRO_INFO}/> */}
                            {/* <PRO_COMMENT/> */}
                            {/* <ProBuyRule/> */}
                        {/* </div> */}
                        {/* <div className="pro_body_r">
                            <ProPrice price={this.state.data.PRICE}/>
                            <ProMap data={this.state.data}/>
                            <ProShare data={this.state.data}/>
                            <ProManu data={this.state.data}/>
                            <ProStock data={this.state.data} changeSite={this.changeSite}/>
                        </div> */}
                        <div className="pro_body_l">
                            {/* <ProComment id={this.state.data.id/> */}
                            
                            {/* <ProBuyRule/> */}
                        </div>
                        <div className="pro_body_r">
                            {/* <ProStock /> */}
                        </div>
                        {/* <ProAd /> */}
                    </div>
                  
                </div>
            </React.Fragment>
        )
    }
}

export default Products;