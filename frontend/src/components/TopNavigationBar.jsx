import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';


const TopNavigation = (props) => {
  return (
    <div className="top-nav-bar">
      <div className="top-nav-bar--logo">PhotoLabs</div>
      <div>
        <span><TopicList isFavPhotoExist = {props.isFavPhotoExist}/></span>
      </div>
    </div>
  )
}

export default TopNavigation;