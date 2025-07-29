import { useState } from "react";
import { ArrowLeft, Trash2, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const DeleteAccount = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate email sending
    setTimeout(() => {
      setSubmitted(true);
      setIsSubmitting(false);
      toast({
        title: "Verification Email Sent",
        description: "Please check your email to confirm account deletion.",
      });
    }, 2000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        {/* Simple Header */}
        <header className="border-b bg-card">
          <div className="container flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/d5a43fb2-5d9a-43b6-9210-d53c82a70a81.png" 
                alt="Quality Point Logo" 
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold text-primary">Quality Point</span>
            </Link>
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            </Link>
          </div>
        </header>

        <main className="container max-w-2xl py-20">
          <div className="text-center space-y-6">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
              <AlertTriangle className="w-8 h-8 text-secondary" />
            </div>
            <div className="space-y-4">
              <h1 className="text-3xl font-bold">Verification Email Sent</h1>
              <p className="text-lg text-muted-foreground">
                We've sent a verification email to <strong>{email}</strong>
              </p>
              <p className="text-muted-foreground">
                Please check your email and click the confirmation link to proceed with account deletion. 
                If you don't see the email, please check your spam folder.
              </p>
            </div>
            <div className="pt-6">
              <Link to="/">
                <Button>Return to Home</Button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Simple Header */}
      <header className="border-b bg-card">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/d5a43fb2-5d9a-43b6-9210-d53c82a70a81.png" 
              alt="Quality Point Logo" 
              className="h-8 w-auto"
            />
            <span className="text-xl font-bold text-primary">Quality Point</span>
          </Link>
          <Link to="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </Link>
        </div>
      </header>

      <main className="container max-w-2xl py-12">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto">
              <Trash2 className="w-8 h-8 text-destructive" />
            </div>
            <h1 className="text-3xl font-bold">Delete Your Account</h1>
            <p className="text-lg text-muted-foreground">
              We're sorry to see you go. Please enter your email to request account deletion.
            </p>
          </div>

          <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              <strong>Warning:</strong> Account deletion is permanent and cannot be undone. 
              All your data including scan history, favorites, and ratings will be permanently removed.
            </AlertDescription>
          </Alert>

          <Card>
            <CardHeader>
              <CardTitle>Request Account Deletion</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your email address"
                    className="w-full"
                  />
                  <p className="text-xs text-muted-foreground mt-2">
                    We'll send a verification email to confirm your identity before proceeding with deletion.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">What will be deleted:</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Your account profile and settings</li>
                    <li>• Complete scan history and verification records</li>
                    <li>• Saved favorite products</li>
                    <li>• Product ratings and reviews</li>
                    <li>• All personal preferences and data</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Before you delete your account:</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Download any data you want to keep</li>
                    <li>• Consider contacting support if you're having issues</li>
                    <li>• This action cannot be reversed</li>
                  </ul>
                </div>

                <Button 
                  type="submit" 
                  variant="destructive"
                  className="w-full" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>Processing...</>
                  ) : (
                    <>
                      <Trash2 className="w-4 h-4 mr-2" />
                      Send Deletion Request
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Need help? <Link to="/contact" className="text-primary hover:underline">Contact our support team</Link>
            </p>
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

export default DeleteAccount;