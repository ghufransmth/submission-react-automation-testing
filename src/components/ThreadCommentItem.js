import React from 'react';
import PropTypes from 'prop-types';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import { postedAt } from '../utils';

function ThreadCommentItem({
  id,
  content,
  createdAt,
  owner,
  upVotesBy,
  downVotesBy,
  authUser,
}) {
  return (
    <div role="button" tabIndex={0} className="talk-item">
      <div className="talk-item__user-photo">
        <img src={owner.avatar} alt={owner} />
      </div>
      <div className="talk-item__detail">
        <header>
          <div className="talk-item__user-info">
            <p className="talk-item__user-name">{owner.name}</p>
            <p className="talk-item__user-id">
              {owner.id}
            </p>
          </div>
          <p className="talk-item__created-at">{postedAt(createdAt)}</p>
        </header>
        <article>
          <p className="talk-item__text">{content}</p>
          <br />
          <p className="talk-item__text">
            <FaThumbsUp />
            &nbsp;&nbsp;
            {upVotesBy.length}
            &nbsp;&nbsp;
            <FaThumbsDown />
            &nbsp;&nbsp;
            {downVotesBy.length}
          </p>
        </article>
      </div>
    </div>
  );
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const talkItemShape = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(userShape).isRequired,
  authUser: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string),
  downVotesBy: PropTypes.arrayOf(PropTypes.string),
};

ThreadCommentItem.propTypes = {
  ...talkItemShape,
};

ThreadCommentItem.defaultProps = {
  upVotesBy: null,
  downVotesBy: null,
};

export { talkItemShape };

export default ThreadCommentItem;
