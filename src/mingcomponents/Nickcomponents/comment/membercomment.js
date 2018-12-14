import React, { Component } from 'react';
import Commentform from './commentform';
import './comment.scss';
import StarRatingComponent from 'react-star-rating-component';
import Edit from './edit'

var uid = null;
var name = null;



class Membercomment extends Component {
    
  constructor(props) {

    super(props)
 
    console.log(this.props)

    this.state = {
      uid:uid,
      name:name,
      gid:this.props.id,
      comments: [],
      rating: [],
      count:[],
      member:[],  
      type: 'add',
      d: 'false'

  }
  console.log(this.state)
    
    
}


add = (comment) => {
    if (localStorage.getItem('userId') != null){
    
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
        //   this.getMember();
      })}else{
        alert("請先登入!")

      }

    }

    update = (data) => {
        // console.log(data)
       
         var data = {
             
             gid:this.state.gid,
             uid:this.state.uid,
             comment:data.comment
         }
         console.log(this.state.comment)
         fetch(`http://localhost:3000/pro/comment/${this.state.gid}` , {
             method: 'PUT',
             body: JSON.stringify(data),
             headers: new Headers({
                 'Content-Type': 'application/json'
             })
         }).then(res => res.json())
             .then(data => {
                 alert(data.message);
                 this.getComments();
                 this.getRating();
                 this.getCount();
 
             })
     }

 

  render() {
  
              let gid = this.state.gid
    

    return (
        <React.Fragment>
            <div className="all">
                <div className="row d-flex justify-content-around border-bottom">

                <div className=" "><h5>網友評論評分:</h5></div>
                {this.state.rating.map(rating =>
                    
                    <div className="">
                       <StarRatingComponent 
                            name="rate1"   
                            starCount={5}  
                            value={rating.rating}   
                            renderStarIcon={() =><span class="fa fa-star"></span>}/>
                    </div>)}

                    {this.state.count.map(count => <div className="col-4 "><h5>總共有{count.count}則評價</h5></div>)}
                </div>
                        

                        
                
                    {this.state.comments.map(comment => 
                      <div className="box " key={comment.sid}>
                        <div className=" pic "><img className=" img " src={"http://localhost:3000/images/users/"+comment.user_pic}/></div>
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





            
                     
            {this.state.d === 'true' ? 

            <Edit data={this.state.comments} uid={this.state.uid} gid={this.state.gid} update={this.update}/> 
        : 
            <Commentform   gid={gid} name={this.state.name} uid={this.state.uid} add={this.add}/> 
}
            </div>          
        </React.Fragment>
    );
  }


  
componentDidMount() {
    // this.getUser();
    const user = localStorage.getItem('userId');
    const user2 = JSON.parse(user);
    // uid = user2.uid
    // name = user2.nickname
    this.getComments();
    this.myTime();
    this.getRating();
    this.getCount();
    this.getMember()
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
      getMember() {
        fetch(`http://localhost:3000/pro/member/${this.state.gid}`)
          .then(res => res.json())
          .then(member => this.setState({ 
                member: member
            },function(){
                for(var i=0;i<member.length;i++){
                    console.log(member[i].uid)
                    console.log(this.state.uid)
                    if(this.state.uid === (member[i].uid)){
                        this.setState({
                            d: 'true'
                        })
                    }
                }
            }))
        }
// getUser() {
//     const user = localStorage.getItem('userId');
//     const user2 = JSON.parse(user);
//     uid = user2.uid
//     name = user2.nickname
//       }
    
myTime = (create_at) =>{
    var t = new Date(create_at);
    return(
        t.getFullYear() + '-' +('0' + (t.getMonth()+1)).slice(-2)+ '-' +  t.getDate() + ' '+t.getHours()+ ':'+('0' + (t.getMinutes())).slice(-2)+ ':'+t.getSeconds()
    )
}
}


export default Membercomment;