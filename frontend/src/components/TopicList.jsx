import React from 'react';

import '../styles/TopicList.scss';
import TopicListItem from './TopicListItem';
import FavBadge from './FavBadge';

const TopicList = (props) => {

  const { topics } = props;

  const newTopics = topics.map((topic) => {

    return (
      <TopicListItem
        key={topic.id}
        title={topic.title}
        id={topic.id}
        slug={topic.slug}
        setId={props.setId}
      />
    );
  });
  
  return (
    <div className="top-nav-bar--topic-list">
      {newTopics}
      <div>
        <FavBadge isFavPhotoExist={props.isFavPhotoExist} />
      </div>
    </div>
  );
};

export default TopicList;