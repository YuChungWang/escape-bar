import React, {Component} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './articlebody.scss'
import Article from './Article'
import {BrowserRouter, Route, Link} from 'react-router-dom'

class Articl extends Component{
    constructor(props){
        super(props);
        console.log(props);
        this.articleName = props.match.params.articlename;
        }


    render(){
        return(
            <React.Fragment>
                <Route path="/article/:articlename" component={Article}/>
            </React.Fragment>
        )
    }
}


export default Articl;