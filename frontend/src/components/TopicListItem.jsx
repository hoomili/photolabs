import React from 'react';

import '../styles/TopicListItem.scss';

const TopicListItem = (props) => {
  const { setId } = props;
  return (
    <div className="topic-list--item" onClick={() => setId(props.id)}>
      <span>{props.title}</span>
    </div>
  );
};
export default TopicListItem;