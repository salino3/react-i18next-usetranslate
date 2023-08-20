import React from 'react';
import { Home } from '@/pages';
import { Header } from '@/components';
import './home.styles.scss';

export const HomeLayout: React.FC = () => {
  
  return (
    <main>
      <Header />
      <Home />
    </main>
  );
}
