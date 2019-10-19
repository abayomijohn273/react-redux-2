import {connect} from "react-redux"
import UserListComponent from "../components/User"


const User = connect(state => ({
    users: state.users
}), {})(UserListComponent)

export default User