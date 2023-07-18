import React from 'react';

const Projects: React.FC = () => {
    return (
        <section className="py-8">
        <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-4">Projects</h2>
            <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-200 p-4">Project 1</div>
            <div className="bg-gray-200 p-4">Project 2</div>
            <div className="bg-gray-200 p-4">Project 3</div>
            <div className="bg-gray-200 p-4">Project 4</div>
            </div>
        </div>
        </section>
    );
};

export default Projects;
