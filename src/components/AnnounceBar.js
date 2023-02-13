import React from 'react';
import PropTypes from 'prop-types';
import Container from './styled/Container';
import Title from './styled/Title';

function AnnounceBar({
  title, content, type,
}) {
  const backgroundColor = {
    success: '#4caf50',
    error: '#f44336',
    warning: '#ff9800',
    info: '#2196f3',
  };

  const textColor = {
    success: '#fff',
    error: '#fff',
    warning: '#fff',
    info: '#fff',
  };

  return (
    <Container
      backgroundColor={backgroundColor[type]}
      textColor={textColor[type]}
      maxWidth="800px"
      padding="1rem 2rem 2rem 2rem"
    >
      <Title>{title}</Title>
      <p>{content}</p>

    </Container>
  );
}

AnnounceBar.propTypes = {
  /** The title of the announcement */
  title: PropTypes.string.isRequired,
  /** The content of the announcement */
  content: PropTypes.string.isRequired,
  /** Type of announcement, it will change the color of the bar  */
  type: PropTypes.oneOf(['success', 'error', 'warning', 'info']).isRequired,
};

export default AnnounceBar;
