import React from 'react';
import PropTypes from 'prop-types';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import { postedAt } from '../utils';

function ThreadDetail({
  id,
  title,
  body,
  category,
  createdAt,
  owner,
  upVotesBy,
  downVotesBy,
  authUser,
}) {
  return (
    <section className="talk-detail">
      <header>
        <img src={owner.avatar} alt={owner} />
        <div className="talk-detail__user-info">
          <p className="talk-detail__user-name">{title}</p>
          <p className="talk-detail__user-id">
            @
            {owner.name}
          </p>
        </div>
      </header>
      <article>
        <p className="talk-detail__text">{body}</p>
      </article>
      <footer>
        <p className="talk-detail__created-at">
          <FaThumbsUp />
            &nbsp;&nbsp;
          {upVotesBy.length}
            &nbsp;&nbsp;
          <FaThumbsDown />
            &nbsp;&nbsp;
          {downVotesBy.length}
            &nbsp;&nbsp;
          {postedAt(createdAt)}

        </p>
      </footer>
    </section>
  );
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

ThreadDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(userShape).isRequired,
  authUser: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string),
  downVotesBy: PropTypes.arrayOf(PropTypes.string),
};

ThreadDetail.defaultProps = {
  upVotesBy: null,
  downVotesBy: null,
};

export default ThreadDetail;
