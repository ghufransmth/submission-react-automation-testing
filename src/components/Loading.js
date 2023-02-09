import React from 'react';
import LoadingBar from 'react-redux-loading-bar';

function Loading() {
  return (
    <div className="loading">
      {/* @TODO: use react-redux-loading-bar to show loading bar */}
      <LoadingBar updateTime={10} maxProgress={95} progressIncrease={10} />
    </div>
  );
}

export default Loading;
