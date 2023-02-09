import React from 'react';
import PropTypes from 'prop-types';
import ThreadCommentItem, { talkItemShape } from './ThreadCommentItem';

function ThreadCommentList({ threads, like }) {
  return (
    <div className="talks-list">
      {
         threads.map((thread) => (
           <ThreadCommentItem key={thread.id} {...thread} like={like} />
         ))
      }
    </div>
  );
}

ThreadCommentList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(talkItemShape)).isRequired,
  like: PropTypes.func.isRequired,
};

export default ThreadCommentList;
