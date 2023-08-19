import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomeLayout, InfoPageLayout } from '@/layouts';
import { SwitchRoutes } from '.';

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path={SwitchRoutes.root} element={<HomeLayout />} />
      <Route path={SwitchRoutes.info_page} element={<InfoPageLayout />} />
    </Routes>
  );
}
