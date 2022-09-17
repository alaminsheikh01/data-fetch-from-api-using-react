import axios from 'axios';
import React, {Component} from 'react';


class PostList extends Component {

    constructor(props){
        super(props)

        this.state = {
            posts: []
        }
    }


    // get request using componentDidMount()
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            this.setState({
                posts: response.data
            })
            
        })
    }

 
    render(){
        const {posts} = this.state;
        return(
            <div>
                <h2>I'm from Postlist</h2>
                {posts.map(post=> (
                    <div key={post.id}>
                        <p>{post.title}</p>
                    </div>
                ))}
            </div>
        )
    }
}
export default PostList;