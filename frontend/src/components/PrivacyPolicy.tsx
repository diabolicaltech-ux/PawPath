import React from 'react';
import LegalLayout, { SectionHeading, SubHeading } from './LegalLayout';

interface PrivacyPolicyProps {
  onBack: () => void;
}

/**
 * Privacy Policy.
 * Copy ported from the finalized policy (site route) with the exact text and
 * "Last Updated: August 19, 2026" date preserved, restyled with app-native
 * theme tokens.
 */
const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  return (
    <LegalLayout
      onBack={onBack}
      title="PRIVACY POLICY"
      subtitle="PawPath (pawpath.quest) — Digital Pet Health &amp; Wellness Management Platform"
      updatedDate="August 19, 2026"
    >
      <section>
        <SectionHeading>1. Overview</SectionHeading>
        <p className="mt-3">
          This Privacy Policy explains how PawPath collects, uses, stores, and protects information when you
          access or use our website, mobile web applications, and related digital services (collectively, the
          &quot;Service&quot;). By using the Service, you acknowledge the practices described in this Policy.
        </p>
      </section>

      <section>
        <SectionHeading>2. Information We Collect</SectionHeading>
        <div className="mt-4 space-y-5">
          <div>
            <SubHeading>2.1 Account Information</SubHeading>
            <p className="mt-2">
              When you create or access a PawPath account, we may collect information such as your name, email
              address, account identifier, and authentication details provided through your selected sign-in
              provider.
            </p>
          </div>
          <div>
            <SubHeading>2.2 Pet Profiles and Health Information</SubHeading>
            <p className="mt-2">
              We collect the information you choose to enter about your pets, such as species, breed, age,
              weight, lifestyle, nutrition, medical history, routines, milestones, notes, and other health and
              wellness records. This information is used to provide the Service to you and is intended to remain
              associated with your PawPath account.
            </p>
          </div>
          <div>
            <SubHeading>2.3 Usage and Device Information</SubHeading>
            <p className="mt-2">
              We may automatically receive technical information about how you use the Service, including browser
              type, device type, operating system, approximate location derived from network information, pages
              or features viewed, and dates and times of access. We use this information to operate, secure, and
              improve the Service.
            </p>
          </div>
          <div>
            <SubHeading>2.4 Communications and Support</SubHeading>
            <p className="mt-2">
              If you contact us, we may collect the information you provide, including your name, email address,
              message, and any attachments or details needed to respond to your request.
            </p>
          </div>
          <div>
            <SubHeading>2.5 Payment Information</SubHeading>
            <p className="mt-2">
              If you purchase an optional PawPath feature, payment details are processed by our payment provider.
              PawPath does not need to store your full payment card number to provide the Service. We may receive
              limited transaction details, such as payment status, product purchased, and transaction identifiers.
            </p>
          </div>
        </div>
      </section>

      <section>
        <SectionHeading>3. How We Use Information</SectionHeading>
        <p className="mt-3">We may use information to:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Provide, personalize, and maintain the Service.</li>
          <li>Save and display your pet profiles and health records across your account sessions.</li>
          <li>Authenticate users and protect accounts from unauthorized access.</li>
          <li>Process purchases and maintain transaction records.</li>
          <li>Respond to support requests and communicate about the Service.</li>
          <li>Monitor performance, troubleshoot issues, and improve features.</li>
          <li>Detect, prevent, and address fraud, abuse, security incidents, and violations of our terms.</li>
          <li>Comply with legal obligations and enforce our agreements.</li>
        </ul>
      </section>

      <section>
        <SectionHeading>4. How We Share Information</SectionHeading>
        <p className="mt-3">
          We may share information only as reasonably necessary to operate the Service, including with trusted
          service providers that help us with hosting, cloud storage, authentication, payment processing,
          security, customer support, and technical operations. These providers may access information only to
          perform services for us and under appropriate confidentiality and security obligations.
        </p>
        <p className="mt-3">
          We may also disclose information when required by law, to protect the rights and safety of PawPath or
          others, to investigate fraud or security issues, or as part of a merger, acquisition, financing, sale
          of assets, or similar business transaction. We do not sell your personal information for money.
        </p>
      </section>

      <section>
        <SectionHeading>5. Cookies and Similar Technologies</SectionHeading>
        <p className="mt-3">
          PawPath may use cookies, local storage, and similar technologies to keep you signed in, remember
          preferences, maintain security, understand how the Service is used, and improve performance. You can
          adjust cookie or browser settings, but disabling technologies needed for authentication or security
          may affect the availability of some features.
        </p>
      </section>

      <section>
        <SectionHeading>6. Data Security</SectionHeading>
        <p className="mt-3">
          We use reasonable administrative, technical, and organizational safeguards designed to protect
          information from unauthorized access, loss, misuse, alteration, or disclosure. No method of
          transmission or storage is completely secure, so we cannot guarantee absolute security. You are
          responsible for protecting your account credentials and notifying us if you believe your account has
          been compromised.
        </p>
      </section>

      <section>
        <SectionHeading>7. Data Retention and Deletion</SectionHeading>
        <p className="mt-3">
          We retain information for as long as reasonably necessary to provide the Service, maintain legitimate
          business and security records, resolve disputes, comply with legal obligations, and enforce our
          agreements. You may request access to, correction of, or deletion of personal information by contacting
          us. We may need to retain limited information where required by law or reasonably necessary for
          security, fraud prevention, or legal purposes.
        </p>
      </section>

      <section>
        <SectionHeading>8. Your Choices and Privacy Rights</SectionHeading>
        <p className="mt-3">
          Depending on where you live, you may have rights to request access to, correction of, deletion of, or a
          copy of your personal information, or to object to or restrict certain processing. You may also have
          the right to withdraw consent where processing is based on consent. To make a request, contact us using
          the details below. We may need to verify your identity before completing a request, and applicable law
          may limit these rights.
        </p>
      </section>

      <section>
        <SectionHeading>9. Children&apos;s Privacy</SectionHeading>
        <p className="mt-3">
          The Service is intended for people who are at least 18 years old, or the age of legal majority where
          they live. We do not knowingly collect personal information from children. If you believe a child has
          provided personal information to us, please contact us so we can review and delete it as appropriate.
        </p>
      </section>

      <section>
        <SectionHeading>10. Third-Party Services and Links</SectionHeading>
        <p className="mt-3">
          The Service may use or link to third-party services, including sign-in, payment, hosting, or other
          technology providers. Those services operate under their own privacy policies, and PawPath is not
          responsible for their independent privacy practices. Review their policies before providing information
          directly to them.
        </p>
      </section>

      <section>
        <SectionHeading>11. Changes to This Privacy Policy</SectionHeading>
        <p className="mt-3">
          We may update this Privacy Policy from time to time. When we make material changes, we will update the
          &quot;Last Updated&quot; date at the top of this page and may provide additional notice through the
          Service or by email. Your continued use of the Service after an updated Policy becomes effective means
          you acknowledge the updated Policy.
        </p>
      </section>

      <section>
        <SectionHeading>12. Contact Information</SectionHeading>
        <p className="mt-3">Questions or privacy requests may be sent to:</p>
        <p className="mt-3">
          Email: <a className="underline" href="mailto:support@pawpath.quest">support@pawpath.quest</a>
          <br />
          Website: <a className="underline" href="https://pawpath.quest">https://pawpath.quest</a>
        </p>
      </section>
    </LegalLayout>
  );
};

export default PrivacyPolicy;
