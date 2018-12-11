import React, { Component } from 'react';
import Commentform from './commentform';
import './comment.scss';
import StarRatingComponent from 'react-star-rating-component';





class Membercomment extends Component {
    
  constructor(props) {

    super(props)
 
    console.log(this.props)

    this.state = {
      gid:this.props.id,
      comments: [],
      rating: [],
      count:[],
      member:[],  
      type: 'add'
  }
  console.log(this.state)
    
    
}



add = (comment) => {
    
  delete comment.id;
  fetch('http://localhost:3000/pro/comment', {
      method: 'POST',
      body: JSON.stringify(comment),
      headers: new Headers({
          'Content-Type': 'application/json'
      })
  }).then(res => res.json())
      .then(data => {
          alert(data.message);
          this.getComments();
          this.getRating();
          this.getCount();
          this.getMember();
      })

    }

 

  render() {
  
              let gid = this.state.gid
    

    return (
        <React.Fragment>
            <div className="all">
                <div className="d-flex justify-content-around border-bottom">
                <h5>網友評論評分:</h5>{this.state.rating.map(rating =>
                    
                    <div>
                       <StarRatingComponent 
                            name="rate1"   
                            starCount={5}  
                            value={rating.rating}   
                            renderStarIcon={() =><span class="fa fa-star"></span>}/>
                    </div>)}

                    {this.state.count.map(count => <h5>總共有{count.count}則評價</h5>)}
                </div>
                        

                        
                
                    {this.state.comments.map(comment => 
                      <div className="box row" key={comment.sid}>
                        <div className=" pic "><img className=" img " src={`/img/${comment.user_pic}`}/></div>
                            <div className="comment">
                                
                                <div className="title">

                                    {/* memberapi */}
                                    {/* <div>{this.state.member.map(member =>
                                    
                                    <h5>{member.nickname}</h5> )}
                                 </div>
                         */}
                                    <h5 className="name">{comment.nickname}:</h5>    
                                    <div className="star"  >{comment.create_at}</div>
                                    <div><StarRatingComponent name="rate1"   starCount={5}  value={comment.rating}   renderStarIcon={() =><span class="fa fa-star"></span>}/></div>
                                </div>
                                <p>{comment.comment}</p>
                            </div>
                      </div>
                    )}
                         


                    <div class="btn-toolbar justify-content-center m-5" role="toolbar" aria-label="Toolbar with button groups">
                        <div class="btn-group" role="group" aria-label="First group">
                            <button type="button" class="btn btn-secondary mx-2">1</button>
                            <button type="button" class="btn btn-secondary mx-2">2</button>
                            <button type="button" class="btn btn-secondary mx-2">3</button>
                            <button type="button" class="btn btn-secondary mx-2">4</button>
                        </div>
                    </div>





            
                     
                  <Commentform gid={gid} add={this.add}/>
            </div>          
        </React.Fragment>
    );
  }

  
componentDidMount() {
    this.getComments();
    this.myTime();
    this.getRating();
    this.getCount();
    // this.getMember()
  }
  
getComments() {
    let gid = this.state.gid
    
    fetch(`http://localhost:3000/pro/comment/${gid}`)
        .then(res => res.json())
        .then(comment => this.setState({ 
            comments:comment
        }))
        // .then(members => { return members })
  
  }
getRating() {
    fetch(`http://localhost:3000/pro/rating/${this.state.gid}`)
        .then(res => res.json())
        .then(rating => this.setState({ 
            rating: rating
        }))
      }
getCount() {
      fetch(`http://localhost:3000/pro/count/${this.state.gid}`)
        .then(res => res.json())
        .then(count => this.setState({ 
              count: count
          }))
      }
// getMember() {
//         fetch("http://localhost:3000/api/member")
//           .then(res => res.json())
//           .then(member => this.setState({ 
//                 member: member
//             }))
//         }
myTime = (create_at) =>{
    var t = new Date(create_at);
    return(
        t.getFullYear() + '-' +('0' + (t.getMonth()+1)).slice(-2)+ '-' +  t.getDate() + ' '+t.getHours()+ ':'+('0' + (t.getMinutes())).slice(-2)+ ':'+t.getSeconds()
    )
}
}


export default Membercomment;