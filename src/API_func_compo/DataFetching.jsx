import React,{useState, useEffect} from 'react'
import axios from 'axios'

function DataFetching() {

    const [posts, setPosts] = useState([])


    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res =>{
            console.log(res.data)
            setPosts(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    })

    return(
        <div>
            {posts.map(post => (
                <div key={post.id}>
                    <p>{post.title}</p>
                </div>
            ))}
        </div>
    )
}

export default DataFetching;