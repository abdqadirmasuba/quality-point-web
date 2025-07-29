import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, Database, Key, Webhook, Shield, BookOpen } from "lucide-react";

const DeveloperGuide = () => {
  const endpoints = [
    {
      method: "POST",
      endpoint: "/api/v1/products/register",
      description: "Register a new product in the system",
      example: `{
  "serial_number": "QP123456789",
  "product_name": "Premium Widget",
  "manufacturer_id": "mfg_123",
  "manufacturing_date": "2024-01-15",
  "expiry_date": "2026-01-15"
}`
    },
    {
      method: "GET",
      endpoint: "/api/v1/products/verify/{serial}",
      description: "Verify product authenticity by serial number",
      example: `{
  "status": "verified",
  "product": {
    "name": "Premium Widget",
    "manufacturer": "ACME Corp",
    "manufacturing_date": "2024-01-15",
    "expiry_date": "2026-01-15",
    "is_authentic": true
  }
}`
    },
    {
      method: "POST",
      endpoint: "/api/v1/products/batch-register",
      description: "Register multiple products in bulk",
      example: `{
  "products": [
    {
      "serial_number": "QP123456789",
      "product_name": "Premium Widget",
      "manufacturing_date": "2024-01-15"
    }
  ]
}`
    }
  ];

  const integrationSteps = [
    {
      title: "Get API Credentials",
      description: "Register for a manufacturer account and obtain your API key and secret.",
      icon: Key
    },
    {
      title: "Set Up Webhooks",
      description: "Configure webhook endpoints to receive real-time notifications.",
      icon: Webhook
    },
    {
      title: "Test Integration",
      description: "Use our sandbox environment to test your integration before going live.",
      icon: Code
    },
    {
      title: "Go Live",
      description: "Deploy to production and start registering your products.",
      icon: Database
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
              <Badge className="bg-secondary text-secondary-foreground">Developer Guide</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold">
                API <span className="text-primary">Documentation</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Integrate Quality Point verification into your systems with our comprehensive API
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Get API Access
                </Button>
                <Button size="lg" variant="outline">
                  View Examples
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Steps */}
        <section className="py-20">
          <div className="container">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold">Integration Process</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Follow these steps to integrate Quality Point API into your system
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {integrationSteps.map((step, index) => (
                <Card key={index} className="text-center group hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <step.icon className="w-8 h-8 text-primary" />
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

        {/* API Endpoints */}
        <section className="py-20 bg-muted/50">
          <div className="container">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold">API Endpoints</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Core endpoints for product registration and verification
              </p>
            </div>
            <div className="space-y-6 max-w-4xl mx-auto">
              {endpoints.map((endpoint, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <Badge 
                        variant={endpoint.method === 'GET' ? 'secondary' : 'default'}
                        className={endpoint.method === 'GET' ? 'bg-secondary' : 'bg-primary'}
                      >
                        {endpoint.method}
                      </Badge>
                      <CardTitle className="font-mono text-lg">{endpoint.endpoint}</CardTitle>
                    </div>
                    <p className="text-muted-foreground">{endpoint.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <h4 className="font-medium">Example {endpoint.method === 'GET' ? 'Response' : 'Request'}:</h4>
                      <pre className="bg-background border rounded-lg p-4 text-sm overflow-x-auto">
                        <code>{endpoint.example}</code>
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Authentication */}
        <section className="py-20">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Authentication</h2>
                <p className="text-lg text-muted-foreground">
                  All API requests require authentication using API keys and Bearer tokens.
                </p>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Shield className="w-5 h-5 text-primary" />
                      <span>API Key Authentication</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-muted rounded-lg p-4 text-sm overflow-x-auto">
                      <code>{`curl -X POST \\
  https://api.qualitypoint.net/v1/products/verify \\
  -H "Authorization: Bearer YOUR_API_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{"serial_number": "QP123456789"}'`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Webhook Integration</h2>
                <p className="text-lg text-muted-foreground">
                  Receive real-time notifications when products are scanned or reported.
                </p>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Webhook className="w-5 h-5 text-secondary" />
                      <span>Webhook Payload</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-muted rounded-lg p-4 text-sm overflow-x-auto">
                      <code>{`{
  "event": "product.scanned",
  "timestamp": "2024-01-15T10:30:00Z",
  "data": {
    "serial_number": "QP123456789",
    "user_id": "user_123",
    "location": "Kampala, Uganda",
    "result": "verified"
  }
}`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* SDKs and Libraries */}
        <section className="py-20 bg-muted/50">
          <div className="container">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold">SDKs & Libraries</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Use our official SDKs to integrate Quality Point faster
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Node.js SDK</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-background border rounded-lg p-3 text-sm mb-4">
                    <code>npm install @qualitypoint/node-sdk</code>
                  </pre>
                  <Button variant="outline" className="w-full">View Documentation</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Python SDK</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-background border rounded-lg p-3 text-sm mb-4">
                    <code>pip install qualitypoint-python</code>
                  </pre>
                  <Button variant="outline" className="w-full">View Documentation</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>PHP SDK</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-background border rounded-lg p-3 text-sm mb-4">
                    <code>composer require qualitypoint/php-sdk</code>
                  </pre>
                  <Button variant="outline" className="w-full">View Documentation</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Support */}
        <section className="py-20">
          <div className="container">
            <div className="text-center space-y-6">
              <h2 className="text-3xl font-bold">Need Help?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our developer support team is here to help you integrate successfully
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary-dark">
                  Contact Developer Support
                </Button>
                <Button size="lg" variant="outline">
                  Join Developer Community
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

export default DeveloperGuide;