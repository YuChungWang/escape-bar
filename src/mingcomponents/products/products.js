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
            data: this.props.location.state.id
        }
    }
    render(){
        return(
            <React.Fragment>
                <div id="products">
                    <div id="pro_body">
                        <div className="pro_body_l">

                            <ProSlider id={this.state.data.PRO_SEQ}/>
                            <ProName data={this.state.data}/>
                            <ProInfo info={this.state.data.PRO_INFO}/>
                            <PRO_COMMENT id={this.state.data.PRO_SEQ}/>
                            <ProBuyRule/>
                        </div>
                        <div className="pro_body_r">
                            <ProPrice price={this.state.data.PRICE}/>
                            <ProMap data={this.state.data}/>
                            <ProShare data={this.state.data}/>
                            <ProManu data={this.state.data}/>
                            <ProStock data={this.state.data}/>
                        </div>
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