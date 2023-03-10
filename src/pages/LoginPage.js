/* eslint-disable react/no-unknown-property */
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginInput from '../components/LoginInput';
import logo from '../assets/images/logoDicoding.png';
import { asyncSetAuthUser } from '../states/authUser/action';
import AnnounceBar from '../components/AnnounceBar';

function LoginPage() {
  const dispatch = useDispatch(); // @TODO: get dispatch function from store

  const onLogin = ({ email, password }) => {
    // @TODO: dispatch async action to login
    dispatch(asyncSetAuthUser({ email, password }));
  };

  return (
    <section className="login-page">
      <header className="login-page__hero">
        <img src={logo} alt="Logo" className="logo" />
      </header>
      <article className="login-page__main">
        <AnnounceBar type="info" title="Dicoding" content="Forum Aplikasi." />

        <LoginInput login={onLogin} />
        <p>
          Don&apos;t have an account?
          {' '}
          <Link to="/register">Register</Link>
        </p>
      </article>
    </section>
  );
}

export default LoginPage;
