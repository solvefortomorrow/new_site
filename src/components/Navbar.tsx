
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-spark-blue">Spark of Tomorrow</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium transition-colors hover:text-spark-blue">
            Home
          </Link>
          <Link to="/about" className="text-sm font-medium transition-colors hover:text-spark-blue">
            About
          </Link>
          <Link to="/programs" className="text-sm font-medium transition-colors hover:text-spark-blue">
            Programs
          </Link>
          <Link to="/partners" className="text-sm font-medium transition-colors hover:text-spark-blue">
            Partners
          </Link>
          <a href="https://hcb.hackclub.com/donations/start/sparkoftomorrow" target="_blank" rel="noopener noreferrer">
            <Button className="bg-spark-blue hover:bg-spark-lightBlue">Donate</Button>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle Menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b">
          <nav className="flex flex-col space-y-4 p-4">
            <Link to="/" className="text-sm font-medium transition-colors hover:text-spark-blue" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/about" className="text-sm font-medium transition-colors hover:text-spark-blue" onClick={toggleMenu}>
              About
            </Link>
            <Link to="/programs" className="text-sm font-medium transition-colors hover:text-spark-blue" onClick={toggleMenu}>
              Programs
            </Link>
            <Link to="/partners" className="text-sm font-medium transition-colors hover:text-spark-blue" onClick={toggleMenu}>
              Partners
            </Link>
            <a 
              href="https://hcb.hackclub.com/donations/start/sparkoftomorrow" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button className="bg-spark-blue hover:bg-spark-lightBlue">Donate</Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
