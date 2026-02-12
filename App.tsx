import React, { useState } from 'react';
import Header from './components/Header';

const App: React.FC = () => {
  const [regNo, setRegNo] = useState('');
  const [dob, setDob] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isValidResult, setIsValidResult] = useState(false);

  const handleGetResult = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation Logic
    // Target: 2403730410321019 (16 digits)
    const cleanRegNo = regNo.trim();
    const isLengthValid = cleanRegNo.length === 16;
    const startsWith2403 = cleanRegNo.startsWith('2403');
    const hasDob = dob.trim().length > 0;

    if (isLengthValid && startsWith2403 && hasDob) {
      setIsValidResult(true);
    } else {
      setIsValidResult(false);
    }
    setShowResult(true);
  };

  if (showResult) {
    return (
      <div className="min-h-screen bg-white font-sans flex flex-col">
        <Header />
        
        <main className="flex-grow flex flex-col items-center pt-8 pb-16 px-4 w-full">
          <h1 className="text-[#4a148c] text-xl md:text-2xl font-bold text-center mb-10 font-sans tracking-wide uppercase">
            OFFICE OF THE CONTROLLER OF EXAMINATIONS
          </h1>

          <div className="w-full max-w-[1000px] border border-gray-300">
            {/* Table Header Main */}
            <div className="bg-[#009688] text-white font-bold text-center py-2 text-lg">
              UG/PG/Ph.D. End Semester Examinations Jan/Feb 2026 Results
            </div>

            {isValidResult ? (
              // Success View
              <>
                <div className="flex border-b border-gray-300">
                  <div className="w-1/2 p-2 font-bold text-center border-r border-gray-300 flex items-center justify-center">
                    <a 
                      href="https://www.linkedin.com/in/rahulshyamcivil/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 flex items-center justify-center gap-1 text-sm font-medium transition-colors"
                    >
                      <span>Reveal Name</span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </a>
                  </div>
                  <div className="w-1/2 p-2 font-bold text-center flex items-center justify-center">{regNo}</div>
                </div>
                <div className="text-center font-bold p-2 border-b border-gray-300">
                  B.E - Civil Engineering
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-center border-collapse">
                    <thead>
                      <tr className="bg-[#009688] text-white">
                        <th className="border border-gray-300 p-1">Semester</th>
                        <th className="border border-gray-300 p-1">Course Code</th>
                        <th className="border border-gray-300 p-1">Course Title</th>
                        <th className="border border-gray-300 p-1">Grade</th>
                        <th className="border border-gray-300 p-1">Grade Point</th>
                        <th className="border border-gray-300 p-1">Result</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { sem: 3, code: '23BS301', title: 'Transform Partial Differential Equations', grade: 'U', point: 0, res: 'RA' },
                        { sem: 3, code: '23CE301', title: 'Construction Materials and Practices', grade: 'B', point: 6, res: 'PASS' },
                        { sem: 3, code: '23CE303', title: 'Engineering Mechanics', grade: 'U', point: 0, res: 'RA' },
                        { sem: 3, code: '23CE305', title: 'Hydraulic Engineering Laboratory', grade: 'B', point: 6, res: 'PASS' },
                        { sem: 3, code: '23CE302', title: 'Fluid Mechanics and Machinery', grade: 'U', point: 0, res: 'RA' },
                        { sem: 3, code: '23MC301', title: 'Indian Constitution', grade: 'B', point: 6, res: 'PASS' },
                        { sem: 3, code: '23CE304', title: 'Mechanics of Solids', grade: 'U', point: 0, res: 'RA' },
                        { sem: 3, code: '23TPS03', title: 'Quantitative Aptitude and Logical Reasoning', grade: 'B', point: 6, res: 'PASS' },
                        { sem: 3, code: '23CE306', title: 'Computer Aided Drawing Practices', grade: 'B', point: 6, res: 'PASS' },
                      ].map((row, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="border border-gray-300 p-1">{row.sem}</td>
                          <td className="border border-gray-300 p-1">{row.code}</td>
                          <td className="border border-gray-300 p-1 text-left pl-4">{row.title}</td>
                          <td className="border border-gray-300 p-1">{row.grade}</td>
                          <td className="border border-gray-300 p-1">{row.point}</td>
                          <td className={`border border-gray-300 p-1 ${row.res === 'RA' ? 'text-red-600 font-bold' : ''}`}>{row.res}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            ) : (
              // Failure/Invalid View
              <div className="overflow-x-auto">
                 <div className="h-8 border-b border-gray-300"></div>
                <table className="w-full text-sm text-center border-collapse">
                  <thead>
                    <tr className="bg-[#009688] text-white">
                      <th className="border border-gray-300 p-2 w-[10%]">Semester</th>
                      <th className="border border-gray-300 p-2 w-[15%]">Course Code</th>
                      <th className="border border-gray-300 p-2 w-[35%]">Course Title</th>
                      <th className="border border-gray-300 p-2 w-[10%]">Grade</th>
                      <th className="border border-gray-300 p-2 w-[15%]">Grade Point</th>
                      <th className="border border-gray-300 p-2 w-[15%]">Result</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan={6} className="border border-gray-300 p-3 font-bold text-[#009688] text-lg">
                        Check your register Number OR Date of Birth OR RESULT WITHHELD
                      </td>
                    </tr>
                    <tr>
                       <td colSpan={6} className="border border-gray-300 p-4"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Disclaimer Section */}
          <div className="w-full mt-10">
            <div className="bg-[#00bfa5] text-white text-center font-bold py-1 text-lg">
              Disclaimer
            </div>
            <div className="bg-white p-4 text-center text-sm md:text-base leading-relaxed text-black">
              The Result Published is Provisional Only. We are not responsible for any inadvertent error that may have crept in the data/ results Published. The final mark sheets issued by the Institution only be treated authentic & final in this regard.
            </div>
          </div>
          
          <div className="mt-8">
              <button 
                  onClick={() => {
                      setShowResult(false);
                      setRegNo('');
                      setDob('');
                  }}
                  className="text-blue-600 underline text-sm"
              >
                  Back to Search
              </button>
          </div>

        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      <Header />
      
      <main className="flex-grow flex flex-col items-center pt-8 pb-16 px-4">
        <h1 className="text-[#4a148c] text-xl md:text-2xl font-bold text-center mb-10 font-sans tracking-wide uppercase">
          OFFICE OF THE CONTROLLER OF EXAMINATIONS
        </h1>

        <div className="w-full max-w-[450px] border border-[#448aff] p-8 md:p-10 bg-white flex flex-col items-center">
          
          <div className="text-center mb-8">
             <div className="flex flex-col items-center justify-center gap-1">
                <div className="flex items-center gap-2 mb-1">
                    {/* Starburst NEW icon */}
                    <div className="relative w-8 h-8 flex items-center justify-center shrink-0 animate-pulse">
                      <svg viewBox="0 0 24 24" className="w-full h-full text-[#1a237e] drop-shadow-sm filter" style={{filter: 'drop-shadow(0 1px 1px rgba(0,0,0,0.2))'}}>
                        <path fill="currentColor" d="M12,1 L15,8 L22,9 L17,14 L18,21 L12,18 L6,21 L7,14 L2,9 L9,8 Z" />
                      </svg>
                      <span className="absolute text-[9px] font-bold text-white z-10 leading-none" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -40%)' }}>NEW</span>
                    </div>
                    <h2 className="text-[#283593] font-bold text-[0.95rem] leading-tight text-left">
                      UG/PG/Ph.D. End Semester<br/>
                      Examinations Jan/Feb 2026 Results
                    </h2>
                </div>
             </div>
          </div>

          <form onSubmit={handleGetResult} className="w-full space-y-5 px-2">
             {/* Register Number Input */}
             <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                   {/* User Icon */}
                   <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                   </svg>
                </div>
                <input
                  required
                  type="text"
                  value={regNo}
                  onChange={(e) => setRegNo(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 bg-[#e6e6e6] border border-gray-300 rounded-[4px] text-sm text-gray-700 placeholder-gray-500 focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:invalid:border-red-500 focus:invalid:ring-red-500 shadow-inner transition-colors"
                  placeholder="Register Number"
                />
             </div>

             {/* DOB Input */}
             <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                   {/* User Icon (reused as per screenshot looking like user icon or similar generic icon) */}
                   <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                   </svg>
                </div>
                <input
                  required
                  type="text" 
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 bg-[#e6e6e6] border border-gray-300 rounded-[4px] text-sm text-gray-700 placeholder-gray-500 focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:invalid:border-red-500 focus:invalid:ring-red-500 shadow-inner transition-colors"
                  placeholder="Date of Birth (yyyy-mm-dd)"
                />
             </div>

             <div className="pt-2 flex justify-center">
                <button
                  type="submit"
                  className="bg-gradient-to-b from-[#ffecb3] via-[#ffca28] to-[#ffb300] hover:from-[#ffca28] hover:to-[#ff8f00] text-[#4e342e] font-bold py-2 px-8 rounded-full border border-[#ff6f00] shadow-sm transition-all duration-200 text-sm tracking-wide"
                >
                  Get Result
                </button>
             </div>
          </form>

        </div>
      </main>
    </div>
  );
};

export default App;