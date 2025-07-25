import React from 'react';

const ProjectCard = ({ title, description, link }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 flex flex-col justify-between h-full">
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      <div className="mt-4">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-600 hover:underline"
        >
          View Project →
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
