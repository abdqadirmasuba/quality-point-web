import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Rise of Counterfeit Products: How to Protect Yourself",
      excerpt: "Learn about the growing threat of counterfeit goods and how Quality Point helps consumers verify product authenticity.",
      date: "2024-01-15",
      author: "Quality Point Team",
      category: "Consumer Protection",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=200&fit=crop"
    },
    {
      id: 2,
      title: "QR Codes vs Barcodes: Which is Better for Product Verification?",
      excerpt: "A comprehensive comparison of QR codes and traditional barcodes for product authentication.",
      date: "2024-01-10",
      author: "Tech Team",
      category: "Technology",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1516383740770-fbcc5ccbece0?w=400&h=200&fit=crop"
    },
    {
      id: 3,
      title: "Manufacturers Guide: Integrating with Quality Point",
      excerpt: "Step-by-step guide for manufacturers looking to integrate their products with our verification system.",
      date: "2024-01-05",
      author: "Integration Team",
      category: "Guides",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1565728744382-61accd4aa148?w=400&h=200&fit=crop"
    },
    {
      id: 4,
      title: "The Future of Product Authentication",
      excerpt: "Exploring emerging technologies and trends in product verification and authentication.",
      date: "2023-12-28",
      author: "Quality Point Team",
      category: "Industry Insights",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=200&fit=crop"
    },
    {
      id: 5,
      title: "Case Study: Reducing Counterfeit Electronics",
      excerpt: "How one electronics manufacturer reduced counterfeit products by 85% using Quality Point.",
      date: "2023-12-20",
      author: "Case Studies Team",
      category: "Case Studies",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=200&fit=crop"
    },
    {
      id: 6,
      title: "Mobile App Security: Protecting Your Verification Data",
      excerpt: "Understanding the security measures in place to protect your product verification data.",
      date: "2023-12-15",
      author: "Security Team",
      category: "Security",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=200&fit=crop"
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
              <Badge className="bg-primary text-primary-foreground">Blog</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold">
                Quality Point <span className="text-primary">Insights</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Stay updated with the latest in product authentication, security, and industry insights
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-20">
          <div className="container">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Featured Article</h2>
              <Card className="group hover:shadow-lg transition-shadow overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-auto">
                    <img 
                      src={blogPosts[0].image} 
                      alt={blogPosts[0].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="space-y-4">
                      <Badge className="bg-primary text-primary-foreground w-fit">
                        {blogPosts[0].category}
                      </Badge>
                      <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                        {blogPosts[0].title}
                      </h3>
                      <p className="text-muted-foreground">
                        {blogPosts[0].excerpt}
                      </p>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(blogPosts[0].date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{blogPosts[0].author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{blogPosts[0].readTime}</span>
                        </div>
                      </div>
                      <Button className="w-fit group">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* All Posts */}
        <section className="py-20 bg-muted/50">
          <div className="container">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Latest Articles</h2>
              <p className="text-lg text-muted-foreground">
                Discover insights, guides, and updates from the Quality Point team
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post) => (
                <Card key={post.id} className="group hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="relative h-48">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                      {post.category}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-3 h-3" />
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-3 h-3" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="w-full group">
                        Read Article
                        <ArrowRight className="w-3 h-3 ml-2 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold">Stay Updated</h2>
              <p className="text-lg text-muted-foreground">
                Subscribe to our newsletter for the latest insights on product authentication and security
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-input rounded-md bg-background"
                />
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Subscribe
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

export default Blog;