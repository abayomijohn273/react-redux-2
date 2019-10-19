import React from "react"
import PropTypes from 'prop-types'

const User = ({users}) => (
    <aside id="sidebar" className="sidebar text-center">
        <ul>
            {
                users.map(user => 
                  <li key={user.id}>{user.name}</li>
                )
            }
        </ul>
    </aside>
)
User.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number.isRequired,
            name:PropTypes.string.isRequired
        }).isRequired
    ).isRequired
}

export default User