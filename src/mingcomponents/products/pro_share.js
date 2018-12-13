import React,{Component} from 'react';
import './pro_share.scss';

class PRO_SHARE extends Component{
    constructor(props){
        super(props)
        this.state = {
            gid:this.props.id
       
        }
        console.log(this.state)

    }
    add = () => {
        
        var data ={
            gid:this.state.gid
        }
       
        console.log(this.props.id)
        // this.add(this.state.gid);
        fetch('http://localhost:3000/pro/collection', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(res => res.json())
            .then(data => {
                alert(data.message);
            })
      
          }
    componentDidUpdate(){
       

        
       
    }

    render(){
        return(
            <React.Fragment>
                <div id="pro_share">
                    <div id="favor">
                        <div id="add_favor"  onClick={this.add}>
                            <img src={require("../../images/favor.png")} alt=""/>
                            <p>加入收藏</p>
                        </div>
                        <div id="add_record">
                            <img src={require("../../images/record.png")} alt=""/>
                            <p>紀錄成績</p>
                        </div>
                    </div>
                    <div id="share">
                        <p>分享社群</p>
                        <div>
                            <div id="fblogo"></div>
                            <div id="linelogo"></div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }


}

export default PRO_SHARE;