import React, {Component} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './map.scss'

class QueryBar extends Component {
    constructor(props){
        super(props);
        this.state = {} ;
    }
    handleSubmit =(e)=> {
        // **目前button雖然套這個事件但是button本身沒有value 要再修改
        var name_kw = e.target.value;
        // console.log(name_kw);
        this.setState({
          name_kw: name_kw
        });
        e.preventDefault();
        this.getStoresByName(name_kw);
      }
    
    getStoresByName = (name_kw) => {
        fetch('http://localhost:3000/map/name/'+name_kw)
        .then(res => res.json())
        .then(({data})=>{console.log(data)})
        // .then(res => this.setState({stores: res.data})) //研究完資料傳遞後打開
        .catch(err=> console.log(err))
    }

    render(){
        return(
            <React.Fragment>
                <div>
                    <input type="text" className="form-control" placeholder="或者輸入場館或工作室名稱..." onChange={this.handleSubmit}/>
                </div>
                <button className="btn btn-primary queryBtn" onClick={this.handleSubmit}>搜尋</button>
            </React.Fragment>
        )
    }
}
export default QueryBar;