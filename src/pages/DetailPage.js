import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ThreadItem from '../components/ThreadItem';
import ThreadReplyInput from '../components/ThreadReplyInput';
import { asyncReceiveThreadDetail } from '../states/threadDetail/action';
import { asyncAddComment } from '../states/thread/action';
import ThreadDetail from '../components/ThreadDetail';
import ThreadCommentList from '../components/ThreadCommentList';

function DetailPage() {
  const { id } = useParams();
  const {
    threadDetail = null,
    authUser,
  } = useSelector((states) => states); // @TODO: get threadDetail and authUser state from store
  const dispatch = useDispatch(); // @TODO: get dispatch function from store

  useEffect(() => {
    // @TODO: dispatch async action to get thread detail by id
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  const onReplyThread = (content) => {
    // @TODO: dispatch async action to add reply thread
    dispatch(asyncAddComment({ content, id }));
  };

  if (!threadDetail) {
    return null;
  }

  const threadList = threadDetail.comments.map((thread) => ({
    ...thread,
    authUser: authUser.id,
  }));

  const totalComment = threadDetail.comments.length;

  return (
    <section className="detail-page">
      {
        threadDetail.parent && (
          <div className="detail-page__parent">
            <h3>Replying To</h3>
            <ThreadItem {...threadDetail.parent} authUser={authUser.id} />
          </div>
        )
      }
      <ThreadDetail {...threadDetail} authUser={authUser.id} />
      <br />
      <h2>Beri Komentar</h2>
      <ThreadReplyInput replyThread={onReplyThread} id={id} />
      <h2>
        Komentar (
        {totalComment}
        )
      </h2>
      <br />
      <ThreadCommentList threads={threadList} />
    </section>
  );
}

export default DetailPage;
