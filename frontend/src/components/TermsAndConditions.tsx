import React from 'react';
import LegalLayout, { SectionHeading, SubHeading } from './LegalLayout';

interface TermsAndConditionsProps {
  onBack: () => void;
}

/**
 * Terms and Conditions of Service.
 * Copy ported from the finalized policy (site route) with the exact text and
 * "Last Updated: August 17, 2026" date preserved, restyled with app-native
 * theme tokens.
 */
const TermsAndConditions: React.FC<TermsAndConditionsProps> = ({ onBack }) => {
  return (
    <LegalLayout
      onBack={onBack}
      title="TERMS AND CONDITIONS OF SERVICE"
      subtitle="PawPath (pawpath.quest) — Digital Pet Health &amp; Wellness Management Platform"
      updatedDate="August 17, 2026"
    >
      <section className="rounded-xl border border-amber-200 bg-amber-50 p-5">
        <h2 className="text-base font-bold uppercase tracking-wide text-amber-900">Medical Disclaimer &amp; Emergency Notice</h2>
        <p className="mt-2">
          PawPath provides digital tools and educational tracking resources for pet owners. PawPath IS NOT a
          veterinary practice, medical provider, or emergency service, and does not provide veterinary medical
          advice, diagnosis, or treatment.
        </p>
      </section>

      <section>
        <SectionHeading>1. Acceptance of Terms</SectionHeading>
        <p className="mt-3">
          By accessing, registering for, or using the PawPath website, mobile web applications, or digital
          services (collectively, the &quot;Service&quot;), you agree to be bound by these Terms and Conditions
          (&quot;Terms&quot;). If you do not agree to all of these Terms, you must immediately cease all access to
          and use of the Service.
        </p>
      </section>

      <section>
        <SectionHeading>2. Description of Platform &amp; Services</SectionHeading>
        <p className="mt-3">
          PawPath provides pet owners with interactive digital software tools to organize pet health records,
          track daily routines, log dietary habits, monitor body condition scores (BCS), and manage pet care
          schedules across their pet&apos;s lifecycle.
        </p>
      </section>

      <section>
        <SectionHeading>3. Veterinary Disclaimer &amp; No Medical Advice</SectionHeading>
        <div className="mt-4 space-y-5">
          <div>
            <SubHeading>3.1 Educational &amp; Informational Purpose Only</SubHeading>
            <p className="mt-2">
              All content, interactive questionnaires, diet trackers, body condition calculators,
              recommendations, and guides provided through PawPath are for general informational and educational
              purposes only. They do not constitute veterinary medical advice, professional diagnoses, or official
              treatment plans.
            </p>
          </div>
          <div>
            <SubHeading>3.2 Professional Relationship</SubHeading>
            <p className="mt-2">
              Use of PawPath does not create a veterinarian-client-patient relationship (VCPR). You should always
              consult with a licensed veterinarian for specific medical concerns, dietary changes, health
              diagnoses, or medication management regarding your pet.
            </p>
          </div>
          <div>
            <SubHeading>3.3 Emergency Situations</SubHeading>
            <p className="mt-2">
              If your pet is experiencing a medical emergency, trauma, acute illness, or sudden severe behavioral
              change, immediately contact your local emergency veterinary clinic or veterinarian. Do not rely on
              PawPath for urgent medical situations.
            </p>
          </div>
        </div>
      </section>

      <section>
        <SectionHeading>4. User Accounts &amp; Responsibilities</SectionHeading>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>
            <strong>Eligibility:</strong> You must be at least 18 years of age (or the age of legal majority in
            your jurisdiction) to create an account and use the Service.
          </li>
          <li>
            <strong>Accurate Information:</strong> You are responsible for providing accurate and truthful
            information regarding your pets (including species, breed, age, weight, and lifestyle details).
          </li>
          <li>
            <strong>Account Security:</strong> You are responsible for maintaining the confidentiality of your
            account credentials and for all activities that occur under your account.
          </li>
        </ul>
      </section>

      <section>
        <SectionHeading>5. Intellectual Property &amp; License</SectionHeading>
        <p className="mt-3">
          The Service, including its software, user interfaces, branding, text, graphics, illustrations, breed
          databases, and layout, is owned by PawPath and protected by copyright, trademark, and intellectual
          property laws. PawPath grants you a personal, non-exclusive, non-transferable, revocable license to
          access and use the platform for personal, non-commercial pet management purposes.
        </p>
      </section>

      <section>
        <SectionHeading>6. User-Generated Content &amp; Pet Profiles</SectionHeading>
        <p className="mt-3">
          You retain ownership of any notes, photos, or pet profile data you upload to the platform. By uploading
          content, you grant PawPath a non-exclusive, worldwide, royalty-free license to store, process, and
          display that content solely as necessary to provide and improve the Service to you.
        </p>
      </section>

      <section>
        <SectionHeading>7. Prohibited Conduct</SectionHeading>
        <p className="mt-3">When using PawPath, you agree not to:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Use the Service for any unlawful purpose or in violation of animal welfare laws.</li>
          <li>Attempt to reverse engineer, decompile, scrape, or extract source code from the platform.</li>
          <li>Interfere with or disrupt the security, performance, or availability of the Service.</li>
          <li>Misrepresent your identity or impersonate a licensed veterinary professional.</li>
        </ul>
      </section>

      <section>
        <SectionHeading>8. Limitation of Liability</SectionHeading>
        <p className="mt-3 uppercase">
          TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, PAWPATH, ITS OFFICERS, DIRECTORS, EMPLOYEES, AND
          AFFILIATES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE
          DAMAGES, OR ANY LOSS OF PROFITS OR DATA, ARISING OUT OF OR RELATING TO YOUR USE OF OR INABILITY TO USE
          THE SERVICE, INCLUDING ANY HEALTH DECISIONS MADE FOR YOUR PET BASED ON PLATFORM INFORMATION.
        </p>
      </section>

      <section>
        <SectionHeading>9. Disclaimer of Warranties</SectionHeading>
        <p className="mt-3 uppercase">
          THE SERVICE IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS WITHOUT WARRANTIES
          OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
        </p>
      </section>

      <section>
        <SectionHeading>10. Modifications to Terms &amp; Service</SectionHeading>
        <p className="mt-3">
          PawPath reserves the right to modify or update these Terms at any time. We will notify users of material
          changes by updating the &quot;Last Updated&quot; date at the top of these Terms or via email/in-app
          notice. Your continued use of the Service following any modifications constitutes acceptance of the
          updated Terms.
        </p>
      </section>

      <section>
        <SectionHeading>11. Governing Law &amp; Jurisdiction</SectionHeading>
        <p className="mt-3">
          These Terms shall be governed by and construed in accordance with the laws of the State of Arizona,
          without regard to its conflict of law principles. Any dispute arising out of these Terms shall be
          resolved in the state or federal courts located in Maricopa County, Arizona.
        </p>
      </section>

      <section>
        <SectionHeading>12. Contact Information</SectionHeading>
        <p className="mt-3">
          If you have any questions or concerns regarding these Terms and Conditions, please contact us at:
        </p>
        <p className="mt-3">
          Email: <a className="underline" href="mailto:support@pawpath.quest">support@pawpath.quest</a>
          <br />
          Website: <a className="underline" href="https://pawpath.quest">https://pawpath.quest</a>
        </p>
      </section>
    </LegalLayout>
  );
};

export default TermsAndConditions;
