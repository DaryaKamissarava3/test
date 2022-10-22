import './signOut.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import actions from '../../actions/actions';
import { useDispatch } from 'react-redux';

const SignOut = ({ showButton }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(actions.logOut());
    navigate('/');
  };

  return (
    showButton && (
      <img className="signOut" src="../../images/sign.svg" alt="sign" onClick={logout} />
    )
  );
};

export default SignOut;