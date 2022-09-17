import React,{useState, useEffect} from 'react'
import axios from 'axios'

function DataFetching() {

    const [posts, setPosts] = useState([])
    const [id, setId] = useState(1)


    useEffect(() =>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res =>{
            console.log(res.data)
            setPosts(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[id])

    return(
        <div>
            <input type='text' value={id} onChange={e => setId(e.target.value)}/>
            <div>{posts.title}</div>
            {/* {posts.map(post => (
                <div key={post.id}>
                    <p>{post.title}</p>
                </div>
            ))} */}
        </div>
    )
}

export default DataFetching;