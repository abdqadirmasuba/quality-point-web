import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Target, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Protecting Consumers from 
                <span className="text-primary"> Counterfeit Products</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Quality Point is revolutionizing product verification by providing 
                a secure, fast, and reliable way to authenticate products using 
                QR codes, barcodes, and serial numbers.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Shield className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Secure Verification</h3>
                  <p className="text-muted-foreground">
                    Our advanced verification system ensures only authentic products 
                    are validated through our secure database.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Users className="w-6 h-6 text-secondary mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Manufacturer Partnership</h3>
                  <p className="text-muted-foreground">
                    We work directly with manufacturers to maintain up-to-date 
                    product databases and ensure accuracy.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Target className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Consumer Protection</h3>
                  <p className="text-muted-foreground">
                    Empowering consumers with the tools to verify product 
                    authenticity and make informed purchasing decisions.
                  </p>
                </div>
              </div>
            </div>

            <Link to="/about">
              <Button variant="outline" className="group">
                Learn More About Us
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">10K+</div>
                <p className="text-sm text-muted-foreground">Products Verified</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20 mt-8">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-secondary mb-2">500+</div>
                <p className="text-sm text-muted-foreground">Partner Manufacturers</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-secondary mb-2">50K+</div>
                <p className="text-sm text-muted-foreground">Active Users</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 mt-8">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                <p className="text-sm text-muted-foreground">Accuracy Rate</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;