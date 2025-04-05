
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PartnerCard from "@/components/PartnerCard";

const Partners = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-spark-blue py-16 md:py-24 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Partners</h1>
            <p className="text-xl max-w-3xl">
              We collaborate with forward-thinking organizations that share our mission of inspiring curiosity and fostering education for students everywhere.
            </p>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Current Partners</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <PartnerCard 
                name="Wonder Kid EDU" 
                image="/uploads/2b5e79d0-b86e-4843-a6fc-30bb5f99e57c.png" 
                link="https://wonderkidedu.org"
              />
              <PartnerCard 
                name="DataCurve (YC W24)" 
                image="/uploads/61020ac5-0c78-44e9-be02-ca8375e7b8df.png" 
                link="https://datacurve.ai/" 
                description="DataCurve is an innovative Y Combinator Winter '24 company pioneering advanced AI technology for mathematics education. We've collaborated to provide high-quality math reasoning datasets, helping their AI models better understand student problem-solving approaches. This partnership aligns perfectly with our mission to ignite curiosity through creative educational solutions while supporting cutting-edge educational technology."
              />
            </div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="section-padding bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-center">Partnership Benefits</h2>
            <p className="section-subtitle text-center max-w-3xl mx-auto">
              Together with our partners, we're creating impactful educational solutions that reach students across the globe.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-spark-blue mb-3">Student Talent</h3>
                <p className="text-muted-foreground">
                  Connect with talented high school students from TJHSST, Academies of Loudoun, and other Northern Virginia schools.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-spark-blue mb-3">Educational Resources</h3>
                <p className="text-muted-foreground">
                  Gain access to our innovative educational materials and curriculum developed by bright young minds.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-spark-blue mb-3">Research Collaboration</h3>
                <p className="text-muted-foreground">
                  Work together on research projects that advance educational innovation for students worldwide.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-spark-blue mb-3">Global Impact</h3>
                <p className="text-muted-foreground">
                  Join us in making a positive impact on education beyond Northern Virginia, reaching classrooms everywhere.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Become a Partner */}
        <section className="section-padding">
          <div className="container mx-auto px-4 text-center">
            <h2 className="section-title">Become a Partner</h2>
            <p className="max-w-3xl mx-auto mb-8">
              Interested in partnering with Spark of Tomorrow? We're always looking to collaborate with organizations that share our mission of inspiring learning and curiosity in students around the world.
            </p>
            <div className="inline-block rounded-md bg-spark-blue p-1">
              <span className="block px-8 py-3 font-medium text-white">
                Contact us at: sparkoftomorrownpo@gmail.com
              </span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Partners;
