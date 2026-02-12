import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-navy-dark via-navy to-navy-medium text-white mt-16">
      <div className="pt-12 pb-6">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            
            {/* College Info */}
            <div className="animate-fadeIn">
              <h3 className="text-lg font-bold text-gold mb-6 pb-2 border-b-2 border-gold/30 font-heading">
                Erode Sengunthar Engineering College
              </h3>
              <p className="text-[0.9375rem] leading-[1.8] text-white/90 mb-4">
                (An Autonomous Institution | Approved by AICTE, New Delhi)<br/>
                Affiliated to Anna University, Chennai<br/>
                Accredited by NAAC with 'A+' Grade
              </p>
              <p className="text-[0.9375rem] leading-[1.8] text-white/90">
                <strong>Address:</strong> Thudupathi, Perundurai,<br/>
                Erode - 638057, Tamil Nadu, India
              </p>
            </div>

            {/* Quick Links */}
            <div className="animate-fadeIn">
              <h3 className="text-lg font-bold text-gold mb-6 pb-2 border-b-2 border-gold/30 font-heading">
                Quick Links
              </h3>
              <ul className="m-0 p-0 list-none space-y-4">
                {['About College', 'Admissions', 'Departments', 'Placements', 'Research'].map(link => (
                  <li key={link}>
                    <a href="#" className="text-white/85 text-[0.9375rem] transition-all hover:text-gold hover:translate-x-1 inline-block">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* COE Resources */}
            <div className="animate-fadeIn">
              <h3 className="text-lg font-bold text-gold mb-6 pb-2 border-b-2 border-gold/30 font-heading">
                COE Resources
              </h3>
              <ul className="m-0 p-0 list-none space-y-4">
                {['Regulations', 'Syllabus', 'Academic Calendar', 'Revaluation', 'Certificates'].map(link => (
                  <li key={link}>
                    <a href="#" className="text-white/85 text-[0.9375rem] transition-all hover:text-gold hover:translate-x-1 inline-block">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="animate-fadeIn">
              <h3 className="text-lg font-bold text-gold mb-6 pb-2 border-b-2 border-gold/30 font-heading">
                Contact COE
              </h3>
              <ul className="m-0 p-0 list-none space-y-4">
                <li className="flex items-center gap-4 text-white/90 text-[0.9375rem]">
                  <span className="text-lg">📞</span>
                  <span>+91-4294-226666</span>
                </li>
                <li className="flex items-center gap-4 text-white/90 text-[0.9375rem]">
                  <span className="text-lg">✉️</span>
                  <span>coe@esec.ac.in</span>
                </li>
                <li className="flex items-center gap-4 text-white/90 text-[0.9375rem]">
                  <span className="text-lg">🌐</span>
                  <span>www.esec.ac.in</span>
                </li>
                <li className="flex items-center gap-4 text-white/90 text-[0.9375rem]">
                  <span className="text-lg">🕒</span>
                  <span>Mon-Fri: 9:00 AM - 5:00 PM</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 py-6 flex flex-wrap justify-between items-center gap-6">
            <div className="text-sm text-white/70">
              <p>&copy; 2026 Erode Sengunthar Engineering College. All Rights Reserved.</p>
            </div>
            <div className="text-sm text-white/70">
              <p>Designed & Maintained by COE - IT Department</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;