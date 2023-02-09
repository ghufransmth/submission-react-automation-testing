import React from 'react';
import PropTypes from 'prop-types';
import ThreadItem, { talkItemShape } from './ThreadItem';

function ThreadList({ threads, like }) {
  return (
    <div className="talks-list">
      {
         threads.map((thread) => (
           <ThreadItem key={thread.id} {...thread} like={like} />
         ))
      }
    </div>
  );
}

ThreadList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(talkItemShape)).isRequired,
  like: PropTypes.func.isRequired,
};

export default ThreadList;
