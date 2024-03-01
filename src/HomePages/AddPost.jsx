import React, { useState } from 'react'

import HomeStyles from './Home.module.css'
import pictureIcon from '/picture_icon.svg'


const AddPost = () => {


  return (
    <div className={HomeStyles.postElement}>
        <div className={HomeStyles.postHeader}>
            <img src="" alt="" />
            <div className={HomeStyles.postHeaderText}>
                <input type="text" placeholder='Post title' />
            </div>
        </div>

        <div className={HomeStyles.postCore}>
            <textarea cols="30" rows="5"></textarea>
        </div>

        <div className={HomeStyles.postFooterAdd}>
            <div className={HomeStyles.postFooterElement}>
                <img className={HomeStyles.uploadIcon} src={pictureIcon} alt="" />
                <p>Add Picture</p>
            </div>
            <div className={HomeStyles.postFooterElement}>
                <p>Submit Post</p>
            </div>
        </div>

    </div>
  )
}

export default AddPost