import React from 'react';
import PropTypes from 'prop-types';
import ThreadCommentItem, { talkItemShape } from './ThreadCommentItem';

function ThreadCommentList({ threads }) {
  return (
    <div className="talks-list">
      {
         threads.map((thread) => (
           <ThreadCommentItem key={thread.id} {...thread} />
         ))
      }
    </div>
  );
}

ThreadCommentList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(talkItemShape)).isRequired,
};

export default ThreadCommentList;
