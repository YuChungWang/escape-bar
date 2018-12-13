import React, { Component } from 'react';

class UserFirst extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <React.Fragment>
                <div className="alert alert-warning" role="alert">
                    <h4 className="alert-heading text-center">你還沒有資料哦～</h4>
                </div>
            </React.Fragment>
        )
    }
}

export default UserFirst;