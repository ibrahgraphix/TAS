
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PROJECTS } from '../constants';

const ProjectDetail: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const project = PROJECTS.find((p) => p.id === projectId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="pt-32 min-h-screen text-center">
        <h2 className="text-2xl font-bold text-gray-800">Project not found</h2>
        <Link to="/portfolio" className="text-primary hover:underline mt-4 inline-block">Back to Portfolio</Link>
      </div>
    );
  }

  return (
    <div className="pt-24 bg-ivory min-h-screen pb-20">
      <div className="container mx-auto px-4 md:px-8">
        {/* Breadcrumb & Navigation */}
        <div className="mb-8">
          <button 
            onClick={() => navigate(-1)} 
            className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Back
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Info */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-[2rem] shadow-xl sticky top-28">
              <span className="inline-block px-3 py-1 bg-secondary text-primary font-bold text-xs rounded-full mb-4">
                {project.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">{project.title}</h1>
              <p className="text-gray-600 leading-relaxed mb-8">
                {project.description}
              </p>
              
              <div className="space-y-4">
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center justify-center gap-2 w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-green-700 transition-all shadow-lg"
                  >
                    Visit Live Website
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
                <div className="pt-6 border-t border-gray-100 mt-6">
                  <h4 className="font-bold text-gray-700 mb-2">Service Type</h4>
                  <p className="text-gray-500">{project.category}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Screenshot Gallery */}
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-2xl font-heading font-bold text-primary">Screenshots & Preview</h2>
            <div className="grid gap-8">
              {project.screenshots.map((src, index) => (
                <div key={index} className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <img 
                    src={src} 
                    alt={`${project.title} screenshot ${index + 1}`} 
                    className="w-full h-auto block"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
