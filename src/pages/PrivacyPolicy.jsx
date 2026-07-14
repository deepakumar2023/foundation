import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="pt-24 pb-16 bg-white">
      <div className="container mx-auto px-4 xl:px-8 max-w-4xl">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 border-b pb-4 border-gray-200">
          Privacy Policy
        </h1>
        
        <div className="prose prose-lg text-gray-700">
          <p className="mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Introduction</h2>
          <p className="mb-4">
            Welcome to the Deepak Gupta Foundation. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Data We Collect</h2>
          <p className="mb-4">
            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2"><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
            <li className="mb-2"><strong>Contact Data:</strong> includes email address and telephone numbers.</li>
            <li className="mb-2"><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
            <li className="mb-2"><strong>Usage Data:</strong> includes information about how you use our website, products and services.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. How We Use Your Data</h2>
          <p className="mb-4">
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">Where we need to perform the contract we are about to enter into or have entered into with you.</li>
            <li className="mb-2">Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
            <li className="mb-2">Where we need to comply with a legal obligation.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Data Security</h2>
          <p className="mb-4">
            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Your Legal Rights</h2>
          <p className="mb-4">
            Under certain circumstances, you have rights under data protection laws in relation to your personal data. These include the right to request access, correction, erasure, restriction, transfer, to object to processing, to portability of data and (where the lawful ground of processing is consent) to withdraw consent.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this privacy policy or our privacy practices, please contact us at:<br/>
            <strong>RZ-2084, G/F, R/S Gali No. 26,</strong><br/>
            Tughlakbad Extension,<br/>
            South Delhi, Delhi - 110019, India
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
