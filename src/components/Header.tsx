import { motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#features" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-1.5 bg-white/80 backdrop-blur-lg shadow-md"
          : "py-2.5 bg-black/20 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <h1 
              className={`text-lg font-serif font-bold ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}
            >
              <span className="gradient-text">Sara</span> Mahal
            </h1>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-5">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`relative text-xs font-medium animated-underline ${
                  isScrolled ? "text-gray-700" : "text-white"
                } hover:text-primary transition-colors`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Button 
              variant={isScrolled ? "default" : "outline"} 
              size="sm" 
              className={`rounded-full gap-2 ${
                !isScrolled ? "bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20" : ""
              }`}
              asChild
            >
              <a href="tel:+919876543210">
                <Phone className="h-4 w-4" /> Call Us Now
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className={isScrolled ? "text-gray-800" : "text-white"}
              onClick={() => setIsOpen(true)}
            >
              <Menu />
              <span className="sr-only">Open menu</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-white z-50 flex flex-col"
        >
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-2xl font-serif font-bold">
              <span className="gradient-text">Sara</span> Mahal
            </h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
            >
              <X />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <nav className="flex flex-col p-4 gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="py-3 px-4 hover:bg-gray-100 rounded-lg text-lg"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button className="mt-4 gap-2">
              <Phone className="h-4 w-4" />
              Call: +91 9876543210
            </Button>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header; 