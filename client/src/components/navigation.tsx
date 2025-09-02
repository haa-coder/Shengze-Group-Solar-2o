import { useState, useEffect } from "react";
import { CloudSun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link, useLocation } from "wouter";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navLinks = [
    { label: 'Home', id: 'home', href: '/' },
    { label: 'About', id: 'about' },
    { label: 'Products', id: 'products', href: '/products' },
    { label: 'Solar Energy', id: 'solar' },
    { label: 'Services', id: 'services' },
    { label: 'Calculator', id: 'calculator' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-white/95 backdrop-blur-sm'
    }`} itemScope itemType="https://schema.org/SiteNavigationElement" role="navigation" aria-label="Main navigation">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2" itemProp="brand" itemScope itemType="https://schema.org/Brand">
            <CloudSun className="h-8 w-8 text-blue-600" aria-hidden="true" />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent" itemProp="name">Shengze Group</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6" role="menubar">
            {navLinks.map((link) => {
              if (link.href) {
                return (
                  <Link
                    key={link.id}
                    href={link.href}
                    className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                    data-testid={`nav-${link.id}`}
                    role="menuitem"
                    aria-label={`Navigate to ${link.label} page`}
                    itemProp="url"
                  >
                    {link.label}
                  </Link>
                );
              }
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                  data-testid={`nav-${link.id}`}
                  role="menuitem"
                  aria-label={`Navigate to ${link.label} section`}
                  itemProp="url"
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" data-testid="mobile-menu-trigger">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-4 mt-8">
                {navLinks.map((link) => {
                  if (link.href) {
                    return (
                      <Link
                        key={link.id}
                        href={link.href}
                        className="text-left text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors"
                        data-testid={`mobile-nav-${link.id}`}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    );
                  }
                  return (
                    <button
                      key={link.id}
                      onClick={() => scrollToSection(link.id)}
                      className="text-left text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors"
                      data-testid={`mobile-nav-${link.id}`}
                    >
                      {link.label}
                    </button>
                  );
                })}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
