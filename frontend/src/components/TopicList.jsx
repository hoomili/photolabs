import React from 'react';

import '../styles/TopicList.scss';
import TopicListItem from './TopicListItem';


const TopicList = (props) => {
  const topics = props.topics.map((topic) => {
    return (
      <TopicListItem 
        key={topic.id} 
        label={topic.label}
        id={topic.id}
        link={topic.link}
      />
    )
  });
  return (
  <div className="top-nav-bar--topic-list">
    { topics }
  
  </div>
  )
}

TopicList.defaultProps = {
  topics: [
    {
      id: 1,
      label: 'Nature',
      link: 'link placeholder' 
    },
    { 
      id: 2, 
      label: 'Food',
      link: 'link placeholder' 
    },
    {
      id: 3,
      label: 'People',
      link: 'link placeholder' 
    },
  ]
}
export default TopicList