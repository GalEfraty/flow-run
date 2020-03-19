import React from 'react'
import "../styles/displaybtn.css"

const Upload = ({toggleDisplayFile}) => {
    
    return (
        <div className="display-wrapper">
            <button className="display-btn" onClick={toggleDisplayFile}>Run The Flow!</button>
        </div>
    )
}

export default Upload
