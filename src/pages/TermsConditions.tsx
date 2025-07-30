import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Logo from "@/assets/logo.png";

const TermsConditions = () => {
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
            <h1 className="text-4xl font-bold">Terms and Conditions</h1>
            <p className="text-lg text-muted-foreground">
              Last updated: December 2024
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using the Quality Point mobile application and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Service Description</h2>
              <p className="text-muted-foreground">
                Quality Point provides a product verification service that allows users to scan QR codes, barcodes, or enter serial numbers to verify product authenticity. Our service connects consumers with manufacturer databases to provide real-time verification results.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">User Accounts</h2>
              <div className="space-y-3">
                <h3 className="text-xl font-medium">Account Creation</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>You must provide accurate and complete information when creating an account</li>
                  <li>You are responsible for maintaining the security of your account credentials</li>
                  <li>You must be at least 13 years old to use our services</li>
                  <li>One person may not maintain more than one account</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-medium">Account Responsibilities</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>You are responsible for all activities under your account</li>
                  <li>Notify us immediately of any unauthorized use</li>
                  <li>Keep your contact information up to date</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Acceptable Use</h2>
              <p className="text-muted-foreground">You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Use the service for any unlawful purpose or activity</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt the service or servers</li>
                <li>Upload malicious code or conduct security attacks</li>
                <li>Impersonate any person or entity</li>
                <li>Collect or harvest information from other users</li>
                <li>Use automated tools to access the service</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Verification Results</h2>
              <div className="space-y-3">
                <h3 className="text-xl font-medium">Accuracy Disclaimer</h3>
                <p className="text-muted-foreground">
                  While we strive to provide accurate verification results, Quality Point does not guarantee 100% accuracy. Verification results are based on information provided by manufacturers and should be used as a guide only.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-medium">Liability Limitations</h3>
                <p className="text-muted-foreground">
                  Users should not rely solely on our verification service for critical decisions. We recommend verifying products through multiple channels when in doubt.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Intellectual Property</h2>
              <p className="text-muted-foreground">
                The Quality Point service, including all content, features, and functionality, is owned by Quality Point and is protected by international copyright, trademark, and other intellectual property laws.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>You may not copy, modify, or distribute our content</li>
                <li>Our trademarks and logos may not be used without permission</li>
                <li>User-generated content remains your property but grants us usage rights</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Privacy</h2>
              <p className="text-muted-foreground">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service, to understand our practices.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Termination</h2>
              <div className="space-y-3">
                <h3 className="text-xl font-medium">By You</h3>
                <p className="text-muted-foreground">
                  You may terminate your account at any time by contacting us or using the account deletion feature in the app.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-medium">By Us</h3>
                <p className="text-muted-foreground">
                  We may terminate or suspend your account immediately if you violate these terms or engage in prohibited activities.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Disclaimers</h2>
              <p className="text-muted-foreground">
                THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND. WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Limitation of Liability</h2>
              <p className="text-muted-foreground">
                IN NO EVENT SHALL QUALITY POINT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF YOUR USE OF THE SERVICE.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Governing Law</h2>
              <p className="text-muted-foreground">
                These terms shall be governed by and construed in accordance with the laws of Uganda, without regard to its conflict of law provisions.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Changes to Terms</h2>
              <p className="text-muted-foreground">
                We reserve the right to modify these terms at any time. We will notify users of any changes by posting the new terms in the app and updating the "Last updated" date.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Contact Information</h2>
              <p className="text-muted-foreground">
                If you have any questions about these Terms and Conditions, please contact us:
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

export default TermsConditions;