import React, { useState } from 'react';
import styles from './App.module.scss';
import Login from './pages/login';
import PasswordReset from './pages/passwordReset';
import RecoveryLink from './pages/recoveryLink';
import UpdatePassword from './pages/updatePassword';
import Logo from './components/Logo';

function App() {

  return (
    <>
      <Logo/>
        <div className={`${styles.register}`}>
          {/* <Login/> */}
          {/* <PasswordReset/> */}
          {/* <RecoveryLink/> */}
          <UpdatePassword/>
        </div>
    </>
  );
}

export default App;