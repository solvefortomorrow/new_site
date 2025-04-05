
import React from "react";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import PartnerCard from "@/components/PartnerCard";
import { Box, Sparkles, Users, Instagram } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />

        {/* Mission Section */}
        <section className="section-padding bg-white">
          <div className="container mx-auto">
            <h2 className="section-title text-center">Our Mission</h2>
            <p className="section-subtitle text-center max-w-3xl mx-auto">
              At Spark of Tomorrow, we believe in the transformative power of curiosity and learning. 
              Our team of high school students from across Northern Virginia creates innovative solutions to inspire students everywhere.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-muted p-8 rounded-lg text-center transition-all hover:shadow-lg">
                <div className="w-16 h-16 bg-spark-blue rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  <Users size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">Student-Led Team</h3>
                <p className="text-muted-foreground">
                  Created by talented students from TJHSST, Academies of Loudoun, and other Northern Virginia schools.
                </p>
              </div>

              <div className="bg-muted p-8 rounded-lg text-center transition-all hover:shadow-lg">
                <div className="w-16 h-16 bg-spark-green rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  <Box size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">Spark Boxes</h3>
                <p className="text-muted-foreground">
                  Educational kits shipped to classrooms nationwide with materials for hands-on learning experiences.
                </p>
              </div>

              <div className="bg-muted p-8 rounded-lg text-center transition-all hover:shadow-lg">
                <div className="w-16 h-16 bg-spark-yellow rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  <Sparkles size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">Igniting Curiosity</h3>
                <p className="text-muted-foreground">
                  Creating educational experiences that make students ask "why" and develop a lifelong love for learning.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Spark Boxes Feature */}
        <section className="section-padding bg-gradient-to-br from-white to-primary/5">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="section-title">Introducing Spark Boxes</h2>
                <p className="text-lg mb-6">
                  Our flagship program delivers educational excitement directly to classrooms across the country. Each box contains materials for hands-on experiments that make learning fun.
                </p>
                <p className="mb-8">
                  From making soap bubbles to understand optimization to exploring physics through engaging activities, Spark Boxes transform abstract concepts into tangible experiences.
                </p>
                <Link to="/programs">
                  <Button className="bg-spark-blue hover:bg-spark-lightBlue text-white">
                    Learn More About Spark Boxes
                  </Button>
                </Link>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="aspect-square bg-muted rounded-lg overflow-hidden relative">
                  <img 
                    src="/uploads/7cb8d5d6-43f4-4b6c-bce2-8e1d68ec07a0.png" 
                    alt="Bubble Surface Area Optimization Experiment" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-spark-yellow h-12 w-12 rounded-full flex items-center justify-center">
                    <Sparkles className="h-6 w-6 text-black" />
                  </div>
                </div>
                <div className="mt-6 space-y-3">
                  <h3 className="text-xl font-bold text-spark-blue">Bubble Surface Area Optimization Experiment</h3>
                  <div className="flex items-center space-x-2">
                    <svg className="h-5 w-5 text-spark-green" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Experiment materials</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="h-5 w-5 text-spark-green" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Detailed instruction guides</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="h-5 w-5 text-spark-green" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Video walkthroughs</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="h-5 w-5 text-spark-green" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Educational context materials</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partners Highlight */}
        <section className="section-padding bg-muted">
          <div className="container mx-auto">
            <h2 className="section-title text-center">Our Partners</h2>
            <p className="section-subtitle text-center max-w-3xl mx-auto">
              We collaborate with organizations that share our passion for education and innovation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <PartnerCard 
                name="Wonder Kid Edu" 
                image="/uploads/2b5e79d0-b86e-4843-a6fc-30bb5f99e57c.png" 
                link="https://wonderkidedu.org"
              />
              <PartnerCard 
                name="DataCurve (YC W24)" 
                image="/uploads/61020ac5-0c78-44e9-be02-ca8375e7b8df.png" 
                link="https://datacurve.ai/" 
                description="DataCurve is an innovative Y Combinator Winter '24 company pioneering advanced AI technology for mathematics education. We've collaborated to provide high-quality math reasoning datasets, helping their AI models better understand student problem-solving approaches."
              />
            </div>
            <div className="text-center mt-12">
              <Link to="/partners">
                <Button variant="outline" className="border-spark-blue text-spark-blue hover:bg-spark-blue/10">
                  See All Partners
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-spark-blue to-spark-lightBlue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to ignite curiosity?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Your support enables us to send Spark Boxes to classrooms nationwide, inspiring students everywhere to develop a love for learning.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="https://hcb.hackclub.com/donations/start/sparkoftomorrow" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-spark-blue hover:bg-gray-100">
                  Donate Today
                </Button>
              </a>
              <Link to="/programs">
                <Button size="lg" variant="outline" className="border-white text-white bg-transparent hover:bg-white/10">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
