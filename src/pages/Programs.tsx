
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Sparkles, Box, School, Video, BookOpen, Users } from "lucide-react";

const Programs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-spark-blue py-16 md:py-24 text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Spark Boxes</h1>
                <p className="text-xl max-w-xl">
                  Our flagship program delivering hands-on educational experiences that ignite curiosity and make learning fun for students everywhere.
                </p>
                <a href="mailto:sparkoftomorrownpo@gmail.com">
                  <Button size="lg" className="mt-8 bg-white text-spark-blue hover:bg-gray-100">
                    Get Started
                  </Button>
                </a>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="relative w-64 h-64 bg-white/10 rounded-lg border border-white/20 flex items-center justify-center">
                  <Box className="h-24 w-24 text-white/90" />
                  <div className="absolute -top-3 -right-3 bg-spark-yellow h-12 w-12 rounded-full flex items-center justify-center">
                    <Sparkles className="h-6 w-6 text-black" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What are Spark Boxes */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-center">What Are Spark Boxes?</h2>
            <p className="section-subtitle text-center max-w-3xl mx-auto">
              Spark Boxes are interactive educational kits designed to make learning fun, engaging, and accessible to students everywhere.
            </p>
            
            <div className="mt-12 bg-muted p-8 rounded-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-spark-blue mb-6">Igniting Curiosity Through Hands-On Learning</h3>
                  <p className="mb-6 text-lg">
                    Each Spark Box contains carefully curated materials for exciting educational experiments and activities that demonstrate real-world applications of academic concepts.
                  </p>
                  <p className="text-lg">
                    From making soap bubbles to understand optimization problems to exploring simple physics concepts through fun activities, our boxes transform abstract learning into tangible experiences.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
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
                  <h4 className="font-bold text-xl mt-4 mb-4 text-spark-blue">Bubble Surface Area Optimization Experiment</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-spark-green/10 p-2 rounded-full mr-4">
                        <Box className="h-5 w-5 text-spark-green" />
                      </div>
                      <span>All necessary materials for multiple experiments</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-spark-blue/10 p-2 rounded-full mr-4">
                        <BookOpen className="h-5 w-5 text-spark-blue" />
                      </div>
                      <span>Detailed instruction guides with educational context</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-spark-yellow/10 p-2 rounded-full mr-4">
                        <Video className="h-5 w-5 text-spark-yellow" />
                      </div>
                      <span>Access to video walkthroughs created by our student team</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-spark-orange/10 p-2 rounded-full mr-4">
                        <School className="h-5 w-5 text-spark-orange" />
                      </div>
                      <span>Additional resources to extend learning beyond the box</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="section-padding bg-gradient-to-br from-white to-primary/5">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-center">How Spark Boxes Work</h2>
            <p className="section-subtitle text-center max-w-3xl mx-auto">
              We deliver educational excitement directly to schools and classrooms across the country.
            </p>
            
            <div className="mt-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-lg shadow text-center">
                  <div className="bg-spark-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Box className="h-8 w-8 text-spark-blue" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">1. We Deliver the Box</h3>
                  <p className="text-muted-foreground">
                    Spark Boxes are shipped directly to schools and classrooms, containing all the materials needed for a complete learning experience.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow text-center">
                  <div className="bg-spark-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="h-8 w-8 text-spark-green" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">2. Students Explore</h3>
                  <p className="text-muted-foreground">
                    Students engage with hands-on activities that make abstract concepts tangible, guided by our detailed instructions and videos.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow text-center">
                  <div className="bg-spark-yellow/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Sparkles className="h-8 w-8 text-spark-yellow" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">3. Learning Ignites</h3>
                  <p className="text-muted-foreground">
                    Students discover the "why" behind the experiments, connecting fun activities to academic concepts and real-world applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Impact */}
        <section className="section-padding bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-center">Our Team & Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">
              <div>
                <h3 className="text-2xl font-bold text-spark-blue mb-4">Created By Students, For Students</h3>
                <p className="mb-4 text-lg">
                  Spark of Tomorrow is powered by talented high school students from across Northern Virginia, including Thomas Jefferson High School for Science and Technology (TJHSST) and the Academies of Loudoun.
                </p>
                <p className="mb-4">
                  Our team brings diverse perspectives and fresh ideas to educational challenges, creating materials that truly resonate with other students.
                </p>
                <p>
                  While we're based in Northern Virginia, our mission is to ignite curiosity in students everywhere, with Spark Boxes designed to reach classrooms across the country.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="aspect-video rounded-lg overflow-hidden mb-6">
                  <img 
                    src="/lovable-uploads/5003ce44-1f14-43c2-9784-a7f97efd6a0c.png" 
                    alt="Thomas Jefferson High School for Science and Technology" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-bold text-xl mb-6 text-center text-spark-blue">Our Vision</h4>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-spark-green mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Reach 100+ classrooms in our first year</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-spark-green mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Develop boxes for multiple age groups and subjects</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-spark-green mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Partner with schools nationwide for maximum impact</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-spark-green mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Create digital resources to complement physical boxes</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-spark-blue to-spark-lightBlue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Bring Spark Boxes to Your School</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Help us ignite curiosity in your classroom with our educational kits. Your support makes it possible for us to reach more students.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="mailto:sparkoftomorrownpo@gmail.com">
                <Button size="lg" className="bg-white text-spark-blue hover:bg-gray-100">
                  Request Information
                </Button>
              </a>
              <a href="https://hcb.hackclub.com/donations/start/sparkoftomorrow" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-white text-white bg-transparent hover:bg-white/10">
                  Support Our Mission
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Programs;
