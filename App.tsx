import React, { useState } from 'react';

import Login from './Login';
import ForgetPassword from './ForgetPassword';
import Registration from './Registration';
import NewPassword from './NewPassword';

export default function App() {
  const [page, setPage] = useState('login');

  if (page === 'login') {
    return (
      <Login
        onForgot={() => setPage('forgot')}
        onRegister={() => setPage('registration')}
      />
    );
  }

  if (page === 'forgot') {
    return (
      <ForgetPassword
        onBack={() => setPage('login')}
        onContinue={() => setPage('newPassword')}
      />
    );
  }

  if (page === 'registration') {
    return (
      <Registration
        onBack={() => setPage('login')}
      />
    );
  }

  if (page === 'newPassword') {
    return (
      <NewPassword
        onBack={() => setPage('forgot')}
        onSave={() => setPage('login')}
      />
    );
  }

  return null;
}