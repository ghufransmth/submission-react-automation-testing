/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ThreadInput({ addThread }) {
  const [body, setBody] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  function addthread() {
    if (body.trim()) {
      addThread(title, body, category);
      setBody('');
      setTitle('');
      setCategory('');
    }
  }

  function handleTextChange({ target }) {
    if (target.value.length <= 320) {
      setBody(target.value);
    }
  }

  function handleTitleChange({ target }) {
    if (target.value.length <= 320) {
      setTitle(target.value);
    }
  }

  function handleCategoryChange({ target }) {
    setCategory(target.value);
  }

  return (
    <div className="talk-input">
      <p className="talk-input__char-left">
        <strong>Title</strong>
      </p>
      <input type="text" placeholder="Any idea?" name="title" value={title} onChange={handleTitleChange} />
      <p className="talk-input__char-left">
        <strong>Content</strong>
      </p>
      <textarea type="text" placeholder="What are you thinking?" name="body" value={body} onChange={handleTextChange} />
      <p className="talk-input__char-left">
        <strong>{body.length}</strong>
        /320
      </p>
      <p className="talk-input__char-left">
        <strong>Category</strong>
      </p>
      <select role="combobox" placeholder="Select an option" value={category} onChange={handleCategoryChange}>
        <option role="option" value="">Select a category</option>
        <option role="option" value="general">General</option>
        <option role="option" value="react">React</option>
        <option role="option" value="introduction">Introduction</option>
      </select>
      <br />
      <br />
      <button type="submit" onClick={addthread}>Post Thread</button>
    </div>
  );
}

ThreadInput.propTypes = {
  addThread: PropTypes.func.isRequired,
};

export default ThreadInput;
