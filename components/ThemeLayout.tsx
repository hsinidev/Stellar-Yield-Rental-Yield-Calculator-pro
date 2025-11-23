
import React, { useState, ReactNode, useEffect } from 'react';

interface ThemeLayoutProps {
  children: ReactNode;
}

type ModalType = 'about' | 'contact' | 'guide' | 'privacy' | 'terms' | 'dmca' | null;

const Modal: React.FC<{ title: string; children: ReactNode; onClose: () => void }> = ({ title, children, onClose }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div 
        className="bg-gray-900 border border-purple-500/50 rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col relative animate-fadeIn" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 border-b border-gray-700 flex justify-between items-center bg-gray-900/50 rounded-t-xl sticky top-0 z-10 backdrop-blur-md">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">{title}</h2>
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-white hover:bg-white/10 rounded-full w-10 h-10 flex items-center justify-center transition-all duration-200 text-2xl"
            aria-label="Close modal"
          >
            &times;
          </button>
        </div>
        <div className="p-8 overflow-y-auto text-gray-300 leading-relaxed space-y-4 custom-scrollbar">
          {children}
        </div>
        <div className="p-4 border-t border-gray-700 bg-gray-900/50 rounded-b-xl flex justify-end">
             <button onClick={onClose} className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors">Close</button>
        </div>
      </div>
    </div>
  );
};

