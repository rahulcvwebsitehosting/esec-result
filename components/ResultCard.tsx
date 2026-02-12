import React from 'react';
import { ResultCardProps } from '../types';

const ResultCard: React.FC<ResultCardProps> = ({ 
  department, 
  semester, 
  regulation, 
  examMonth, 
  publishedDate, 
  icon, 
  isNew, 
  isPopular,
  onDownload,
  onView,
  delay
}) => {
  return (
    <div 
      className="bg-white rounded-xl overflow-hidden shadow-md border-2 border-transparent transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-navy relative animate-fadeInUp fill-mode-backwards"
      style={{ animationDelay: delay, animationFillMode: 'backwards' }}
    >
      {isPopular && (
        <div className="absolute top-[15px] -right-[35px] bg-gold text-navy text-xs font-bold uppercase py-1.5 px-10 rotate-45 shadow-sm z-10">
          Popular
        </div>
      )}
      {isNew && (
        <div className="absolute top-[15px] -right-[35px] bg-green text-white text-xs font-bold uppercase py-1.5 px-10 rotate-45 shadow-sm z-10">
          New
        </div>
      )}

      <div className="bg-gradient-primary text-white p-7 text-center">
        <div className="text-5xl mb-4">{icon}</div>
        <h3 className="text-xl font-heading font-semibold m-0 leading-tight">{department}</h3>
      </div>

      <div className="p-6 bg-[#fafbfc]">
        <div className="flex justify-between items-center py-2.5 border-b border-[#e0e0e0]">
          <span className="text-sm font-medium text-[#616161]">Semester:</span>
          <span className="text-[0.9375rem] font-semibold text-navy bg-gold/20 text-navy px-3 py-1 rounded-full">{semester}</span>
        </div>
        <div className="flex justify-between items-center py-2.5 border-b border-[#e0e0e0]">
          <span className="text-sm font-medium text-[#616161]">Regulation:</span>
          <span className="text-[0.9375rem] font-semibold text-[#212121]">{regulation}</span>
        </div>
        <div className="flex justify-between items-center py-2.5 border-b border-[#e0e0e0]">
          <span className="text-sm font-medium text-[#616161]">Exam Month:</span>
          <span className="text-[0.9375rem] font-semibold text-[#212121]">{examMonth}</span>
        </div>
        <div className="flex justify-between items-center py-2.5">
          <span className="text-sm font-medium text-[#616161]">Published:</span>
          <span className="text-[0.9375rem] font-semibold text-[#212121]">{publishedDate}</span>
        </div>
      </div>

      <div className="p-6 flex gap-3 bg-white">
        <button 
          onClick={() => onDownload(department)}
          className="flex-1 flex items-center justify-center gap-2 py-3.5 px-5 font-heading text-[0.9rem] font-semibold text-white bg-navy border-2 border-navy rounded-lg transition-all duration-300 hover:bg-navy-dark hover:border-navy-dark hover:-translate-y-0.5 hover:shadow-md"
        >
          <span>⬇</span>
          Download PDF
        </button>
        <button 
          onClick={() => onView(department)}
          className="flex-1 flex items-center justify-center gap-2 py-3.5 px-5 font-heading text-[0.9rem] font-semibold text-navy bg-white border-2 border-navy rounded-lg transition-all duration-300 hover:bg-navy hover:text-white hover:-translate-y-0.5 hover:shadow-md"
        >
          <span>👁</span>
          View Online
        </button>
      </div>
    </div>
  );
};

export default ResultCard;