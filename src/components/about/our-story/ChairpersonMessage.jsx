import React from 'react';

const ChairpersonMessage = () => {
  return (
    <div className="w-full bg-[#fdfafc] py-20 px-4 md:px-8 lg:px-16 border-y border-[#f0eaef]">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* About Us */}
        <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-16 items-center">
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl font-light text-gray-800 mb-6 tracking-wide">
              About Us
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              Deepak Gupta Foundation is a not-for-profit company registered under Section 8 of the Companies Act, 2013 (CIN: U85300DL2022NPL396819), headquartered at Tughlakbad Extension, South Delhi. It holds 12A/80G registration (Reg. No. AAJCD2202P26DL02, AY 2026-27 to 2030-31) and CSR eligibility (CSR Registration No. CSR00112282), and is listed on NGO Darpan (Unique ID: DL/2023/0337627), with an operational footprint across Delhi and Uttar Pradesh.
            </p>
          </div>
          <div className="w-full lg:w-1/2 rounded-3xl overflow-hidden shadow-xl aspect-video lg:aspect-[4/3]">
            <img src="https://picsum.photos/800/600?random=340" alt="About Us" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Leadership */}
        <div className="pt-8 border-t border-[#f0eaef]">
          <h2 className="text-3xl font-light text-center text-gray-800 mb-12 tracking-wide">
            Leadership
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-6 bg-gray-200">
                <img src="https://ui-avatars.com/api/?name=Deepak+Gupta&background=008272&color=fff&size=150" alt="Deepak Gupta" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Deepak Gupta</h3>
              <p className="text-[#a51a70] font-medium mb-4">Founder</p>
              <p className="text-sm text-gray-600">Sets the strategic direction and founding vision of the Foundation</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-6 bg-gray-200">
                <img src="https://ui-avatars.com/api/?name=Anand+Gupta&background=008272&color=fff&size=150" alt="Anand Gupta" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Anand Gupta</h3>
              <p className="text-[#a51a70] font-medium mb-4">Treasurer</p>
              <p className="text-sm text-gray-600">Oversees financial governance, fund utilisation, and audit compliance</p>
            </div>
          </div>
        </div>

        {/* Awards & Recognition */}
        <div className="pt-8 border-t border-[#f0eaef]">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#faebf6] text-[#a51a70]">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
            </div>
            <h2 className="text-3xl font-light text-gray-800 mb-6 tracking-wide">
              Awards & Recognition
            </h2>
            <p className="text-base text-gray-600 leading-relaxed">
              As a young organisation, the Foundation's focus remains on establishing a credible, verifiable operational track record rather than accolades. Our first major institutional partnership — the proposed Tree Plantation Initiative with NBCC Limited — has been structured to meet the governance and audit standards expected of an award-worthy CSR programme.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ChairpersonMessage;