const ThemeLayout: React.FC<ThemeLayoutProps> = ({ children }) => {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const openModal = (modal: ModalType) => setActiveModal(modal);
  const closeModal = () => setActiveModal(null);

  const getModalContent = () => {
    switch (activeModal) {
      case 'about':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">About Stellar Yield</h3>
            <p>Stellar Yield is a premier financial calculation tool meticulously designed for real estate investors, property managers, and financial analysts. Born from a need for clarity in the complex world of property investment, our mission is to illuminate the path to financial freedom.</p>
            <p>We combine advanced financial algorithms with a user-centric, visually stunning interface to provide instant, accurate insights into property performance. Whether you are analyzing a single-family home, a multi-unit complex, or a vacation rental, Stellar Yield empowers you with the data you need to make confident decisions.</p>
            <p>Our commitment to privacy, speed, and accuracy sets us apart. We believe that professional-grade tools should be accessible to everyone, free of charge and free of data tracking.</p>
          </div>
        );
      case 'contact':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Get in Touch</h3>
            <p>We value your feedback and are here to assist you with any questions regarding the Stellar Yield calculator or partnership opportunities.</p>
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 mt-4">
                <ul className="space-y-3">
                    <li className="flex items-center">
                        <span className="font-bold text-purple-400 w-24">Website:</span>
                        <a href="https://doodax.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline hover:text-cyan-300">doodax.com</a>
                    </li>
                    <li className="flex items-center">
                        <span className="font-bold text-purple-400 w-24">Email:</span>
                        <a href="mailto:hsini.web@gmail.com" className="text-cyan-400 hover:underline hover:text-cyan-300">hsini.web@gmail.com</a>
                    </li>
                    <li className="flex items-center">
                        <span className="font-bold text-purple-400 w-24">Support:</span>
                        <span>24/7 via Email</span>
                    </li>
                </ul>
            </div>
            <p className="text-sm text-gray-500 mt-4">We aim to respond to all inquiries within 24 business hours.</p>
          </div>
        );
      case 'guide':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">User Guide: Mastering the Calculator</h3>
            
            <div className="bg-gray-800 p-4 rounded-lg">
                <h4 className="text-lg font-bold text-purple-300 mb-2">1. Input Financial Data</h4>
                <ul className="list-disc pl-5 space-y-1">
                    <li><strong>Property Value:</strong> Enter the total purchase price or current market value of the asset. Do not include closing costs in this specific field for gross yield calculations.</li>
                    <li><strong>Monthly Rental Income:</strong> Enter the total gross rent you expect to collect per month. If it's a multi-unit, combine the rent from all units.</li>
                    <li><strong>Annual Expenses:</strong> Sum up all yearly operating costs (Taxes, Insurance, HOA, Maintenance, Management Fees). Do not include mortgage payments here (Net Yield excludes debt service).</li>
                </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg">
                <h4 className="text-lg font-bold text-purple-300 mb-2">2. Interpreting Results</h4>
                <ul className="list-disc pl-5 space-y-1">
                    <li><strong>Gross Yield:</strong> A high-level view of income potential. Good for quick screening.</li>
                    <li><strong>Net Yield:</strong> The "real" operational return. This is your primary metric for profitability before financing.</li>
                    <li><strong>Annual Cash Flow:</strong> The raw dollar amount left over after operating expenses (but before mortgage).</li>
                </ul>
            </div>
            
            <p><strong>Pro Tip:</strong> Use the "Share" feature to send reports to partners or save a "Print" PDF for your records.</p>
          </div>
        );
      case 'privacy':
        return (
          <div className="space-y-4 text-sm md:text-base">
            <h3 className="text-xl font-semibold text-white">Privacy Policy</h3>
            <p className="text-xs text-gray-500">Last updated: October 27, 2023</p>
            
            <h4 className="font-bold text-white mt-4">1. Introduction</h4>
            <p>At Stellar Yield, accessible from doodax.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Stellar Yield and how we use it.</p>
            
            <h4 className="font-bold text-white mt-4">2. Zero Data Collection Policy</h4>
            <p>We operate with a strict "Client-Side Only" architecture. This means:</p>
            <ul className="list-disc pl-5">
                <li>We do not store your financial data on any server.</li>
                <li>We do not transmit your input values to any third party.</li>
                <li>All calculations happen instantly within your own browser's memory.</li>
                <li>Once you refresh the page or close the tab, your data is wiped completely.</li>
            </ul>

            <h4 className="font-bold text-white mt-4">3. Log Files and Analytics</h4>
            <p>Stellar Yield follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.</p>
            
            <h4 className="font-bold text-white mt-4">4. Cookies and Web Beacons</h4>
            <p>Like any other website, Stellar Yield uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.</p>

            <h4 className="font-bold text-white mt-4">5. CCPA & GDPR Rights</h4>
            <p>We respect your rights under the CCPA (California Consumer Privacy Act) and GDPR (General Data Protection Regulation). As we do not collect personal data, there is generally no data to request, delete, or modify. However, for any privacy-specific inquiries, please contact us.</p>
          </div>
        );
      case 'terms':
        return (
          <div className="space-y-4 text-sm md:text-base">
            <h3 className="text-xl font-semibold text-white">Terms of Service</h3>
            <p className="text-xs text-gray-500">Last updated: October 27, 2023</p>

            <h4 className="font-bold text-white mt-4">1. Agreement to Terms</h4>
            <p>By accessing this website, accessible from doodax.com, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site.</p>

            <h4 className="font-bold text-white mt-4">2. Use License</h4>
            <p>Permission is granted to temporarily download one copy of the materials on Stellar Yield's Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
            <ul className="list-disc pl-5">
                <li>modify or copy the materials;</li>
                <li>use the materials for any commercial purpose or for any public display;</li>
                <li>attempt to reverse engineer any software contained on Stellar Yield's Website;</li>
                <li>remove any copyright or other proprietary notations from the materials; or</li>
                <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
            </ul>

            <h4 className="font-bold text-white mt-4">3. Disclaimer</h4>
            <p>All the materials on Stellar Yield’s Website are provided "as is". Stellar Yield makes no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, Stellar Yield does not make any representations concerning the accuracy or likely reliability of the use of the materials on its Website or otherwise relating to such materials or any sites linked to this Website.</p>
            <p className="bg-yellow-900/30 p-4 border-l-4 border-yellow-500"><strong>Financial Disclaimer:</strong> The results provided by this calculator are for informational and educational purposes only. They do not constitute financial, investment, legal, or tax advice. Always consult with a qualified professional before making investment decisions.</p>

            <h4 className="font-bold text-white mt-4">4. Limitations</h4>
            <p>In no event shall Stellar Yield or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Stellar Yield’s Website.</p>
          </div>
        );
      case 'dmca':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">DMCA Policy</h3>
            <p>Stellar Yield respects the intellectual property rights of others. It is our policy to respond to any claim that Content posted on the Service infringes the copyright or other intellectual property infringement of any person.</p>
            
            <p>If you are a copyright owner, or authorized on behalf of one, and you believe that the copyrighted work has been copied in a way that constitutes copyright infringement that is taking place through the Service, you must submit your notice in writing to the attention of "Copyright Manager" via email at <strong>hsini.web@gmail.com</strong> and include in your notice a detailed description of the alleged infringement.</p>
            
            <h4 className="font-bold text-white mt-4">DMCA Notice Data Requirements</h4>
            <ul className="list-disc pl-5">
                <li>An electronic or physical signature of the person authorized to act on behalf of the owner of the copyright's interest.</li>
                <li>A description of the copyrighted work that you claim has been infringed, including the URL (i.e., web page address) of the location where the copyrighted work exists or a copy of the copyrighted work.</li>
                <li>Identification of the URL or other specific location on the Service where the material that you claim is infringing is located.</li>
                <li>Your address, telephone number, and email address.</li>
                <li>A statement by you that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law.</li>
                <li>A statement by you, made under penalty of perjury, that the above information in your notice is accurate and that you are the copyright owner or authorized to act on the copyright owner's behalf.</li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  const navLinks: { label: string; modal: ModalType }[] = [
    { label: 'About', modal: 'about' },
    { label: 'Contact', modal: 'contact' },
    { label: 'Guide', modal: 'guide' },
    { label: 'Privacy Policy', modal: 'privacy' },
    { label: 'Terms of Service', modal: 'terms' },
    { label: 'DMCA', modal: 'dmca' },
  ];

  return (
    <div className="min-h-screen bg-black text-gray-100 font-sans relative flex flex-col">
      {/* Animated Background Layers */}
      <div className="fixed inset-0 nebula-bg z-0 pointer-events-none"></div>
      <div className="fixed inset-0 stars z-0 pointer-events-none"></div>
      <div className="fixed inset-0 stars2 z-0 pointer-events-none"></div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <header className="py-5 px-4 sm:px-6 md:px-8 bg-black/40 backdrop-blur-md border-b border-purple-500/30 sticky top-0 z-40">
          <nav className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 flex items-center space-x-2">
                {/* Logo Area */}
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-600 to-blue-500 flex items-center justify-center font-bold text-white shadow-lg shadow-purple-500/50">
                    $
                </div>
                <span className="text-xl font-bold tracking-wider text-white">STELLAR<span className="text-purple-400">YIELD</span></span>
            </div>
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button 
                    onClick={() => openModal(link.modal)} 
                    className="text-sm font-medium text-gray-300 hover:text-white hover:scale-105 transition-all duration-300 relative group"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full duration-300"></span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        
        <main className="flex-grow flex flex-col items-center justify-center">
          {children}
        </main>
        
        <footer className="py-8 px-4 text-center bg-black/60 backdrop-blur-md border-t border-purple-900/50 mt-16">
          <div className="container mx-auto">
            <p className="mb-4">
              <span className="text-gray-400">Powered by </span>
              <a 
                href="https://github.com/hsinidev" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-bold text-lg bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent hover:from-purple-300 hover:to-blue-300 transition-all"
              >
                HSINI MOHAMED
              </a>
            </p>
            <div className="flex justify-center space-x-6 text-sm text-gray-500">
              <a href="https://doodax.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">doodax.com</a>
              <span>•</span>
              <a href="mailto:hsini.web@gmail.com" className="hover:text-white transition-colors">hsini.web@gmail.com</a>
            </div>
            <p className="mt-4 text-xs text-gray-600">
                &copy; {new Date().getFullYear()} Stellar Yield. All rights reserved.
            </p>
          </div>
        </footer>
      </div>

      {activeModal && (
        <Modal title={activeModal === 'dmca' ? 'DMCA Policy' : activeModal.charAt(0).toUpperCase() + activeModal.slice(1)} onClose={closeModal}>
          {getModalContent()}
        </Modal>
      )}
    </div>
  );
};

export default ThemeLayout;
