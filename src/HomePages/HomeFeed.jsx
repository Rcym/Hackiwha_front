import React from 'react'
import HomeStyles from './Home.module.css'
import FeedHeader from './FeedHeader'
import Post from './Post'
import ForYouElement from './ForYouElement'
import AddPost from './AddPost.jsx'

const HomeFeed = () => {
  return (
    <div className={HomeStyles.mainFeedCore}>
        <div className={HomeStyles.actualFeed}>
            <FeedHeader />
            <AddPost />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>

        <div className={HomeStyles.detailSection}>
            <div className={HomeStyles.detailElement}>
                <h3>Description</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo commodi, at minima amet ad quia veritatis laudantium rerum, fuga obcaecati labore</p>
            </div>
            <div className={HomeStyles.detailElement}>
                <h3>For you</h3>
                <ForYouElement />
                <ForYouElement />
                <ForYouElement />
            </div>
        </div>

    </div>
  )
}

export default HomeFeed