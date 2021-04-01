import React from 'react';
import Hero from './Hero/Hero';

import { PortfolioProvider } from '../context/context';

function App() {
  return (
    <PortfolioProvider value={{  }}>
      <Hero />
    </PortfolioProvider>
  );
}

export default App;
