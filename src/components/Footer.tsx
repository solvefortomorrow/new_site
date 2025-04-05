
import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Mail } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-spark-blue mb-4">Spark of Tomorrow</h3>
            <p className="text-muted-foreground">
              Creating solutions to spark curiosity and love of learning in students everywhere.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-spark-blue transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-spark-blue transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-muted-foreground hover:text-spark-blue transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-muted-foreground hover:text-spark-blue transition-colors">
                  Partners
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <p className="text-muted-foreground mb-2">Northern Virginia</p>
            <div className="space-y-3">
              <a 
                href="mailto:sparkoftomorrownpo@gmail.com" 
                className="flex items-center text-muted-foreground hover:text-spark-blue transition-colors"
              >
                <Mail className="h-4 w-4 mr-2" />
                sparkoftomorrownpo@gmail.com
              </a>
              <a 
                href="https://www.instagram.com/sparkof2morrow/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center text-muted-foreground hover:text-spark-blue transition-colors"
              >
                <Instagram className="h-4 w-4 mr-2" />
                @sparkof2morrow
              </a>
              <a
                href="https://hcb.hackclub.com/donations/start/sparkoftomorrow"
                target="_blank"
                rel="noopener noreferrer"
                className="text-spark-blue hover:text-spark-lightBlue transition-colors font-semibold block mt-4"
              >
                Support Our Mission
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Spark of Tomorrow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
