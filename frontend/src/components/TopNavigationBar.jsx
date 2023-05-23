import React from 'react';

import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';

const TopNavigation = (props) => {
  const { viewHome } = props
  return (
    <div className="top-nav-bar">
      <div className="top-nav-bar--logo" onClick={viewHome}>PhotoLabs</div>
      <div>
        <span><TopicList
          isFavPhotoExist={props.isFavPhotoExist}
          topics={props.topics}
          setId={props.setId}
          viewFavorites={props.viewFavorites}
        /></span>
      </div>
    </div>
  );
};

export default TopNavigation;