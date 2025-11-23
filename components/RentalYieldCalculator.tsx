
import React, { useState } from 'react';
import { calculateGrossYield, calculateNetYield, calculateAnnualCashFlow } from '../utils/FinancialMath';

const CalculatorIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 14h.01M12 17h.01M15 17h.01M9 11h6M4 7a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V7z" />
  </svg>
);

const ShareIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
    </svg>
);

const PrintIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
    </svg>
);

const InfoIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 hover:text-white cursor-help ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const ResultIcon: React.FC<{ type: 'gross' | 'net' | 'cash' }> = ({ type }) => {
    const iconPath = {
        gross: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
        net: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
        cash: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01"
    };
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block mr-2 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={iconPath[type]} />
        </svg>
    );
};

interface TooltipProps {
    text: string;
}

const Tooltip: React.FC<TooltipProps> = ({ text }) => (
    <div className="group relative flex items-center">
        <InfoIcon />
        <div className="absolute bottom-full mb-2 hidden w-48 p-2 bg-gray-800 text-xs text-white rounded shadow-lg group-hover:block z-50 pointer-events-none">
            {text}
            <svg className="absolute text-gray-800 h-2 w-full left-0 top-full" x="0px" y="0px" viewBox="0 0 255 255" xmlSpace="preserve"><polygon className="fill-current" points="0,0 127.5,127.5 255,0"/></svg>
        </div>
    </div>
);

const InputField: React.FC<{ 
    id: string; 
    label: string; 
    value: string; 
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; 
    placeholder: string;
    tooltip: string;
}> = ({ id, label, value, onChange, placeholder, tooltip }) => (
    <div className="mb-6">
        <label htmlFor={id} className="flex items-center text-sm font-medium text-purple-300 mb-2">
            {label}
            <Tooltip text={tooltip} />
        </label>
        <div className="relative group">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 group-focus-within:text-purple-400 transition-colors">$</span>
            <input
                type="number"
                id={id}
                value={value}
                onChange={onChange}
                className="w-full pl-8 pr-4 py-3 bg-gray-900/60 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-white placeholder-gray-500 transition-all outline-none hover:bg-gray-900/80"
                placeholder={placeholder}
                aria-label={label}
            />
        </div>
    </div>
);

