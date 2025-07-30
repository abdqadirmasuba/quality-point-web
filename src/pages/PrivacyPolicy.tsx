import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Logo from "@/assets/logo.png";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Simple Header */}
      <header className="border-b bg-card">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src={Logo}
              alt="Quality Point Logo" 
              className="h-10 w-auto"
            />
          </Link>
          <Link to="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </Link>
        </div>
      </header>

      <main className="container max-w-4xl py-12">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Privacy Policy</h1>
            <p className="text-lg text-muted-foreground">
              Last updated: April 2, 2025
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Introduction</h2>
              <p className="text-muted-foreground">
                This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
              </p>
              <p className="text-muted-foreground">
                We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Information We Collect</h2>
              <div className="space-y-3">
                <h3 className="text-xl font-medium">Personal Information</h3>
                <p className="text-muted-foreground">
                  While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Email address</li>
                  <li>First name and last name</li>
                  <li>Google user profile picture</li>
                  <li>Information regarding your scanned products</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-medium">Usage Information</h3>
                <p className="text-muted-foreground">
                  Usage Data is collected automatically when using the Service and may include:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Your Device's Internet Protocol address (e.g. IP address)</li>
                  <li>Browser type and version</li>
                  <li>The pages of our Service that You visit</li>
                  <li>The time and date of Your visit, time spent on pages</li>
                  <li>Unique device identifiers and other diagnostic data</li>
                  <li>Mobile device type, unique ID, IP address, operating system</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">How We Use Your Information</h2>
              <p className="text-muted-foreground">
                The Company may use Personal Data for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>To provide and maintain our Service, including to monitor usage</li>
                <li>To manage Your Account and registration</li>
                <li>For the performance of a contract</li>
                <li>To contact You with updates or informative communications</li>
                <li>To provide news, special offers and general information</li>
                <li>To manage Your requests</li>
                <li>For business transfers or restructuring</li>
                <li>For data analysis, identifying usage trends, and improving our Service</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Information Sharing</h2>
              <p className="text-muted-foreground">
                We may share Your personal information in the following situations:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>With Service Providers to monitor and analyze our Service</li>
                <li>For business transfers, mergers, or acquisitions</li>
                <li>With Affiliates and business partners</li>
                <li>When You share information in public areas with other users</li>
                <li>With Your consent for any other purpose</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Data Retention</h2>
              <p className="text-muted-foreground">
                The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our legal agreements and policies.
              </p>
              <p className="text-muted-foreground">
                Usage Data is generally retained for a shorter period, except when used to strengthen security or improve functionality, or when legally obligated to retain longer.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Data Transfer</h2>
              <p className="text-muted-foreground">
                Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where data protection laws may differ.
              </p>
              <p className="text-muted-foreground">
                Your consent to this Privacy Policy represents Your agreement to that transfer. We will take steps to ensure Your data is treated securely in accordance with this policy.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Data Disclosure</h2>
              <p className="text-muted-foreground">
                We may disclose Your Personal Data:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>In business transactions like mergers or acquisitions</li>
                <li>If required by law or valid requests by public authorities</li>
                <li>To comply with legal obligations</li>
                <li>To protect the rights or property of the Company</li>
                <li>To prevent wrongdoing in connection with the Service</li>
                <li>To protect user safety or the public</li>
                <li>To protect against legal liability</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Data Security</h2>
              <p className="text-muted-foreground">
                The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Service Providers</h2>
              <p className="text-muted-foreground">
                We may use third-party Service providers to monitor and analyze the use of our Service. These third-party vendors collect, store, use, process and transfer information about Your activity on Our Service in accordance with their Privacy Policies.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Children's Privacy</h2>
              <p className="text-muted-foreground">
                Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under 13. If You are a parent/guardian and You are aware Your child has provided Us with Personal Data, please contact Us.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Links to Other Websites</h2>
              <p className="text-muted-foreground">
                Our Service may contain links to other websites not operated by Us. We strongly advise You to review the Privacy Policy of every site You visit. We have no control over and assume no responsibility for third party sites or services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Changes to This Policy</h2>
              <p className="text-muted-foreground">
                We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
              <p className="text-muted-foreground">
                You are advised to review this Privacy Policy periodically for any changes. Changes are effective when they are posted on this page.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <p><strong>Website:</strong> www.qualitypoint.net</p>
                <p><strong>Email:</strong> support@qualitypoint.net</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="border-t bg-card mt-12">
        <div className="container py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2025 Quality Point. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link to="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary">
                Privacy Policy
              </Link>
              <Link to="/terms-conditions" className="text-sm text-muted-foreground hover:text-primary">
                Terms & Conditions
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;