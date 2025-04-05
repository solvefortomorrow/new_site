
import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-spark-blue via-primary to-spark-lightBlue py-24 md:py-32">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-1/4 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute right-1/3 bottom-1/3 w-40 h-40 bg-spark-yellow/20 rounded-full blur-xl"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <div className="flex items-center mb-4">
            <div className="bg-white/20 backdrop-blur-sm p-1.5 rounded-full">
              <Sparkles className="h-5 w-5 text-spark-yellow" />
            </div>
            <span className="ml-2 text-white/90 font-medium">Student-led educational innovation</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Sparking Curiosity, <br />
            <span className="text-spark-yellow">Igniting Learning</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-xl">
            A student-led non-profit creating Spark Boxes and innovative solutions that inspire a love of learning among students everywhere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://hcb.hackclub.com/donations/start/sparkoftomorrow" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-spark-yellow hover:bg-spark-orange text-black font-semibold">
                Support Our Mission
              </Button>
            </a>
            <Link to="/programs">
              <Button variant="outline" size="lg" className="border-white text-white bg-transparent hover:bg-white/10">
                Explore Spark Boxes
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;
