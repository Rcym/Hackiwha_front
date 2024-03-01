import React from 'react'
import HomeStyles from './Home.module.css'
import '../index.css'
import searchIcon from '/Search.svg'
import HomeFeed from './HomeFeed'
import ProfilePage from './ProfilePage'
import teffa7a_svg from  '/teffaa_logo_light.svg';
import ExploreElement from './ExploreElement'
import ExplorePage from './ExplorePage'
import ExploreIcon from '/exploreIcon.svg'
import profileIcon from '/profileIcon.svg'
import homeIcon from '/homeIcon.svg'
import gearIcon from '/gearIcon.svg'
import Popup from '../components/Popup'

const HomePage = ({currentPage}) => {


  return (
    <div className={HomeStyles.homeBody}>
        <div className={HomeStyles.SideMenu}>

            <div className='logoCompMedium sideMenuLogo'>
                <link rel="stylesheet" href="" />
                <img className={HomeStyles.bgTeffa7} src={teffa7a_svg}/>
                <img className={HomeStyles.bgTeffa7_top} src={teffa7a_svg}/>
                <img src="/teffa7a_sus_white.svg" className='logoCompSvgMedium lightSvg'/>
                <div className="logoTextSection light"> 
                    <h2>Submedics</h2>
                    <p>by teffa77a team</p>
                    
                </div>
            </div>

            <div className={HomeStyles.sideMenuElements}>
                <a href='/home' className={HomeStyles.sideMenuElement}>
                    <img src={homeIcon} alt="" />
                    <h3>Home</h3>
                </a>
                <a href='/explore' className={HomeStyles.sideMenuElement}>
                    <img src={ExploreIcon} alt="" />
                    <h3>Explore</h3>
                </a>
                <a href='/profile' className={HomeStyles.sideMenuElement}>
                    <img src={profileIcon} alt="" />
                    <h3>Profile</h3>
                </a>

            </div>

            <div className={`${HomeStyles.sideMenuElement} ${HomeStyles.parametreElement}`}>
                <img src={gearIcon} alt="" />
                <h3>Parametres</h3>
            </div>
            
        </div>

        

        <div className={HomeStyles.HomeMain}>
            <div className={HomeStyles.mainSection}>

                <div className={HomeStyles.NavBar}>
                    <div className={HomeStyles.searchBar}>
                        <img src={searchIcon} alt="" />
                        <input type="text" placeholder='. . .' />
                    </div>
                    <div className={HomeStyles.navBarProfile}>
                        <img src="" alt="" />
                        <div className={HomeStyles.navbarProfileText}>
                            <h3>Username twil</h3>
                            <p>24 teffa7a</p>
                        </div>
                    </div>
                </div>

                {currentPage == 'home'? (
                    <HomeFeed />
                ) : (currentPage == 'profile' ? (
                    <ProfilePage />
                ): (currentPage == 'explore') ? (
                    <ExplorePage />
                ) : (<></>) )
                }

                {/* <HomeFeed /> */}
                {/* <ProfilePage /> */}
                
                
                {/* <Popup title={'Comments'} /> */}

                    
            </div>
        </div>
    </div>
  )
}

export default HomePage