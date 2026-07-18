import React from 'react';

const TermsOfUse = () => {
  return (
    <div className="pt-24 pb-16 bg-surface">
      <div className="container mx-auto px-4 xl:px-8 max-w-4xl">
        <h1 className="text-3xl md:text-5xl font-bold text-text-main mb-8 border-b pb-4 border-gray-200">
          Terms of Use
        </h1>
        
        <div className="prose prose-lg text-text-main">
          <p className="mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          
          <h2 className="text-2xl font-semibold text-text-main mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="mb-4">
            By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this website's particular services, you shall be subject to any posted guidelines or rules applicable to such services.
          </p>
          <p className="mb-4">
            ANY PARTICIPATION IN THIS SITE WILL CONSTITUTE ACCEPTANCE OF THIS AGREEMENT. IF YOU DO NOT AGREE TO ABIDE BY THE ABOVE, PLEASE DO NOT USE THIS SITE.
          </p>

          <h2 className="text-2xl font-semibold text-text-main mt-8 mb-4">2. Accuracy of Information</h2>
          <p className="mb-4">
            This site and its components are offered for informational purposes only; this site shall not be responsible or liable for the accuracy, usefulness or availability of any information transmitted or made available via the site, and shall not be responsible or liable for any error or omissions in that information.
          </p>

          <h2 className="text-2xl font-semibold text-text-main mt-8 mb-4">3. Intellectual Property Rights</h2>
          <p className="mb-4">
            The Site and its original content, features, and functionality are owned by Deepak Gupta Foundation and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
          </p>

          <h2 className="text-2xl font-semibold text-text-main mt-8 mb-4">4. User Obligations</h2>
          <p className="mb-4">
            As a user of the Site, you agree not to:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">Systematically retrieve data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
            <li className="mb-2">Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.</li>
            <li className="mb-2">Circumvent, disable, or otherwise interfere with security-related features of the Site.</li>
            <li className="mb-2">Use any information obtained from the Site in order to harass, abuse, or harm another person.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-text-main mt-8 mb-4">5. Modifications to Terms</h2>
          <p className="mb-4">
            We reserve the right to change these conditions from time to time as it sees fit and your continued use of the site will signify your acceptance of any adjustment to these terms. If there are any changes to our privacy policy, we will announce that these changes have been made on our home page and on other key pages on our site.
          </p>

          <h2 className="text-2xl font-semibold text-text-main mt-8 mb-4">6. Contact Information</h2>
          <p className="mb-4">
            If you have any questions regarding these Terms of Use, please contact us at:<br/>
            <strong>RZ-2084, G/F, R/S Gali No. 26,</strong><br/>
            Tughlakbad Extension,<br/>
            South Delhi, Delhi - 110019, India
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
