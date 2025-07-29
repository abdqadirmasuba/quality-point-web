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
              <Button size="lg" className="bg-primary hover:bg-primary-dark">
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

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary to-secondary p-8">
              <div className="bg-background rounded-xl p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Scan className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Product Scanner</h3>
                    <p className="text-sm text-muted-foreground">Scan & Verify Instantly</p>
                  </div>
                </div>
                
                <div className="bg-muted rounded-lg p-4 space-y-3">
                  <div className="h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                    <div className="w-16 h-16 border-2 border-primary rounded-lg flex items-center justify-center">
                      <div className="w-8 h-8 bg-primary rounded"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Product Status</span>
                      <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full">
                        ✓ Verified
                      </span>
                    </div>
                    <div className="h-2 bg-secondary/20 rounded-full overflow-hidden">
                      <div className="h-full w-full bg-secondary rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;