const RentalYieldCalculator: React.FC = () => {
  const [propertyValue, setPropertyValue] = useState('');
  const [monthlyRent, setMonthlyRent] = useState('');
  const [annualExpenses, setAnnualExpenses] = useState('');
  const [error, setError] = useState('');

  const [results, setResults] = useState<{
    grossYield: number;
    netYield: number;
    annualCashFlow: number;
  } | null>(null);

  const handleCalculate = () => {
    const pv = parseFloat(propertyValue);
    const mr = parseFloat(monthlyRent);
    const ae = parseFloat(annualExpenses);

    if (isNaN(pv) || isNaN(mr) || isNaN(ae) || pv <= 0 || mr < 0 || ae < 0) {
      setError('Please enter valid, positive numbers for all fields.');
      setResults(null);
      return;
    }
    setError('');

    const annualRent = mr * 12;
    const grossYield = calculateGrossYield(annualRent, pv);
    const netYield = calculateNetYield(annualRent, ae, pv);
    const annualCashFlow = calculateAnnualCashFlow(annualRent, ae);

    setResults({ grossYield, netYield, annualCashFlow });
  };

  const handleShare = async () => {
    if (!results) return;
    const shareData = {
        title: 'My Stellar Yield Results',
        text: `I just calculated a ${results.netYield.toFixed(2)}% Net Yield on this property! Check out Stellar Yield Calculator.`,
        url: 'https://YieldCalculator.doodax.com'
    };
    try {
        if (navigator.share) {
            await navigator.share(shareData);
        } else {
            await navigator.clipboard.writeText(`Net Yield: ${results.netYield.toFixed(2)}% | Calculated on ${shareData.url}`);
            alert('Results copied to clipboard!');
        }
    } catch (err) {
        console.error('Error sharing', err);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-5xl mx-auto relative z-10">
        {/* Main Card */}
        <div className="bg-gray-900/40 backdrop-blur-xl p-6 md:p-10 rounded-3xl shadow-2xl border border-purple-500/30 overflow-hidden relative">
            
            {/* Glossy Effect */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                
                {/* Input Section */}
                <div className="flex flex-col justify-center">
                    <h2 className="text-2xl font-bold text-white mb-8 border-b border-gray-700 pb-2 inline-block w-full">
                        Property Metrics
                    </h2>
                    
                    <InputField 
                        id="propertyValue" 
                        label="Property Value" 
                        value={propertyValue} 
                        onChange={e => setPropertyValue(e.target.value)} 
                        placeholder="e.g., 300000" 
                        tooltip="Total purchase price or current market value of the property."
                    />
                    
                    <InputField 
                        id="monthlyRent" 
                        label="Monthly Income" 
                        value={monthlyRent} 
                        onChange={e => setMonthlyRent(e.target.value)} 
                        placeholder="e.g., 2000" 
                        tooltip="Total gross monthly rent collected from tenants."
                    />
                    
                    <InputField 
                        id="annualExpenses" 
                        label="Annual Expenses" 
                        value={annualExpenses} 
                        onChange={e => setAnnualExpenses(e.target.value)} 
                        placeholder="e.g., 5000" 
                        tooltip="Sum of taxes, insurance, maintenance, HOA, etc. (Exclude mortgage)."
                    />
                    
                    {error && (
                        <div className="bg-red-900/30 border border-red-500 text-red-200 px-4 py-2 rounded mb-4 text-sm animate-pulse">
                            {error}
                        </div>
                    )}
                    
                    <button
                        onClick={handleCalculate}
                        className="w-full mt-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold py-4 px-4 rounded-xl flex items-center justify-center transition-all transform hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/30 active:scale-95 duration-200"
                    >
                        <CalculatorIcon />
                        Calculate Returns
                    </button>
                </div>

                {/* Output Section */}
                <div className="bg-black/40 p-8 rounded-2xl border border-gray-700/50 flex flex-col justify-between relative overflow-hidden group">
                    {/* Background decoration for result card */}
                    <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-purple-600 rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-700"></div>
                    
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-6 text-center tracking-wide">
                            Investment Analysis
                        </h2>
                        
                        {results ? (
                            <div className="space-y-8 text-center animate-fadeIn">
                                <div className="transform transition duration-500 hover:scale-105">
                                    <p className="text-sm text-purple-300 uppercase tracking-widest mb-1 flex items-center justify-center gap-2">
                                        <ResultIcon type="gross" /> Gross Yield
                                    </p>
                                    <p className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
                                        {results.grossYield.toFixed(2)}%
                                    </p>
                                </div>
                                
                                <div className="h-px w-2/3 mx-auto bg-gray-700/50"></div>
                                
                                <div className="transform transition duration-500 hover:scale-105">
                                    <p className="text-sm text-purple-300 uppercase tracking-widest mb-1 flex items-center justify-center gap-2">
                                        <ResultIcon type="net" /> Net Yield
                                    </p>
                                    <p className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300">
                                        {results.netYield.toFixed(2)}%
                                    </p>
                                </div>
                                
                                <div className="h-px w-2/3 mx-auto bg-gray-700/50"></div>
                                
                                <div className="transform transition duration-500 hover:scale-105">
                                    <p className="text-sm text-purple-300 uppercase tracking-widest mb-1 flex items-center justify-center gap-2">
                                        <ResultIcon type="cash" /> Cash Flow
                                    </p>
                                    <p className="text-3xl font-bold text-yellow-400 font-mono">
                                        {results.annualCashFlow.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                                        <span className="text-sm text-gray-500 font-sans ml-1">/yr</span>
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center h-64 text-gray-500 space-y-4">
                                <div className="w-16 h-16 rounded-full border-2 border-gray-700 flex items-center justify-center">
                                    <span className="text-2xl animate-pulse">?</span>
                                </div>
                                <p className="text-sm">Enter property details to reveal ROI.</p>
                            </div>
                        )}
                    </div>
                    
                    {/* Action Buttons */}
                    {results && (
                        <div className="flex justify-center space-x-4 mt-8 pt-6 border-t border-gray-700/50">
                            <button 
                                onClick={handleShare}
                                className="flex items-center px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                            >
                                <ShareIcon /> Share
                            </button>
                            <button 
                                onClick={handlePrint}
                                className="flex items-center px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                            >
                                <PrintIcon /> Print
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </div>
  );
};

export default RentalYieldCalculator;
