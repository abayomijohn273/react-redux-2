// import React, {useState, useLayoutEffect, useEffect, useReducer, useContext} from 'react';
// import "bootstrap/dist/css/bootstrap.min.css"
// import "./style.css"
// import { postsData } from './postsData';
// const MyPost = React.createContext()

// function connect(mapStateToProps, mapDispatchToProps){
//     return function(Component){
//         return function(){
//             const {state, dispatch} = useContext(MyPost)
//             const stateToProps = mapStateToProps(state)
//             const dispatchToProps = mapDispatchToProps(dispatch)
//             const props = {...props, ...stateToProps, ...dispatchToProps}
            
//             return (
//             <Component {...props}/>
//             )
//         }
//     }
// }

// const Posts = (props) => {
//     useEffect(() => {
//         props.dispatchPosts(postsData)
//         console.log(this.props.posts)
//     })
//     return (
//         <div className="my-5">
//             <h3>All Posts</h3>
//             <div className="postHold">                
//             </div>
//         </div>
//         )
// }
// const mapStateToProps = (state) => {
//     return {
//         posts : state.posts
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         dispatchPosts : (payload) => dispatch({type: 'FETCH_POST', payload})
//     }
// }
// const HPostsC = connect(mapStateToProps, mapDispatchToProps)(Posts)

// const Try = () => {
//     const initialState = {
//         posts: [],
//         post: {},
//         editPost: false
//       }
      
//       const reducer = (state, action) => {
//         switch(action.type){
//           case 'FETCH_POST' : 
//             return {
//               ...state,
//               posts: action.payload
//             }
//             break;
//           default:
//             return state
//         }
//       }
    
//   const [state, dispatch] = useReducer(reducer, initialState)
//   return(
//     <>
//     <MyPost.Provider value={{state, dispatch}}>
//       <HPostsC/>
//     </MyPost.Provider>
//     </>
//   )
// }
// export default Try
