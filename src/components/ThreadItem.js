import React from 'react';
import PropTypes from 'prop-types';
import { FaThumbsUp, FaThumbsDown, FaComment } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { postedAt } from '../utils';

function ThreadItem({
  id,
  title,
  body,
  category,
  createdAt,
  ownerId,
  totalComments,
  upVotesBy,
  downVotesBy,
  authUser,
  user,
}) {
  const navigate = useNavigate();
  const onTalkClick = () => {
    navigate(`/threads/${id}`);
  };

  const onTalkPress = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      navigate(`/threads/${id}`);
    }
  };
  return (
    <div role="button" tabIndex={0} className="talk-item" onClick={onTalkClick} onKeyDown={onTalkPress}>
      <div className="talk-item__detail">
        <header>
          <div className="talk-item__user-info">
            <p className="talk-item__user-name">{title}</p>
            <p
              className="talk-item__user-id"
              style={{
                border: '1px solid #2d3e50', borderRadius: '8px', padding: '4px', width: 'fit-content',
              }}
            >
              #
              {category}
            </p>
          </div>
          <p className="talk-item__created-at">{postedAt(createdAt)}</p>
        </header>
        <article>
          <br />
          <p className="talk-item__text">{body}</p>
          <br />
          <p className="talk-item__text">
            <FaThumbsUp />
            &nbsp;&nbsp;
            {upVotesBy.length}
            &nbsp;&nbsp;
            <FaThumbsDown />
            &nbsp;&nbsp;
            {downVotesBy.length}
            &nbsp;&nbsp;
            <FaComment />
            &nbsp;&nbsp;
            {totalComments}
            &nbsp;
          </p>
        </article>
      </div>
    </div>
  );
}

const talkItemShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  ownerId: PropTypes.string.isRequired,
  totalComments: PropTypes.number.isRequired,
  authUser: PropTypes.string.isRequired,
};

ThreadItem.propTypes = {
  ...talkItemShape,
  upVotesBy: PropTypes.arrayOf(PropTypes.string),
};

ThreadItem.defaultProps = {
  upVotesBy: null,
};

export { talkItemShape };

export default ThreadItem;
