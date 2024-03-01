import React, { useState } from 'react'

import HomeStyles from './Home.module.css'
import downvoteIcon from '/downvote_icon.svg'
import upvoteIcon from '/upvote_icon.svg'
import commentIcon from '/comment_ic_icon.svg'


const Post = () => {


  return (
    <div className={HomeStyles.postElement}>
        <div className={HomeStyles.postHeader}>
            <img src="" alt="" />
            <div className={HomeStyles.postHeaderText}>
                <h3>The title of the post that is realy big bzaf</h3>
                <p>t/mentalIlness</p>
            </div>
        </div>

        <div className={HomeStyles.postCore}>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus saepe odio nam soluta temporibus! Dolore, officia vitae? Ducimus vitae laudantium velit earum rerum aliquam aliquid minus, placeat dolore voluptatum quae?</p>
        </div>

        <div className={HomeStyles.postFooter}>
            <div className={HomeStyles.postFooterElement}>
                <img src={upvoteIcon} alt="" />
                <p>69</p>
                <img src={downvoteIcon} alt="" />
            </div>
            <div className={HomeStyles.postFooterElement}>
                <img className={HomeStyles.commentIconFix} src={commentIcon} alt="" />
                <p>69</p>
            </div>
        </div>

    </div>
  )
}

export default Post