import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { QrCode, BarChart3, Hash, Smartphone, Database, Code, Star, Heart, History, Download } from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      icon: QrCode,
      title: "QR Code Scanning",
      description: "Advanced QR code scanning technology that instantly verifies product authenticity",
      features: [
        "Real-time verification",
        "Product manufacturing details",
        "Expiry date information",
        "Manufacturer contact details",
        "Product ratings and reviews"
      ],
      popular: true
    },
    {
      icon: BarChart3,
      title: "Barcode Verification",
      description: "Universal barcode scanning compatible with all standard barcode formats",
      features: [
        "Universal compatibility",
        "Fast processing speed",
        "Offline capability",
        "Batch scanning support",
        "Historical tracking"
      ]
    },
    {
      icon: Hash,
      title: "Serial Number Check",
      description: "Manual serial number verification for products without scannable codes",
      features: [
        "Manual entry option",
        "Batch verification",
        "Product warranty status",
        "Registration confirmation",
        "Transfer ownership"
      ]
    }
  ];

  const appFeatures = [
    {
      icon: Smartphone,
      title: "Mobile App Features",
      description: "Comprehensive mobile application with advanced features for consumers",
      features: [
        "Cross-platform support (iOS & Android)",
        "Intuitive user interface",
        "Offline mode capability",
        "Multi-language support",
        "Dark/Light theme options"
      ]
    },
    {
      icon: Star,
      title: "User Features",
      description: "Enhanced user experience features for better product management",
      features: [
        "Product rating system",
        "Favorite products list",
        "Scan history tracking",
        "Product comparison",
        "Review and feedback system"
      ]
    },
    {
      icon: History,
      title: "History & Analytics",
      description: "Detailed tracking and analytics for user scanning behavior",
      features: [
        "Complete scan history",
        "Product favorites",
        "Usage statistics",
        "Monthly reports",
        "Export capabilities"
      ]
    }
  ];

  const manufacturerServices = [
    {
      icon: Database,
      title: "Manufacturer Portal",
      description: "Comprehensive portal for manufacturers to manage their product database",
      features: [
        "Product registration system",
        "Bulk product upload",
        "Analytics dashboard",
        "Customer feedback management",
        "Report generation"
      ]
    },
    {
      icon: Code,
      title: "API Integration",
      description: "Robust API for seamless integration with existing manufacturer systems",
      features: [
        "RESTful API endpoints",
        "Real-time synchronization",
        "Webhook notifications",
        "Custom integration support",
        "Comprehensive documentation"
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
              <h1 className="text-4xl lg:text-5xl font-bold">
                Our <span className="text-primary">Services</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Comprehensive product verification solutions for consumers and manufacturers
              </p>
            </div>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-20">
          <div className="container">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold">Core Verification Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Multiple ways to verify product authenticity with advanced technology
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {mainServices.map((service, index) => (
                <Card key={index} className="relative group hover:shadow-xl transition-shadow">
                  {service.popular && (
                    <Badge className="absolute -top-2 left-4 bg-secondary text-secondary-foreground">
                      Most Popular
                    </Badge>
                  )}
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
          </div>
        </section>

        {/* App Features */}
        <section className="py-20 bg-muted/50">
          <div className="container">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold">Mobile App Features</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Enhanced features for the best user experience
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {appFeatures.map((feature, index) => (
                <Card key={index} className="group hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                      <feature.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.features.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center space-x-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Manufacturer Services */}
        <section className="py-20">
          <div className="container">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold">For Manufacturers</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Powerful tools and integrations for product management
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {manufacturerServices.map((service, index) => (
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
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
          <div className="container text-center">
            <div className="max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
              <p className="text-xl text-white/90">
                Download the Quality Point app and start verifying products today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  <Download className="w-5 h-5 mr-2" />
                  Download App
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;