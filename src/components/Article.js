import React, {Component} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './articlebody.scss'


class Article extends Component{
    constructor(props){
        super(props);
        // console.log(props);
        //this.articleName = props.match.params.articlename;
        //console.log(this.articleName);
        this.state = {
            articleTitle: "",
            articleContent: "",
            createdAt: "",
            articleName:props.match.params.articlename
        }
    }

    // componentWillMount(){
    //     this.getArticleBody();
    //     // console.log(this.state)

    // }

    // componentWillUpdate(){
    //      this.getArticleBody();
    //     // console.log(this.state)
    // }
    // componentDidUpdate(){
    //     this.getArticleBody();
    // }
    componentDidMount(){
        this.getArticleBody();
        // console.log(this.state)
    }
    static getDerivedStateFromProps(props, state) {
        var articleName = props.match.params.articlename;
        if (articleName !== state.articleName) {
         //  console.log("different:" + articleName)
           fetch('http://localhost:4000/article/'+articleName)
           .then(res => res.json())
           // .then(({data})=>{console.log(data[0])})
           .then( ({data})  => {            
               console.log(data);
               return{
                articleTitle: data[0].article_title,
                articleContent: data[0].article_content,
                createdAt: data[0].created_at,
                articleName:articleName
            }
           })
           
           
        }
        return null;
    }

    getArticleBody(){
        let articleName = this.state.articleName;
       console.log("fetch:" + articleName)
        fetch('http://localhost:4000/article/'+articleName)
        .then(res => res.json())
        // .then(({data})=>{console.log(data[0])})
        .then( ({data})  => {
          this.setState({
              articleTitle: data[0].article_title,
              articleContent: data[0].article_content,
              createdAt: data[0].created_at
            })
        })
        .catch(err=> console.log(err));
    }


    render(){
        console.log(this.state);
        return(
            <React.Fragment>
                <section>
                    <div className="container">
                        <div className="postWrapperSpace"></div>
                        <div className="postWrapper my-5 p-4">
                            <h3>{this.state.articleTitle}</h3>
                            <div className="">{this.state.articleContent}</div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}


export default Article;