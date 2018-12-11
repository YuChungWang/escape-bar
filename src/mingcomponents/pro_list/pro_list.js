import React, {Component} from 'react';

import './pro_list.scss';
import { SearchBar,
         ProFilter,
         ProCards,
         ProCategories
 } from './pro_list_components/index.js'

class ProList extends Component{
  constructor(props){
    super(props)
    this.state = {
      products: [],
      records: false,
      homeRecord: false,
      type:"search",
      homeType: "",
      sort: ""
    }
  }
  search = (data) => {
    this.setState({
      type: "search",
      homeType: ""
    })
    // let getProducts = [];
    data.sort = this.state.sort
    // console.log("newData:"+newData)
    console.log("data:"+data)
    console.log(JSON.stringify(data))
    fetch('http://localhost:3000/eb/pro_list/' + JSON.stringify(data),{
      method:'GET',
      mode: "cors",
      // body: JSON.stringify(data),
      // headers: new Headers({
      //   'Content-Type':'application/json'
      // })
    })
    .then(res=>res.json())
    .then(products => this.setState({
      products:products,
      records: data,
    }));
    // .then(products => getProducts = products)
    // console.log("products:" + JSON.stringify(this.state.products));
    // console.log(this.state.products)
    console.log("records:" + this.state.records);
  }
  filter = (str) => {
    this.setState({
      type: "filter",
      homeType: ""
    })
    fetch('http://localhost:3000/eb/pro_list/filter/' + str ,{
      method:'GET',
      mode:'cors',
    })
    .then(res => res.json())
    .then(products => this.setState({
      products: products,
    }))
  }
  sort = (sort) => {
    this.setState({
      sort 
    }, ()=> {
      if(this.state.type === "search" && this.state.records){
        this.search(this.state.records)
      }else if(this.state.homeType === "homeSearch"){
        this.homeSearch(this.state.homeRecords)
      }
    })
  }
  componentWillMount = () => {
    if(this.props.location.state.type === 'homeSearch'){
      let str =this.props.location.state.str
      if(str !== ""){
        this.homeSearch(str)
      }
    }
    
  }
  homeSearch = (str) => {
    let sort = this.state.sort
    let newStr = str + sort 
    fetch('http://localhost:3000/eb/pro_list/filter/' + newStr ,{
      method:'GET',
      mode:'cors',
    })
    .then(res => res.json())
    .then(products => this.setState({
      products: products,
      homeRecords: str,
      homeType: "homeSearch"
    }))
  }
  render(){
    console.log("type:"+this.state.type)
    return(
      <React.Fragment>
        <div id="pro_list">
          <SearchBar search={this.search} type={this.state.type}/>
          <div className="w80">
            <ProFilter filter={this.filter} type={this.state.type} count={this.state.products.length} sort={this.sort}/>
            <ProCards products={this.state.products}/>
            <ProCategories search={this.search}/>
          </div>
        </div>
      </React.Fragment>
    )
  }


}

export default ProList;