import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';


const TopNavigation = (props) => {
  return (
    <div className="top-nav-bar">
      <div className="top-nav-bar--logo">PhotoLabs</div>
      <div>
        <span><TopicList isFavPhotoExist = {props.isFavPhotoExist} topics={props.topics}/></span>
      </div>
    </div>
  )
}

export default TopNavigation;