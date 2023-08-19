import React from 'react';
import {Routes, Route} from 'react-router-dom';

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
