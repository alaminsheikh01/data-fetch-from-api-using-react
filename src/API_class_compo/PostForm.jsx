import axios from 'axios';
import React, {Component} from 'react'


class PostForm extends Component {

    constructor(props){
        super(props)

        this.state = {
            userId: '',
            title: '',
            body: ''
        }
    }

    render(){

        const {userId, title, body} = this.state;

        const handleChange =(e) =>{
            this.setState({
                [e.target.name]: e.target.value
            })
        }


        const handleSubmit=(e) => {
            e.preventDefault()
            
            axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
            .then(response => {
                console.log(response)
            })
        }



        return(
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>UerId</label>
                        <input type="text" name="userId" value={userId} onChange={handleChange}/>
                    </div>
                    <div>
                        <label>Title</label>
                        <input type="text" name="title" value={title} onChange={handleChange}/>
                    </div>
                    <div>
                        <label>Body</label>
                        <input type="text" name="body" value={body} onChange={handleChange}/>
                    </div>
                   <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default PostForm;