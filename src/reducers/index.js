import {combineReducers} from "redux"
import messages from "./messages.js"
import users from "./users"

//combining two reducer into one

const chat = combineReducers({
    messages,
    users
})
export default chat