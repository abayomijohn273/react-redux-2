import React, {useEffect} from 'react'
import { postsData } from '../postsData'
import {FETCH_POST, DELETE_POST, EDIT_POST} from "../constant"
 import  {MyPost} from "../App"
const Posts = (props) => {
    const {state, dispatch} =  React.useContext(MyPost)
    useEffect(() => {
        dispatch({
            type: FETCH_POST,
            payload: postsData
        })
        console.log(state.posts)
    },...state.posts)
    const handleDelete = (id) => {
        dispatch({
            type: DELETE_POST,
            payload: postsData.filter(p => p.id !== id)
        })
        console.log("Deleted successfully..."+id)
    }
    const handleEdit = (id) => {
        const getData = postsData.find(p => p.id === id)
        // console(getData)
        dispatch({
            type: EDIT_POST,
            payload: getData
        })
    }
    if(state.posts.length === 0){
        return (<h1>Loading....</h1>)
    }else {
    return (
        <div className="my-5">
            <h3>All Posts</h3>
            <div className="postHold">  
            {
                state.posts.map(post => (
                    <div className="posts" key={post.id}>
                        <p>{post.title}</p>
                        <p>{post.body}</p>
                        <button className="btn-success form-control" onClick={() => handleEdit(post.id)}>Edit</button>
                        <button onClick={() =>handleDelete(post.id)} className="btn-danger form-control">Delete</button>
                    </div>
                ))
            }
            </div>
        </div>
        )
    }
}
export default  Posts
