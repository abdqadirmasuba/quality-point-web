import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { 
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar
} from "@/components/ui/sidebar";
import { 
  Home, 
  FileText, 
  Code, 
  Database, 
  Key, 
  Webhook, 
  TestTube, 
  Phone, 
  MessageSquare,
  BookOpen,
  Settings,
  ChevronDown,
  ChevronRight
} from "lucide-react";
import Logo from "@/assets/logo.png";

const DevSidebar = () => {
  const sidebar = useSidebar();
  const location = useLocation();
  const [expandedSections, setExpandedSections] = useState(["getting-started", "integration"]);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const menuItems = [
    {
      title: "Overview",
      icon: Home,
      href: "/developer-guide",
      exact: true
    },
    {
      title: "Getting Started",
      icon: BookOpen,
      section: "getting-started",
      items: [
        { title: "Quick Start", href: "/developer-guide/quick-start" },
        { title: "Authentication", href: "/developer-guide/authentication" },
        { title: "API Keys", href: "/developer-guide/api-keys" }
      ]
    },
    {
      title: "Integration",
      icon: Code,
      section: "integration",
      items: [
        { title: "REST API", href: "/developer-guide/rest-api" },
        { title: "Webhooks", href: "/developer-guide/webhooks" },
        { title: "SDKs", href: "/developer-guide/sdks" }
      ]
    },
    {
      title: "Languages",
      icon: FileText,
      section: "languages",
      items: [
        { title: "Node.js", href: "/developer-guide/nodejs" },
        { title: "Python", href: "/developer-guide/python" },
        { title: "PHP", href: "/developer-guide/php" },
        { title: "Java", href: "/developer-guide/java" },
        { title: "C#", href: "/developer-guide/csharp" }
      ]
    },
    {
      title: "Testing",
      icon: TestTube,
      section: "testing",
      items: [
        { title: "Sandbox", href: "/developer-guide/sandbox" },
        { title: "Test Values", href: "/developer-guide/test-values" },
        { title: "Postman Collection", href: "/developer-guide/postman" }
      ]
    },
    {
      title: "Support",
      icon: MessageSquare,
      section: "support",
      items: [
        { title: "FAQ", href: "/developer-guide/faq" },
        { title: "Contact Support", href: "/developer-guide/support" },
        { title: "Community", href: "/developer-guide/community" }
      ]
    }
  ];

  const isActive = (href: string, exact = false) => {
    if (exact) {
      return location.pathname === href;
    }
    return location.pathname.startsWith(href);
  };

  return (
    <Sidebar className={isCollapsed ? "w-14" : "w-64"}>
      <div className="p-4 border-b">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            {!isCollapsed && (
              <>
                <img 
                  src={Logo}
                  alt="Quality Point Logo" 
                  className="h-6 w-auto"
                />
              </>
            )}
          </Link>
          <SidebarTrigger onClick={() => setIsCollapsed(!isCollapsed)} />
        </div>
        {!isCollapsed && (
          <div className="mt-2 text-sm text-muted-foreground">
            Developer Documentation
          </div>
        )}
      </div>

      <SidebarContent className="p-4">
        <SidebarMenu className="space-y-2">
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              {item.section ? (
                <div>
                  <SidebarMenuButton 
                    onClick={() => toggleSection(item.section)}
                    className={`w-full justify-between ${!isCollapsed ? '' : 'justify-center'}`}
                  >
                    <div className="flex items-center space-x-2">
                      <item.icon className="h-4 w-4" />
                      {!isCollapsed && <span>{item.title}</span>}
                    </div>
                    {!isCollapsed && (
                      expandedSections.includes(item.section) ? 
                        <ChevronDown className="h-4 w-4" /> : 
                        <ChevronRight className="h-4 w-4" />
                    )}
                  </SidebarMenuButton>
                  {!isCollapsed && expandedSections.includes(item.section) && (
                    <div className="ml-6 mt-2 space-y-1">
                      {item.items?.map((subItem) => (
                        <SidebarMenuButton 
                          key={subItem.title} 
                          asChild
                          className={isActive(subItem.href) ? "bg-primary/10 text-primary" : ""}
                        >
                          <Link to={subItem.href} className="text-sm">
                            {subItem.title}
                          </Link>
                        </SidebarMenuButton>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <SidebarMenuButton 
                  asChild
                  className={isActive(item.href, item.exact) ? "bg-primary/10 text-primary" : ""}
                >
                  <Link to={item.href} className="flex items-center space-x-2">
                    <item.icon className="h-4 w-4" />
                    {!isCollapsed && <span>{item.title}</span>}
                  </Link>
                </SidebarMenuButton>
              )}
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      <div className="mt-auto p-4 border-t">
        <div className="flex items-center justify-between">
          <ThemeToggle />
          {!isCollapsed && (
            <Button size="sm" variant="outline">
              <Link to="/contact" className="text-xs">
                Need Help?
              </Link>
            </Button>
          )}
        </div>
      </div>
    </Sidebar>
  );
};

export default DevSidebar;