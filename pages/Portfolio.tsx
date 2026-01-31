import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PROJECTS } from "../constants";

const Portfolio: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleStartJourney = () => {
    navigate("/#contact"); // navigate to home with hash
  };

  return (
    <div className="pt-24 min-h-screen bg-ivory pb-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary mb-6">
            Our Portfolio
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore the digital solutions we've built for businesses, schools,
            and communities across Tanzania.
          </p>
          <div className="h-1.5 w-24 bg-secondary mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all group flex flex-col"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <div className="bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                    {project.category}
                  </div>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="bg-secondary text-primary text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1 hover:scale-105 transition-transform"
                    >
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                      </span>
                      Live
                    </a>
                  )}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-heading font-bold text-primary mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>
                <div className="mt-auto flex items-center justify-between">
                  <Link
                    to={`/portfolio/${project.id}`}
                    className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all"
                  >
                    <span>View Details</span>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-24 bg-primary rounded-[3rem] p-12 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Have a Project in Mind?
            </h2>
            <p className="text-xl mb-10 opacity-80 max-w-2xl mx-auto">
              We're ready to bring your digital vision to life. Let's build
              something amazing together.
            </p>
            <button
              onClick={handleStartJourney}
              className="inline-block bg-secondary text-primary font-bold px-10 py-4 rounded-2xl text-lg hover:scale-105 transition-transform shadow-xl"
            >
              Start Your Journey
            </button>
          </div>
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full -ml-16 -mt-16"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/10 rounded-full -mr-32 -mb-32"></div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
