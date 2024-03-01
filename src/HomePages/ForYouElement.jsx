import React from 'react'
import HomeStyles from './Home.module.css'

const ForYouElement = () => {
  return (
    <div className={HomeStyles.forYouElement}>
        <img src="" alt="" />
        <div className={HomeStyles.forYouElementText}>
            <h3>t/RandomSub</h3>
            <p>2k followers</p>
        </div>
    </div>
  )
}

export default ForYouElement