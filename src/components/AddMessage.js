import React from "react"
import PropTypes from 'prop-types'

const AddMessage = (props) => {
    let input
    return (
        <section>
            <input
                onKeyPress={(e)=>{
                    if(e.key === 'Enter'){
                        props.dispatch(input.value, 'Me')
                        input.value= ''
                    }
                }}
                type="text"
                className="form-control"
                ref = {node => input = node}
                placeholder="Type a message"
            />
        </section>
    )
}

AddMessage.propTypes = {
    dispatch: PropTypes.func.isRequired
}

export default AddMessage