import React from 'react';
import PropTypes from 'prop-types';
import ThreadItem, { talkItemShape } from './ThreadItem';

function ThreadList({ threads }) {
  return (
    <div className="talks-list">
      {
         threads.map((thread) => (
           <ThreadItem key={thread.id} {...thread} />
         ))
      }
    </div>
  );
}

ThreadList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(talkItemShape)).isRequired,
};

export default ThreadList;
