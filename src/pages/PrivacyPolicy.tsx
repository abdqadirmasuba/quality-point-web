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
              Last updated: December 2024
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Introduction</h2>
              <p className="text-muted-foreground">
                Quality Point ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Information We Collect</h2>
              <div className="space-y-3">
                <h3 className="text-xl font-medium">Personal Information</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Email address for account creation and communication</li>
                  <li>Device information and unique device identifiers</li>
                  <li>Location data when you grant permission</li>
                  <li>Product scanning history and preferences</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-medium">Usage Information</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>App usage patterns and feature interactions</li>
                  <li>Crash reports and performance data</li>
                  <li>Product verification requests and results</li>
                  <li>User ratings and reviews</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Provide and maintain our verification services</li>
                <li>Improve app functionality and user experience</li>
                <li>Send important updates and security notifications</li>
                <li>Analyze usage patterns to enhance our services</li>
                <li>Prevent fraud and maintain system security</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Information Sharing</h2>
              <p className="text-muted-foreground">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>With manufacturers when you report counterfeit products</li>
                <li>With service providers who assist in app functionality</li>
                <li>When required by law or legal process</li>
                <li>To protect our rights and prevent fraud</li>
                <li>With your explicit consent</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Data Security</h2>
              <p className="text-muted-foreground">
                We implement industry-standard security measures to protect your information, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security audits and updates</li>
                <li>Access controls and authentication measures</li>
                <li>Secure data centers and infrastructure</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Your Rights</h2>
              <p className="text-muted-foreground">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your information</li>
                <li>Data portability where applicable</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Data Retention</h2>
              <p className="text-muted-foreground">
                We retain your information only as long as necessary to provide our services and comply with legal obligations. Scan history is retained for 2 years, while account information is kept until deletion is requested.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Children's Privacy</h2>
              <p className="text-muted-foreground">
                Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Changes to This Policy</h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy in the app and updating the "Last updated" date.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <p><strong>Email:</strong> support@qualitypoint.net</p>
                <p><strong>Phone:</strong> +256 706 851883</p>
                <p><strong>Address:</strong> 27 University Plaza, Bombo RD, Kampala (U)</p>
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
              © 2024 Quality Point. All rights reserved.
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