import React, {Component} from 'react';

class GameInfo extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <React.Fragment>
                <h6>揪團遊戲資訊</h6>
                    
                <div className={"height" + " " + this.props.heightTest}>
                    <div className="row">
                        <div>
                            <img className={this.props.heightTest} src={`./img/game/${this.props.IMG_NAME}`}/>
                        </div>
                        <div>
                            <p>遊戲建議人數：{this.props.PEOPLE_MIN}～{this.props.PEOPLE_MAX}</p>
                            <p>遊戲時間：{this.props.GAME_TIME}分鐘</p>
                            <p>遊戲售價：{this.props.PRICE}元</p>
                        </div>
                    </div>
                    
                </div>
            </React.Fragment>
            
        )
    }
}


export default GameInfo;