import React from 'react'
import ProfileStymes from './Profile.module.css'
import Post from './Post'

const ProfilePage = () => {
  return (
    <div className={ProfileStymes.ProfilePage}>

        <div className={ProfileStymes.ProfileTitle}>
            <div className={ProfileStymes.PhotoName}>
                <img src="" alt="" />
                <h3>Dr name username</h3>
                <p>875 teffa7a</p>
            </div>

            <div className={ProfileStymes.profileInfos}>
                <div className={ProfileStymes.infoElement}>
                    <p>email address : </p>
                    <h3>longemail@address.com</h3>
                </div>
                <div className={ProfileStymes.infoElement}>
                    <p>phone number : </p>
                    <h3>0123456789</h3>
                </div>
                <div className={ProfileStymes.infoElement}>
                    <p>local address : </p>
                    <h3>69 Ave new avenue city / country</h3>
                </div>
            </div>
        </div>

        <Post />
        <Post />
        <Post />
    </div>
    
  )
}

export default ProfilePage