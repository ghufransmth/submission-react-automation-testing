import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ThreadInput from '../components/ThreadInput';
import ThreadList from '../components/ThreadList';
import { asyncPopulateThreads } from '../states/shared/action';
import { asyncAddThread } from '../states/thread/action';

function HomePage() {
  const {
    threads = [],
    authUser,
  } = useSelector((states) => states); // @TODO: get threads, users, and authUser state from store

  const dispatch = useDispatch(); // @TODO: get dispatch function from store

  useEffect(() => {
    // @TODO: dispatch async action to populate thread
    dispatch(asyncPopulateThreads());
  }, [dispatch]);

  const onAddThread = (title, body, category) => {
    // @TODO: dispatch async action to add thread
    dispatch(asyncAddThread({ title, body, category }));
  };

  const threadList = threads.map((thread) => ({
    ...thread,
    authUser: authUser.id,
  }));

  return (
    <section className="home-page">
      <ThreadInput addThread={onAddThread} />
      <ThreadList threads={threadList} />
    </section>
  );
}

export default HomePage;
