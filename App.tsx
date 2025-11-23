
import React from 'react';
import ThemeLayout from './components/ThemeLayout';
import RentalYieldCalculator from './components/RentalYieldCalculator';
import SeoArticle from './utils/SeoArticle';

const App: React.FC = () => {
  return (
    <ThemeLayout>
      <div className="container mx-auto px-4 py-8 md:py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-4 tracking-tight">
          Stellar Yield Calculator
        </h1>
        <p className="text-lg md:text-xl text-center text-gray-300 mb-12 max-w-3xl mx-auto">
          Instantly calculate Gross and Net Rental Yield to illuminate your real estate investment journey.
        </p>
        <RentalYieldCalculator />
        <SeoArticle />
      </div>
    </ThemeLayout>
  );
};

export default App;
