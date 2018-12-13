import React, {Component} from 'react';
import { NavLink } from "react-router-dom";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/src/alice-carousel.scss";

class companyInfoGameSlider extends Component{
    constructor(props){
        super(props)
    }

    galleryItems() {
        return (
            this.props.productsInfoAll.map((products, i) =>
                <NavLink className="pro_card" key={products.PRO_SEQ} to={{pathname: `/proList/products/${products.PRO_SEQ}`,state: {id: products.PRO_SEQ}}}>
                    <img key={`key-${i}`} src={`/img/game/${products.IMG_NAME}`} className="products_images"/>
                    <p>{`${products.P_ID === this.props.sid ? '此分館遊戲遊戲' : ''}`}</p>
                </NavLink>
            )
        )
    };

    render(){
        const items = this.galleryItems();
        return(
            <React.Fragment>
                <h2>123</h2>
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
            </React.Fragment>
            
        )
    }
}

export default companyInfoGameSlider