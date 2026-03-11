import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "motion/react";
import { Link, useNavigate } from "react-router";
import logo from "../../assets/logo.png";

export function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Work", path: "/work" },
    { label: "Services", path: "/services" },
    { label: "Contact", path: "/contact" }
  ];

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          scrolled ? "top-5" : "top-0"
        }`}
      >
        <div className={`mx-auto px-6 ${scrolled ? "px-4" : ""} transition-all duration-500`}>
          <div 
            className={`rounded-full transition-all duration-500 ${
              scrolled
                ? "bg-background/70 backdrop-blur-xl border border-border shadow-lg px-6 py-3"
                : "bg-transparent px-6 py-4"
            }`}
          >
            <div className="flex items-center justify-between">
              {/* Left: Logo */}

              {/* Center Navigation */}
              <nav className="hidden md:flex items-center gap-8">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="text-sm text-foreground/70 hover:text-foreground transition-colors duration-200 relative group"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-600 to-blue-600 group-hover:w-full transition-all duration-300" />
                  </Link>
                ))}
              </nav>

              {/* Right: Dark Mode Toggle */}
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setDarkMode(!darkMode)}
                  className="rounded-full hover:bg-accent transition-all duration-300"
                >
                  <motion.div
                    initial={false}
                    animate={{ rotate: darkMode ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {darkMode ? (
                      <Sun className="h-4 w-4 text-foreground" />
                    ) : (
                      <Moon className="h-4 w-4 text-foreground" />
                    )}
                  </motion.div>
                </Button>

                {/* Mobile Menu Toggle */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden rounded-full hover:bg-accent"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  {mobileMenuOpen ? (
                    <X className="h-4 w-4" />
                  ) : (
                    <Menu className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[73px] z-40 md:hidden bg-background/95 backdrop-blur-lg border-b border-border"
          >
            <nav className="flex flex-col p-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-left py-2 text-foreground hover:text-violet-600 transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}