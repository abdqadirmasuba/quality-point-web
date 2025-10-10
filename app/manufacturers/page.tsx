import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Database, Shield, BarChart3, Users, CheckCircle, ArrowRight, Code, Zap } from "lucide-react";

const Manufacturers = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Brand Protection",
      description: "Protect your brand from counterfeit products and maintain customer trust."
    },
    {
      icon: Users,
      title: "Customer Engagement",
      description: "Direct communication channel with customers who scan your products."
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Detailed analytics on product scans, locations, and customer behavior."
    },
    {
      icon: Database,
      title: "Product Management",
      description: "Comprehensive database management for all your products and variants."
    }
  ];

  const features = [
    {
      title: "Product Registration",
      description: "Easy bulk upload and management of product information",
      items: ["Bulk CSV upload", "API integration", "Product variants", "Batch processing"]
    },
    {
      title: "Real-time Analytics",
      description: "Monitor your products and customer interactions",
      items: ["Scan statistics", "Geographic data", "Customer feedback", "Monthly reports"]
    },
    {
      title: "Customer Communication",
      description: "Direct messaging and support channels",
      items: ["In-app messaging", "Issue reporting", "Customer support", "Feedback collection"]
    },
    {
      title: "API Integration",
      description: "Seamless integration with your existing systems",
      items: ["RESTful API", "Webhook support", "Real-time sync", "Custom endpoints"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small manufacturers getting started",
      features: [
        "Up to 1,000 products",
        "Basic analytics",
        "Email support",
        "Standard API access"
      ],
      popular: false
    },
    {
      name: "Professional", 
      price: "$299",
      period: "/month",
      description: "Ideal for growing businesses with multiple product lines",
      features: [
        "Up to 10,000 products",
        "Advanced analytics",
        "Priority support", 
        "Full API access",
        "Custom webhooks",
        "Dedicated account manager"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large manufacturers with complex requirements",
      features: [
        "Unlimited products",
        "Custom integrations", 
        "24/7 phone support",
        "SLA guarantees",
        "On-premise options",
        "Custom reporting"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <Badge className="bg-secondary text-secondary-foreground">For Manufacturers</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold">
                Protect Your Brand with 
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {" "}Quality Point
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Join hundreds of manufacturers who trust Quality Point to protect their products 
                from counterfeiting and engage directly with their customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary-dark">
                  Get Started Today
                </Button>
                <Button size="lg" variant="outline">
                  Schedule Demo
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold">Why Choose Quality Point?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive brand protection and customer engagement platform
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center group hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-muted/50">
          <div className="container">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold">Platform Features</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need to manage and protect your products
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="group hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-secondary" />
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

        {/* Integration Process */}
        <section className="py-20">
          <div className="container">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold">Simple Integration Process</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Get started with Quality Point in just a few steps
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: Users, title: "Sign Up", description: "Create your manufacturer account" },
                { icon: Database, title: "Upload Products", description: "Add your product database" },
                { icon: Code, title: "Integrate API", description: "Connect with your systems" },
                { icon: Zap, title: "Go Live", description: "Start protecting your brand" }
              ].map((step, index) => (
                <Card key={index} className="text-center group hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors">
                      <step.icon className="w-8 h-8 text-secondary" />
                    </div>
                    <div className="text-2xl font-bold text-primary mb-2">{index + 1}</div>
                    <h3 className="font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-muted/50">
          <div className="container">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold">Choose Your Plan</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Flexible pricing plans to suit manufacturers of all sizes
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <Card key={index} className={`relative ${plan.popular ? 'border-primary shadow-lg scale-105' : ''}`}>
                  {plan.popular && (
                    <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <div className="flex items-baseline justify-center space-x-1">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-secondary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary-dark' : ''}`}
                      variant={plan.popular ? 'default' : 'outline'}
                    >
                      {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
          <div className="container text-center">
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Ready to Protect Your Brand?
              </h2>
              <p className="text-xl text-white/90">
                Join the fight against counterfeit products and build stronger customer relationships.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  Start Free Trial
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
                  Schedule Demo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              <p className="text-sm text-white/80">
                No credit card required • 30-day free trial • Setup support included
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Manufacturers;