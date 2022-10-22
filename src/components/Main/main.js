import './main.css';
import TitleMain from '../TitleMain/title_main';
import NavigatePanel from '../NavigatePanel/navigatePanel';
import SignOut from '../SignOut/signOut';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import React from 'react';

const Main = () => {
  const userStatus = useSelector((state) => state.auth);

  const [signOut, setSignOut] = useState(false);

  return (
    <>
      <NavigatePanel logoImg="../../images/logo.svg" onClick={() => setSignOut(!signOut)} />
      <SignOut showButton={signOut} />
      <div className="block_text">
        <TitleMain
          mainText="Discover stays
            to live, work or just relax"
        />
      </div>
      {!userStatus && <Navigate to="/login" />}
    </>
  );
};

export default Main;