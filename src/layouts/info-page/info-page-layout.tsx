import React from 'react';
import { InfoPage } from '@/pages';
import { Header } from '@/components';
import './page-info.scss';

export const InfoPageLayout: React.FC = () => {
  
  return (
    <main>
      <Header />
      <InfoPage />
    </main>
  );
}
