import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { QrCode, BarChart3, Hash, Star, Heart, History, Download, Search, Eye, MessageSquare } from "lucide-react";

const UserGuide = () => {
  const steps = [
    {
      number: "01",
      title: "Download & Install",
      description: "Download Quality Point from your app store and create your account.",
      icon: Download
    },
    {
      number: "02", 
      title: "Scan Products",
      description: "Use QR code, barcode scanning, or enter serial numbers manually.",
      icon: QrCode
    },
    {
      number: "03",
      title: "View Results",
      description: "Get instant verification results and detailed product information.",
      icon: Eye
    },
    {
      number: "04",
      title: "Manage Products",
      description: "Rate, favorite, and track your scanned products.",
      icon: Heart
    }
  ];

  const features = [
    {
      icon: QrCode,
      title: "QR Code Scanning",
      description: "Point your camera at any QR code on product packaging to instantly verify authenticity.",
      steps: [
        "Open the Quality Point app",
        "Tap the 'Scan QR Code' button",
        "Point your camera at the QR code",
        "Wait for the scanning to complete",
        "View the verification results"
      ]
    },
    {
      icon: BarChart3,
      title: "Barcode Scanning",
      description: "Scan traditional barcodes for quick product verification.",
      steps: [
        "Select 'Scan Barcode' from the main menu",
        "Align the barcode within the scanning frame",
        "Hold steady until the scan completes",
        "Review the product information",
        "Check the authenticity status"
      ]
    },
    {
      icon: Hash,
      title: "Serial Number Entry",
      description: "Manually enter product serial numbers when scanning isn't possible.",
      steps: [
        "Choose 'Enter Serial Number' option",
        "Type the serial number exactly as shown",
        "Double-check for accuracy",
        "Tap 'Verify' to check authenticity",
        "Review the verification results"
      ]
    },
    {
      icon: Star,
      title: "Product Rating",
      description: "Rate products and share your experience with other users.",
      steps: [
        "Navigate to a verified product",
        "Tap the 'Rate Product' button",
        "Select your star rating (1-5 stars)",
        "Write an optional review",
        "Submit your rating"
      ]
    },
    {
      icon: Heart,
      title: "Favorite Products",
      description: "Save products to your favorites for quick access.",
      steps: [
        "Open any verified product page",
        "Tap the heart icon to favorite",
        "Access favorites from the main menu",
        "View your saved products anytime",
        "Remove from favorites if needed"
      ]
    },
    {
      icon: History,
      title: "Scan History",
      description: "Track all your previous scans and verification results.",
      steps: [
        "Open the 'History' section",
        "Browse your scanning timeline",
        "Filter by date or product type",
        "Re-verify products if needed",
        "Export your scan data"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <Badge className="bg-primary text-primary-foreground">User Guide</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold">
                How to Use <span className="text-primary">Quality Point</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Complete guide to verifying product authenticity with our mobile app
              </p>
            </div>
          </div>
        </section>

        {/* Quick Start */}
        <section className="py-20">
          <div className="container">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold">Quick Start Guide</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Get started with Quality Point in just 4 simple steps
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <Card key={index} className="text-center group hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">{step.number}</div>
                    <h3 className="font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Guides */}
        <section className="py-20 bg-muted/50">
          <div className="container">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold">Detailed Feature Guides</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Learn how to use each feature of the Quality Point app
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="group hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                        <p className="text-muted-foreground text-sm">{feature.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <h4 className="font-medium">Step-by-step instructions:</h4>
                      <ol className="space-y-2">
                        {feature.steps.map((step, stepIndex) => (
                          <li key={stepIndex} className="flex items-start space-x-3 text-sm">
                            <div className="w-6 h-6 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-xs font-medium text-secondary">{stepIndex + 1}</span>
                            </div>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Tips & Best Practices */}
        <section className="py-20">
          <div className="container">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold">Tips & Best Practices</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Get the most out of Quality Point with these helpful tips
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Search className="w-5 h-5 text-primary" />
                    <span>Better Scanning</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Ensure good lighting when scanning</li>
                    <li>• Hold the camera steady and close enough</li>
                    <li>• Clean your camera lens for better results</li>
                    <li>• Try different angles if scan fails</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Eye className="w-5 h-5 text-secondary" />
                    <span>Understanding Results</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Green checkmark = Verified authentic</li>
                    <li>• Red X = Potentially counterfeit</li>
                    <li>• Yellow warning = Needs investigation</li>
                    <li>• Always check expiry dates</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MessageSquare className="w-5 h-5 text-primary" />
                    <span>Reporting Issues</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Report counterfeit products immediately</li>
                    <li>• Include photos and location details</li>
                    <li>• Contact manufacturer through the app</li>
                    <li>• Help protect other consumers</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default UserGuide;