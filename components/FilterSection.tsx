import React, { useState } from 'react';

interface FilterSectionProps {
  onSearch: () => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({ onSearch }) => {
  const [formData, setFormData] = useState({
    degree: '',
    department: '',
    semester: '',
    regulation: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.degree || !formData.department || !formData.semester || !formData.regulation) {
      alert('⚠️ Please select all fields before viewing results');
      return;
    }
    onSearch();
  };

  const handleReset = () => {
    setFormData({
      degree: '',
      department: '',
      semester: '',
      regulation: ''
    });
  };

  return (
    <div className="bg-white rounded-2xl p-6 md:p-10 shadow-lg mb-12 animate-fadeInUp">
      <div className="text-center mb-8 pb-8 border-b-[3px] border-[#e8eaf6]">
        <h2 className="flex flex-col md:flex-row items-center justify-center gap-2 text-2xl md:text-[1.75rem] text-navy font-heading font-bold mb-2">
          <span className="text-[2rem]">🎓</span>
          Select Your Program Details
        </h2>
        <p className="text-base text-[#616161]">Choose your degree, department, semester, and regulation to view results</p>
      </div>

      <form className="max-w-[900px] mx-auto" onSubmit={handleSubmit} onReset={handleReset}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          
          {/* Degree */}
          <div className="flex flex-col">
            <label className="flex items-center gap-1 text-[0.95rem] font-semibold text-[#616161] mb-2 uppercase tracking-[0.5px]">
              <span className="flex-1">Degree / Program</span>
              <span className="text-red text-lg">*</span>
            </label>
            <div className="relative">
              <select 
                name="degree" 
                value={formData.degree}
                onChange={handleChange}
                className="w-full px-4 py-4 pr-12 font-sans text-base text-[#212121] bg-white border-2 border-[#e0e0e0] rounded-lg appearance-none cursor-pointer focus:border-navy focus:ring-0 focus:shadow-[0_0_0_4px_rgba(26,35,126,0.1)] outline-none transition-all duration-300 hover:border-[#bdbdbd]"
                required
              >
                <option value="">-- Select Degree --</option>
                <option value="BE">B.E. (Bachelor of Engineering)</option>
                <option value="ME">M.E. (Master of Engineering)</option>
                <option value="MBA">MBA (Master of Business Administration)</option>
                <option value="MCA">MCA (Master of Computer Applications)</option>
              </select>
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#616161] pointer-events-none">▼</span>
            </div>
          </div>

          {/* Department */}
          <div className="flex flex-col">
            <label className="flex items-center gap-1 text-[0.95rem] font-semibold text-[#616161] mb-2 uppercase tracking-[0.5px]">
              <span className="flex-1">Department / Branch</span>
              <span className="text-red text-lg">*</span>
            </label>
            <div className="relative">
              <select 
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="w-full px-4 py-4 pr-12 font-sans text-base text-[#212121] bg-white border-2 border-[#e0e0e0] rounded-lg appearance-none cursor-pointer focus:border-navy focus:ring-0 focus:shadow-[0_0_0_4px_rgba(26,35,126,0.1)] outline-none transition-all duration-300 hover:border-[#bdbdbd]"
                required
              >
                <option value="">-- Select Department --</option>
                <option value="CSE">Computer Science and Engineering</option>
                <option value="IT">Information Technology</option>
                <option value="AIDS">Artificial Intelligence & Data Science</option>
                <option value="ECE">Electronics and Communication Engineering</option>
                <option value="EEE">Electrical and Electronics Engineering</option>
                <option value="MECH">Mechanical Engineering</option>
                <option value="CIVIL">Civil Engineering</option>
                <option value="CHEM">Chemical Engineering</option>
              </select>
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#616161] pointer-events-none">▼</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Semester */}
          <div className="flex flex-col">
            <label className="flex items-center gap-1 text-[0.95rem] font-semibold text-[#616161] mb-2 uppercase tracking-[0.5px]">
              <span className="flex-1">Year / Semester</span>
              <span className="text-red text-lg">*</span>
            </label>
            <div className="relative">
              <select 
                name="semester"
                value={formData.semester}
                onChange={handleChange}
                className="w-full px-4 py-4 pr-12 font-sans text-base text-[#212121] bg-white border-2 border-[#e0e0e0] rounded-lg appearance-none cursor-pointer focus:border-navy focus:ring-0 focus:shadow-[0_0_0_4px_rgba(26,35,126,0.1)] outline-none transition-all duration-300 hover:border-[#bdbdbd]"
                required
              >
                <option value="">-- Select Semester --</option>
                <option value="1">I Year - I Semester</option>
                <option value="2">I Year - II Semester</option>
                <option value="3">II Year - III Semester</option>
                <option value="4">II Year - IV Semester</option>
                <option value="5">III Year - V Semester</option>
                <option value="6">III Year - VI Semester</option>
                <option value="7">IV Year - VII Semester</option>
                <option value="8">IV Year - VIII Semester</option>
              </select>
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#616161] pointer-events-none">▼</span>
            </div>
          </div>

          {/* Regulation */}
          <div className="flex flex-col">
            <label className="flex items-center gap-1 text-[0.95rem] font-semibold text-[#616161] mb-2 uppercase tracking-[0.5px]">
              <span className="flex-1">Regulation</span>
              <span className="text-red text-lg">*</span>
            </label>
            <div className="relative">
              <select 
                name="regulation"
                value={formData.regulation}
                onChange={handleChange}
                className="w-full px-4 py-4 pr-12 font-sans text-base text-[#212121] bg-white border-2 border-[#e0e0e0] rounded-lg appearance-none cursor-pointer focus:border-navy focus:ring-0 focus:shadow-[0_0_0_4px_rgba(26,35,126,0.1)] outline-none transition-all duration-300 hover:border-[#bdbdbd]"
                required
              >
                <option value="">-- Select Regulation --</option>
                <option value="R2021">R2021 (Admitted: 2021-2025)</option>
                <option value="R2020">R2020 (Admitted: 2020-2024)</option>
                <option value="R2019">R2019 (Admitted: 2019-2023)</option>
                <option value="R2018">R2018 (Admitted: 2018-2022)</option>
              </select>
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#616161] pointer-events-none">▼</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mt-12 pt-8 border-t-2 border-[#e8eaf6]">
          <button 
            type="submit" 
            className="flex-1 flex items-center justify-center gap-2 py-[1.125rem] px-8 font-heading text-base font-semibold uppercase tracking-widest text-white bg-gradient-primary rounded-lg shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:shadow-sm group relative overflow-hidden"
          >
             <span className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-500 group-hover:left-full"></span>
            <span className="text-xl">📄</span>
            <span>View Results</span>
            <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
          
          <button 
            type="reset" 
            className="flex items-center justify-center gap-2 py-[1.125rem] px-8 font-heading text-base font-semibold uppercase tracking-widest text-[#616161] bg-white border-2 border-[#bdbdbd] rounded-lg transition-all duration-300 hover:text-navy hover:border-navy hover:bg-[#e8eaf6]"
          >
            <span className="text-xl">↻</span>
            <span>Reset</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default FilterSection;