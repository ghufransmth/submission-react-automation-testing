import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';

function ThreadReplyInput({ replyThread, id }) {
  const [content, setText] = useState('');
  const navigate = useNavigate();

  function replyThreadHandler() {
    if (content.trim()) {
      replyThread(content);
      setText('');
      navigate(0);
    }
  }

  function handleTextChange({ target }) {
    if (target.value.length <= 320) {
      setText(target.value);
    }
  }

  return (
    <div className="talk-reply-input">
      <textarea type="text" placeholder="Talk your reply" value={content} onChange={handleTextChange} />
      <p className="talk-reply-input__char-left">
        <strong>{content.length}</strong>
        /320
      </p>
      <button type="submit" onClick={replyThreadHandler}>Reply</button>
    </div>
  );
}

ThreadReplyInput.propTypes = {
  replyThread: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default ThreadReplyInput;
