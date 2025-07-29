import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { QrCode, BarChart3, Hash, Smartphone, Database, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      icon: QrCode,
      title: "QR Code Scanning",
      description: "Instantly scan QR codes on product packaging to verify authenticity and access detailed product information.",
      features: ["Real-time verification", "Product details", "Manufacturing info"]
    },
    {
      icon: BarChart3,
      title: "Barcode Verification",
      description: "Scan traditional barcodes to check product authenticity against our comprehensive database.",
      features: ["Universal compatibility", "Fast processing", "Accurate results"]
    },
    {
      icon: Hash,
      title: "Serial Number Check",
      description: "Enter product serial numbers manually to verify authenticity when scanning isn't possible.",
      features: ["Manual entry option", "Batch verification", "Historical tracking"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Integration",
      description: "Our user-friendly mobile app provides seamless scanning and verification experience.",
      features: ["Cross-platform support", "Offline mode", "User-friendly interface"]
    },
    {
      icon: Database,
      title: "Manufacturer Portal",
      description: "Comprehensive portal for manufacturers to register products and manage their verification database.",
      features: ["Product registration", "Analytics dashboard", "API integration"]
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive product verification solutions for consumers and manufacturers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/services">
            <Button size="lg" className="group">
              Explore All Services
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;