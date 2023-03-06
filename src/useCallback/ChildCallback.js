import React, { memo } from 'react'

const ChildCallback = (props) => {
    // console.log(props);
    return (

        <div>
            <h1>Child Component</h1>
        </div>
    )
}
export default memo(ChildCallback)
