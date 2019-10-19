import React from "react"
import PropTypes from 'prop-types'

const Message = ({message, author}) => (
    <p className="message mb-4">
        <i>{author}</i>: <span className="each-message">{message}</span>
    </p>
)
Message.propTypes = {
    message: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
}

export default Message