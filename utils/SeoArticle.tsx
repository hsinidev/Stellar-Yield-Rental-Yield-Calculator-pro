
import React, { useState } from 'react';

const SeoArticle: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    
    const faqData = [
        {
            question: "What is a good rental yield percentage?",
            answer: "A 'good' rental yield is subjective but generally, 5-8% net yield is considered solid for residential properties. High-growth areas might offer 3-4%, while high-risk or cash-flow-heavy markets can exceed 10%."
        },
        {
            question: "How do I calculate Gross Rental Yield?",
            answer: "Divide your annual rental income by the property value and multiply by 100. Formula: (Annual Rent / Property Price) x 100."
        },
        {
            question: "Does rental yield include mortgage payments?",
            answer: "No. Standard rental yield calculations (both Gross and Net) exclude debt service. To account for mortgages, you calculate 'Cash-on-Cash Return'."
        },
        {
            question: "Why is Net Yield lower than Gross Yield?",
            answer: "Net Yield accounts for operating expenses like taxes, insurance, repairs, and management fees, providing a realistic view of profitability, whereas Gross Yield only looks at income vs. price."
        },
        {
            question: "Is high yield better than high appreciation?",
            answer: "Not necessarily. High yield provides immediate income (cash flow), while high appreciation builds long-term wealth through equity growth. The best choice depends on your financial goals."
        }
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebSite",
                "url": "https://YieldCalculator.doodax.com/",
                "name": "Stellar Yield",
                "description": "Professional real estate investment calculator for gross and net rental yield."
            },
            {
                "@type": "WebApplication",
                "name": "Stellar Yield Calculator",
                "operatingSystem": "All",
                "applicationCategory": "FinanceApplication",
                "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD"
                }
            },
            {
                "@type": "Article",
                "headline": "The Ultimate Guide to Understanding Rental Yield for Wealth Building",
                "description": "Comprehensive guide on calculating and optimizing rental yield for real estate investors.",
                "author": {
                    "@type": "Person",
                    "name": "HSINI MOHAMED",
                    "url": "https://github.com/hsinidev"
                },
                "publisher": {
                    "@type": "Organization",
                    "name": "Stellar Yield",
                    "url": "https://doodax.com"
                },
                "datePublished": "2023-10-27",
                "dateModified": new Date().toISOString().split('T')[0]
            },
            {
                "@type": "FAQPage",
                "mainEntity": faqData.map(item => ({
                    "@type": "Question",
                    "name": item.question,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": item.answer
                    }
                }))
            }
        ]
    };

    return (
      <div className="max-w-4xl mx-auto mt-20 px-4">
        <script type="application/ld+json">
            {JSON.stringify(jsonLd)}
        </script>
        
        <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300 mb-4">
                Mastering Real Estate Investment
            </h2>
            <p className="text-gray-400">Dive deep into the metrics that matter.</p>
        </div>

        <div 
          className={`relative bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 md:p-10 transition-all duration-1000 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[20000px] opacity-100' : 'max-h-48 opacity-80'}`}
        >
          <article className="prose prose-invert lg:prose-xl max-w-none text-left text-gray-300 prose-headings:text-purple-200 prose-a:text-cyan-400 hover:prose-a:text-cyan-300 prose-strong:text-white prose-li:marker:text-purple-500">
            
            <h2 id="toc">The Ultimate Guide to Understanding Rental Yield for Wealth Building</h2>
            <p className="lead text-lg text-gray-200">
                In the high-stakes world of real estate, data is your most valuable asset. Welcome to the definitive guide on mastering rental yield—the heartbeat of property investment. This comprehensive resource is designed to take you from basic calculations to advanced portfolio strategy.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Table of Contents</h3>
            <ul className="list-disc pl-5 space-y-2 text-base">
                <li><a href="#gross-vs-net">Gross vs. Net Yield: The Core Metrics</a></li>
                <li><a href="#hidden-costs">The Hidden Costs: Vacancy, Maintenance & Management</a></li>
                <li><a href="#market-psychology">Market Psychology: Yield Compression & Expansion</a></li>
                <li><a href="#tax-strategies">Tax Implications & Depreciation Benefits</a></li>
                <li><a href="#financing-leverage">The Power of Leverage: Cash-on-Cash Return</a></li>
                <li><a href="#investment-strategies">Strategic Profiles: Cash Flow vs. Appreciation</a></li>
                <li><a href="#faq">Frequently Asked Questions</a></li>
            </ul>

            <h3 id="gross-vs-net" className="text-2xl font-bold mt-12 mb-4 text-purple-300">Gross vs. Net Yield: The Core Metrics</h3>
            <p>At the heart of rental property analysis are two fundamental figures: Gross Rental Yield and Net Rental Yield. While they sound similar, they paint vastly different pictures of an investment's health.</p>
            
            <h4 className="text-xl font-bold mt-6 mb-2 text-white">Gross Rental Yield: The First Impression</h4>
            <p>Gross Rental Yield is the simplest way to assess a property's income potential. It is often the headline number used in marketing listings because it looks the most attractive.</p>
            <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-purple-500 my-4">
                <strong>Formula:</strong> <code>(Annual Rental Income / Property Value) * 100</code>
            </div>
            <p>For example, a $500,000 property generating $30,000 in annual rent has a 6% gross yield. This metric is excellent for quickly filtering through hundreds of listings to find potential candidates, but it should never be the sole basis for a purchase decision.</p>

            <h4 className="text-xl font-bold mt-6 mb-2 text-white">Net Rental Yield: The Reality Check</h4>
            <p>Net Rental Yield is the metric of the sophisticated investor. It strips away the fantasy of revenue and reveals the reality of profit. It accounts for the inevitable "friction" of owning real estate.</p>
            <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-cyan-500 my-4">
                <strong>Formula:</strong> <code>((Annual Income - Annual Expenses) / Property Value) * 100</code>
            </div>
            <p>Operating expenses typically include property taxes, insurance, HOA fees, maintenance reserves, landscaping, and property management. A property with a 6% gross yield might only have a 3% net yield once these costs are factored in.</p>

            <h3 id="hidden-costs" className="text-2xl font-bold mt-12 mb-4 text-purple-300">The Hidden Costs: Vacancy, Maintenance & Management</h3>
            <p>Novice investors often fail because they underestimate expenses. To build a robust financial model, you must account for:</p>
            <ul className="list-disc pl-5">
                <li><strong>Vacancy Rate (5-10%):</strong> No property is occupied 100% of the time. Budget for turnover periods where you earn zero income but still pay holding costs.</li>
                <li><strong>CAPEX Reserves (5-10%):</strong> Capital Expenditures are big-ticket items like roofs, HVAC systems, and water heaters. They don't happen every month, but they are inevitable. Setting aside a portion of rent monthly protects your cash flow when they do occur.</li>
                <li><strong>Property Management (8-12%):</strong> Even if you plan to self-manage, you should budget for this expense. Your time has value, and you may eventually want to outsource the work.</li>
            </ul>

            <h3 id="market-psychology" className="text-2xl font-bold mt-12 mb-4 text-purple-300">Market Psychology: Yield Compression & Expansion</h3>
            <p>Yields are not static; they breathe with the market. Understanding "Yield Compression" is vital for timing your entry and exit.</p>
            <p><strong>Yield Compression</strong> occurs when property prices rise faster than rental rates. This typically happens in hot markets where investors are speculating on appreciation. While your asset value grows, your monthly return on equity diminishes.</p>
            <p><strong>Yield Expansion</strong> often occurs during market corrections. Property prices may soften or stagnate, while rental demand remains strong or increases (as fewer people can afford to buy). This can be a prime time for cash-flow investors to acquire assets.</p>

            <h3 id="tax-strategies" className="text-2xl font-bold mt-12 mb-4 text-purple-300">Tax Implications & Depreciation Benefits</h3>
            <p>One of the greatest advantages of real estate is the tax code. (Note: This is not financial advice; consult a CPA).</p>
            <ul className="list-disc pl-5">
                <li><strong>Depreciation:</strong> The IRS allows you to deduct the cost of the building (not land) over 27.5 years. This "paper loss" can offset actual rental income, significantly reducing your taxable income while your bank account grows.</li>
                <li><strong>1031 Exchange:</strong> When you sell, you can defer capital gains taxes by rolling the proceeds into a "like-kind" investment, allowing your wealth to compound tax-deferred for decades.</li>
                <li><strong>Expense Deductions:</strong> Mortgage interest, repairs, travel to the property, and home office expenses can often be deducted.</li>
            </ul>

            <h3 id="financing-leverage" className="text-2xl font-bold mt-12 mb-4 text-purple-300">The Power of Leverage: Cash-on-Cash Return</h3>
            <p>Rental yield looks at the property's performance, but <strong>Cash-on-Cash Return</strong> looks at <em>your</em> money's performance.</p>
            <p>If you buy a $100,000 property with $20,000 down (20%), and it generates $2,000 in net positive cash flow after mortgage payments, your Cash-on-Cash return is 10% ($2,000 / $20,000).</p>
            <p>This is the magic of leverage: controlling a large asset with a small amount of capital to amplify your returns. However, leverage is a double-edged sword; it amplifies losses just as it amplifies gains.</p>

            <h3 id="investment-strategies" className="text-2xl font-bold mt-12 mb-4 text-purple-300">Strategic Profiles</h3>
            <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-gray-800 p-6 rounded-xl">
                    <h4 className="text-xl font-bold text-cyan-400 mb-2">The Cash Flow King</h4>
                    <p className="text-sm">Prioritizes monthly income to replace salary. Often invests in Class C neighborhoods or Midwest markets where price-to-rent ratios are favorable. Accepts lower appreciation for higher immediate yield.</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-xl">
                    <h4 className="text-xl font-bold text-purple-400 mb-2">The Appreciation Hunter</h4>
                    <p className="text-sm">Prioritizes long-term wealth growth. Invests in Class A coastal markets or gentrifying urban cores. Accepts low (or even neutral) cash flow today, betting that the asset value will double in 10 years.</p>
                </div>
            </div>

            <h3 id="faq" className="text-2xl font-bold mt-12 mb-4 text-purple-300">Frequently Asked Questions</h3>
            <div className="space-y-6">
            {faqData.map((item, index) => (
                <div key={index} className="bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="font-bold text-white text-lg mb-2">{item.question}</h4>
                    <p className="text-gray-300">{item.answer}</p>
                </div>
            ))}
            </div>
            
            <div className="mt-12 p-6 bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-xl border border-purple-500/30 text-center">
                <p className="italic text-gray-300">"Real estate investing, even on a very small scale, remains a tried and true means of building an individual's cash flow and wealth."</p>
                <p className="mt-2 font-bold text-purple-400">- Robert Kiyosaki</p>
            </div>

          </article>
          
          {/* Gradient Overlay for Read More */}
          {!isExpanded && (
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 via-gray-900/90 to-transparent flex items-end justify-center pb-4 z-10">
            </div>
          )}
        </div>
        
        <div className="flex justify-center -mt-6 relative z-20">
             <button 
              onClick={() => setIsExpanded(!isExpanded)} 
              className="group flex flex-col items-center gap-2 text-white hover:text-cyan-300 transition-colors duration-300 focus:outline-none"
            >
              <span className="font-bold text-lg tracking-widest uppercase bg-gray-900/80 px-6 py-2 rounded-full border border-purple-500/50 shadow-lg shadow-purple-900/20 group-hover:bg-gray-800 transition-all">
                  {isExpanded ? 'Collapse Article' : 'Read Full Guide'}
              </span>
              {!isExpanded && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 animate-bounce text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
                  </svg>
              )}
            </button>
        </div>
      </div>
    );
};

export default SeoArticle;
