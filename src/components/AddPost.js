import React, {useState, useEffect, useContext} from 'react'
import { MyPost } from '../App'
import { ADD_POST } from '../constant'
import { postsData } from '../postsData'
const AddPost = (props) => {
    const {state, dispatch} = useContext(MyPost)
    const [data, setData] = useState({title: "", body:""})
    const handleChange= (e) => {
        setData( {...data, [e.target.name] : e.target.value})
    }
    useEffect(() => {
        if(state.post === {}){
            return
        } else{
            setData({
                title: state.post.title,
                body: state.post.body
            })
        }
    }, [state.post])
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(data)
        const addPost = {
            id: state.posts.length + 1,
            title: data.title,
            body: data.body
        }
        if(state.editPost){
            let edit = postsData.map(p => (p.id === state.post.id) ? {...p, title: data.title, body:data.body} : p)
            dispatch({
                type: ADD_POST,
                payload: edit
            })
            
        }else{
            dispatch({
                type: ADD_POST,
                payload: postsData.concat(addPost)
            })
        }
        
        setData({title:"", body:""})
    }
    return (
        <div className="col-md-6 offset-md-3">
            <h1>ADD POST</h1>
            <form onSubmit={handleSubmit} className="form-group">
                <label htmlFor="title">Title:</label>
                <input type="text" name="title" onChange={handleChange} value={data.title} className="form-control"/>

                <label htmlFor="title">Body:</label>
                <input type="text" name="body" onChange={handleChange} value={data.body} className="form-control" />
                <button type="submit">{state.editPost ? "Edit Now" : "Post Now"}</button>

            </form>
        </div>
    )
}

export default AddPost;
