import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, Target, Award, Globe, Clock } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Security First",
      description: "We prioritize the security and privacy of our users' data and verification processes."
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "Building a trusted community of manufacturers and consumers working together."
    },
    {
      icon: Target,
      title: "Accuracy",
      description: "Delivering precise and reliable product verification results every time."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Continuously improving our technology and services to exceed expectations."
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
                About <span className="text-primary">Quality Point</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                We're on a mission to eliminate counterfeit products and protect consumers 
                through innovative verification technology.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Our Mission</h2>
                <p className="text-lg text-muted-foreground">
                  Quality Point was founded with a simple yet powerful mission: to create a world 
                  where consumers can trust the authenticity of every product they purchase.
                </p>
                <p className="text-muted-foreground">
                  In today's global marketplace, counterfeit products pose serious risks to consumer 
                  safety and manufacturer reputation. Our innovative verification platform bridges 
                  the gap between manufacturers and consumers, providing instant, reliable product 
                  authentication through advanced scanning technology.
                </p>
                <div className="grid grid-cols-3 gap-4 pt-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">2024</div>
                    <div className="text-sm text-muted-foreground">Founded</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary">500+</div>
                    <div className="text-sm text-muted-foreground">Partners</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">50K+</div>
                    <div className="text-sm text-muted-foreground">Users</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-white">
                  <div className="space-y-4">
                    <Globe className="w-12 h-12" />
                    <h3 className="text-2xl font-bold">Global Impact</h3>
                    <p className="text-white/90">
                      Operating across multiple countries and languages, helping 
                      manufacturers and consumers worldwide build trust through verification.
                    </p>
                    <div className="flex items-center space-x-2 pt-4">
                      <Clock className="w-5 h-5" />
                      <span className="text-sm">24/7 Verification Service</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-muted/50">
          <div className="container">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold">Our Core Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do at Quality Point
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold">Leadership Team</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Meet the experts behind Quality Point's innovative verification technology
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4"></div>
                  <h3 className="font-semibold text-lg">John Doe</h3>
                  <p className="text-primary mb-2">Chief Executive Officer</p>
                  <p className="text-sm text-muted-foreground">
                    Former technology executive with 15+ years in product authentication
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-secondary to-primary rounded-full mx-auto mb-4"></div>
                  <h3 className="font-semibold text-lg">Jane Smith</h3>
                  <p className="text-secondary mb-2">Chief Technology Officer</p>
                  <p className="text-sm text-muted-foreground">
                    Security expert specializing in blockchain and verification systems
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4"></div>
                  <h3 className="font-semibold text-lg">Mike Johnson</h3>
                  <p className="text-primary mb-2">Chief Operating Officer</p>
                  <p className="text-sm text-muted-foreground">
                    Operations leader with extensive experience in global partnerships
                  </p>
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

export default About;