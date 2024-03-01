import React from 'react'
import '../index.css'


const Popup = ({ title }) => {
  return (
    <div className='popup' /* add on click to delete */>
      <div className='popupBody'>
        <div className='popupHeader'>
          <h3>{title}</h3>
          <p>x</p>
        </div>

        <div className="innerBody">
          <div className='bodyCore'>
            <p>sss</p>
            <p>sss</p>
            <p>sss</p>
            <p>sss</p>
            <p>sss</p>
          </div>
          <div className='bodyInput'>
            <input type="text" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Popup