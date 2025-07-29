import { SidebarProvider } from "@/components/ui/sidebar";
import DevSidebar from "@/components/DevSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, Database, Key, Webhook, Shield, BookOpen, ArrowRight, ExternalLink } from "lucide-react";

const DeveloperGuideNew = () => {
  const quickStartSteps = [
    {
      title: "Get API Credentials",
      description: "Register for a manufacturer account and obtain your API key and secret.",
      icon: Key,
      action: "Get Started"
    },
    {
      title: "Set Up Authentication",
      description: "Configure Bearer token authentication for secure API access.",
      icon: Shield,
      action: "Learn More"
    },
    {
      title: "Make Your First Request",
      description: "Test your integration with our product verification endpoint.",
      icon: Code,
      action: "Try It"
    },
    {
      title: "Set Up Webhooks",
      description: "Configure webhook endpoints to receive real-time notifications.",
      icon: Webhook,
      action: "Configure"
    }
  ];

  const popularEndpoints = [
    {
      method: "POST",
      endpoint: "/api/v1/products/register",
      description: "Register a new product in the system"
    },
    {
      method: "GET",
      endpoint: "/api/v1/products/verify/{serial}",
      description: "Verify product authenticity by serial number"
    },
    {
      method: "POST",
      endpoint: "/api/v1/products/batch-register",
      description: "Register multiple products in bulk"
    }
  ];

  const languages = [
    { name: "Node.js", icon: "⚡", description: "Official SDK with full TypeScript support" },
    { name: "Python", icon: "🐍", description: "Comprehensive library for Python developers" },
    { name: "PHP", icon: "🐘", description: "Easy integration for PHP applications" },
    { name: "Java", icon: "☕", description: "Enterprise-ready Java SDK" },
    { name: "C#", icon: "#️⃣", description: ".NET compatible library" }
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <DevSidebar />
        <main className="flex-1 p-8 overflow-auto">
          {/* Header */}
          <div className="mb-8">
            <Badge className="bg-primary text-primary-foreground mb-4">Developer Documentation</Badge>
            <h1 className="text-4xl font-bold mb-4">
              Quality Point <span className="text-primary">API</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Integrate product verification into your applications with our comprehensive API. 
              Protect your customers from counterfeit products with real-time authentication.
            </p>
          </div>

          {/* Quick Start */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Quick Start</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {quickStartSteps.map((step, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <step.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-primary font-medium">Step {index + 1}</div>
                        <CardTitle className="text-lg">{step.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{step.description}</p>
                    <Button size="sm" variant="outline" className="group">
                      {step.action}
                      <ArrowRight className="w-3 h-3 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Popular Endpoints */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Popular API Endpoints</h2>
            <div className="space-y-4">
              {popularEndpoints.map((endpoint, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <Badge 
                          variant={endpoint.method === 'GET' ? 'secondary' : 'default'}
                          className={endpoint.method === 'GET' ? 'bg-secondary' : 'bg-primary'}
                        >
                          {endpoint.method}
                        </Badge>
                        <div>
                          <code className="text-sm font-mono">{endpoint.endpoint}</code>
                          <p className="text-sm text-muted-foreground mt-1">{endpoint.description}</p>
                        </div>
                      </div>
                      <Button size="sm" variant="ghost">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Language Support */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Language Support</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {languages.map((lang, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">{lang.icon}</div>
                      <CardTitle className="text-lg">{lang.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{lang.description}</p>
                    <Button size="sm" variant="outline" className="w-full group">
                      View Documentation
                      <ArrowRight className="w-3 h-3 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Example Code */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Example Integration</h2>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Code className="w-5 h-5 text-primary" />
                  <span>Verify Product - Node.js</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted rounded-lg p-4 text-sm overflow-x-auto">
                  <code>{`const QualityPoint = require('@qualitypoint/node-sdk');

const client = new QualityPoint({
  apiKey: 'your-api-key',
  environment: 'production' // or 'sandbox'
});

// Verify a product
async function verifyProduct(serialNumber) {
  try {
    const result = await client.products.verify(serialNumber);
    
    if (result.is_authentic) {
      console.log('Product is authentic!');
      console.log('Manufacturer:', result.manufacturer);
      console.log('Product:', result.product_name);
    } else {
      console.log('Warning: Product authenticity could not be verified');
    }
    
    return result;
  } catch (error) {
    console.error('Verification failed:', error.message);
  }
}

verifyProduct('QP123456789');`}</code>
                </pre>
              </CardContent>
            </Card>
          </section>

          {/* Support Section */}
          <section>
            <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Need Help Getting Started?</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Our developer support team is here to help you integrate successfully. 
                  Get dedicated support, join our community, or schedule a consultation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Contact Developer Support
                  </Button>
                  <Button size="lg" variant="outline">
                    Join Developer Community
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default DeveloperGuideNew;