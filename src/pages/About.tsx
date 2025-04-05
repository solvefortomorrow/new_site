
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary/10 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-spark-blue mb-6">About Us</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Learn more about our mission to spark curiosity and inspire a love of learning across Northern Virginia.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="section-title">Our Story</h2>
                <p className="mb-6">
                  Spark of Tomorrow was founded by passionate educators and students who believe in the transformative power of curiosity-driven learning. Based in Northern Virginia, we work with talented students from both magnet schools like Thomas Jefferson High School for Science and Technology and the Academies of Loudoun, as well as students from traditional public schools.
                </p>
                <p className="mb-6">
                  Our organization grew from the recognition that fostering a love of learning requires innovative approaches that engage students' natural curiosity and provide them with meaningful educational experiences.
                </p>
                <p>
                  Today, we continue to develop solutions and programs that make learning more accessible, engaging, and impactful for students across our community.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden h-80">
                <img 
                  src="/uploads/61020ac5-0c78-44e9-be02-ca8375e7b8df.png" 
                  alt="Spark of Tomorrow team" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="section-padding bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-spark-blue mb-3">Curiosity</h3>
                <p>
                  We believe that curiosity is the foundation of all learning. We encourage questions, exploration, and discovery in everything we do.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-spark-blue mb-3">Accessibility</h3>
                <p>
                  We're committed to making quality educational resources and opportunities accessible to all students, regardless of background or circumstances.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-spark-blue mb-3">Innovation</h3>
                <p>
                  We continuously seek new and effective ways to engage students in learning, embracing creativity and technology to enhance educational experiences.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
