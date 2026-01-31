import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { SERVICES, PROJECTS } from "../constants";

// Import images from src/assets
import HeroImage from "../src/assets/openimage.jpg";
import TeamImage from "../src/assets/arewe.jpg";

const Home: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const location = useLocation();

  // Scroll to contact if hash is #contact, otherwise scroll to top on mount
  useEffect(() => {
    if (location.hash === "#contact") {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      "Asante! We have received your message. Our team will get back to you shortly."
    );
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-ivory overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-primary leading-tight mb-6">
              Building Software, <br />
              <span className="text-secondary">Creating Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed max-w-lg">
              Tanzania Apps Solutions is a young startup that helps businesses,
              communities, and organizations grow with smart digital solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition-all shadow-lg hover:shadow-xl"
              >
                Get Started
              </a>
              <Link
                to="/portfolio"
                className="bg-white text-primary border-2 border-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary hover:text-white transition-all"
              >
                View Work
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <img
                src={HeroImage}
                alt="Digital Solutions"
                className="rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
              />
              <div className="absolute -bottom-6 -left-6 bg-secondary p-6 rounded-2xl shadow-xl animate-bounce">
                <span className="text-white font-bold text-2xl">
                  🇹🇿 Smart Tech
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary opacity-5 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary opacity-10 rounded-full blur-3xl -ml-48 -mb-48"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-4">
              Who We Are
            </h2>
            <div className="h-1.5 w-24 bg-secondary mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Tanzania Apps Solutions is a team of developers, designers, and
                digital thinkers working to bring digital change across
                Tanzania. We believe technology can make a real positive impact.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="p-6 bg-ivory rounded-2xl border-l-4 border-primary">
                  <h3 className="font-heading font-bold text-primary text-xl mb-2">
                    Our Mission
                  </h3>
                  <p className="text-gray-600">
                    Driving digital transformation in Tanzania through
                    innovative and accessible technology solutions.
                  </p>
                </div>
                <div className="p-6 bg-ivory rounded-2xl border-l-4 border-secondary">
                  <h3 className="font-heading font-bold text-primary text-xl mb-2">
                    Our Vision
                  </h3>
                  <p className="text-gray-600">
                    To be Tanzania's leading digital solutions provider,
                    empowering businesses and communities.
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img
                src={TeamImage}
                alt="Our Team"
                className="rounded-3xl shadow-lg border-8 border-ivory"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-ivory">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We offer comprehensive digital solutions tailored to meet your
              business needs and drive growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 group"
              >
                <div className="text-5xl mb-6 bg-ivory w-20 h-20 flex items-center justify-center rounded-2xl group-hover:bg-secondary transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-primary mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-12">
            Recent Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {PROJECTS.slice(0, 3).map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-3xl shadow-xl aspect-video"
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex flex-col justify-end p-6 text-left opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-secondary font-bold text-sm mb-1">
                    {project.category}
                  </span>
                  <h3 className="text-white text-xl font-bold">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          <Link
            to="/portfolio"
            className="inline-block bg-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-green-700 transition-all shadow-md"
          >
            View All Projects
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-ivory">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-5xl mx-auto bg-white rounded-[2.5rem] shadow-2xl overflow-hidden grid md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-heading font-bold text-primary mb-6">
                Let's Talk!
              </h2>
              <p className="text-gray-600 mb-8">
                Ready to start your digital transformation journey? Fill out
                the form and our experts will contact you.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="E.g. Juma Ali"
                    className="w-full px-4 py-3 bg-ivory border-none rounded-xl focus:ring-2 focus:ring-primary outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="juma@example.com"
                    className="w-full px-4 py-3 bg-ivory border-none rounded-xl focus:ring-2 focus:ring-primary outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-3 bg-ivory border-none rounded-xl focus:ring-2 focus:ring-primary outline-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-green-700 transition-all shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="bg-primary p-8 md:p-12 text-white flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-4 rounded-2xl">📧</div>
                  <div>
                    <p className="text-white/60 text-sm">Email Us</p>
                    <p className="font-bold">tanzaniaappssolutions@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-4 rounded-2xl">📍</div>
                  <div>
                    <p className="text-white/60 text-sm">Our Location</p>
                    <p className="font-bold">Arusha, Tanzania</p>
                  </div>
                </div>
              </div>
              <div className="mt-12 pt-12 border-t border-white/20">
                <p className="font-heading font-bold text-xl text-secondary">
                  Smart Technology for a Better Future
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
