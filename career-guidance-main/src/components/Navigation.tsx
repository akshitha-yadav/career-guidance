import { useState } from "react";
import { Button } from "@/components/ui/button";
import { GraduationCap, Menu, X, User } from "lucide-react";
import LoginDialog from "./LoginDialog";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Take Quiz", href: "#quiz" },
    { name: "Career Paths", href: "#courses" },
    { name: "Colleges", href: "#colleges" },
    { name: "Timeline", href: "#timeline" }
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-xl text-black">ShikshaSarthi</h1>
              <p className="text-xs text-muted-foreground">Your Educational Guide</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  const target = item.href.substring(1); // Remove #
                  document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <LoginDialog>
              <Button variant="outline" size="sm">
                <User className="w-4 h-4 mr-2" />
                Login
              </Button>
            </LoginDialog>
            <LoginDialog>
              <Button size="sm" className="btn-success">
                Get Started
              </Button>
            </LoginDialog>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
                  onClick={(e) => {
                    e.preventDefault();
                    const target = item.href.substring(1); // Remove #
                    document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
                    setIsMenuOpen(false);
                  }}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <LoginDialog>
                  <Button variant="outline" size="sm" className="justify-start">
                    <User className="w-4 h-4 mr-2" />
                    Login
                  </Button>
                </LoginDialog>
                <LoginDialog>
                  <Button size="sm" className="btn-success justify-start">
                    Get Started
                  </Button>
                </LoginDialog>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;