import React from 'react';

const PageBanner: React.FC = () => {
  return (
    <section className="bg-gradient-page py-12 pb-10 text-center relative overflow-hidden">
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
            <path fill="rgba(255,255,255,0.05)" d="M0,50 Q300,100 600,50 T1200,50 L1200,0 L0,0 Z"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-4">
        <h1 className="text-3xl md:text-[2.5rem] font-extrabold text-white mb-4 drop-shadow-md animate-fadeInDown font-heading">
          Jan/Feb 2026 Examination Results
        </h1>
        <p className="text-lg text-white/95 mb-6 font-normal animate-fadeInDown" style={{ animationDelay: '0.1s' }}>
          Controller of Examinations (COE)
        </p>
        <div className="text-[0.9rem] text-white/90 animate-fadeInDown flex items-center justify-center gap-2" style={{ animationDelay: '0.2s' }}>
          <a href="#" className="underline hover:text-gold transition-colors">Home</a>
          <span className="mx-1">›</span>
          <span>Results</span>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;