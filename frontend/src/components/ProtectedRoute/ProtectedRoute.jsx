import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const [user] = useState(JSON.parse(localStorage.getItem('profile')));

  return user?.result ? (
    <>{children}</>
  ) : (
    <Navigate
      to={{
        pathname: '/auth',
        state: { from: location },
      }}
    />
  );
};

export default ProtectedRoute;
