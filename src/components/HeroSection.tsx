import { Button } from "@/components/ui/button";
import { Download, Shield, Scan, CheckCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div>
      
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                Verify Product 
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {" "}Authenticity
                </span>
                <br />Instantly
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Scan QR codes, barcodes, or enter serial numbers to verify if products 
                are genuine. Protect yourself from counterfeit goods with Quality Point.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => window.open('https://play.google.com/store/apps/details?id=com.qualitypoint.qualitypoint&hl=en', '_blank')}
              >
                <Download className="w-5 h-5 mr-2" />
                Download App
              </Button>
              <Button size="lg" variant="outline">
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Secure Verification</span>
              </div>
              <div className="flex items-center space-x-2">
                <Scan className="w-5 h-5 text-secondary" />
                <span className="text-sm font-medium">Instant Scanning</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Real-time Results</span>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center items-center">
            <div className="relative">
              <img 
                src="/src/assets/phone-mockup.jpg" 
                alt="Quality Point Mobile App" 
                className="w-64 h-auto rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-secondary/20 rounded-3xl"></div>
            </div>
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-secondary/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-primary/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;