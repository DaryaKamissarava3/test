import React, { useState } from 'react';
import NavigatePanel from '../NavigatePanel/navigatePanel';
import Background from '../../images/castelbackground.svg';
import './authorization.css';
import { users } from '../../constants';
import { Navigate } from 'react-router-dom';
import actions from '../../actions/actions';
import { useSelector, useDispatch } from 'react-redux';

const Authorization = () => {
  const userStatus = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);

  const emailChange = (email) => {
    setEmail(email);
  };

  const passwordChange = (password) => {
    setPassword(password);
  };

  const change_email = (e) => {
    emailChange(e.target.value);
    setDisabled(false);
  };

  const change_password = (e) => {
    passwordChange(e.target.value);
    setDisabled(false);
  };

  const inLog = (e) => {
    e.preventDefault();
    const resultLogin = users.filter((item) =>
      Object.values(item)
        .toString()
        .includes(email && password),
    );
    if (!resultLogin.length) {
      alert('Введен неверный логин или пароль. Попробуйте еще раз.');
    }
    dispatch(actions.logIn(resultLogin));
  };

  return (
    <>
      <header style={{ backgroundImage: 'url(' + Background + ')' }}>
        <div className="container">
          <NavigatePanel logoImg="../../images/logo.svg" />
        </div>
        <form className="form_authorization" onSubmit={(e) => console.log(e)}>
          <div className="authorization_title">Sign in</div>
          <div className="authorization_wrapper">
            <div className="authorization_input">
              <label className="authorization_label">Email address</label>
              <input
                placeholder="Введите email"
                type="email"
                className="authorization_input_type"
                onChange={change_email}
              />
            </div>
            <div className="authorization_input">
              <label className="authorization_label">Password</label>
              <input
                placeholder="Введите пароль"
                type="password"
                className="authorization_input_type"
                onChange={change_password}
              />
            </div>
            <div className="authorization_input">
              <button
                type="submit"
                className="authorization_input_type authorization_button"
                onClick={inLog}
                disabled={disabled}
              >
                Sign in
              </button>
            </div>
          </div>
        </form>
      </header>
      {!!userStatus && <Navigate to="/" />}
    </>
  );
};

export default Authorization;