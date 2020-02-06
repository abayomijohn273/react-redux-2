import React, {useState, useLayoutEffect, useEffect, useReducer, useContext} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "./style.css"
import AddPost from './components/AddPost';
import { FETCH_POST, ADD_POST, DELETE_POST, EDIT_POST } from './constant';
import Posts from './components/Posts';

const initialState = {
  posts: [],
  post: {},
  editPost: false
}

const reducer = (state, action) => {
  switch(action.type){
    case FETCH_POST : 
      return {
        ...state,
        posts: action.payload
      }
      break;
    case ADD_POST:
      return{
        ...state,
        posts: action.payload,
        editPost: false
      }
      case DELETE_POST: 
        return {
          ...state, 
          posts: action.payload
        }
      case EDIT_POST:
        return{
          ...state,
          post: action.payload,
          editPost: true
        }
    default:
      return state
  }
}


export const MyPost = React.createContext()
const App = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return(
    <>
    <MyPost.Provider value={{state, dispatch}}>
      <AddPost/>
      <Posts/>
    </MyPost.Provider>
    </>
  )
}
export default App
