import React from "react";

const ProjectPage = () => {
    const projects = [
        { title: "Project 1", description: "Description of project 1", link: "/project1" },
        { title: "Project 2", description: "Description of project 2", link: "/project2" },
        // Add more projects as needed
    ];

    return (
        <div className="min-h-screen bg-gray-900 text-white p-8">
            <h2 className="text-4xl font-bold text-yellow-400 mb-6">My Projects</h2>
            <ul className="space-y-4">
                {projects.map((project, index) => (
                    <li key={index} className="text-lg text-gray-400">
                        <a href={project.link} className="hover:underline">
                            <strong>{project.title}</strong>: {project.description}
                        </a>
                    </li>
                ))}
                <li className="text-lg text-gray-400">
                    <strong> uploaded soon </strong>
                </li>
            </ul>
        </div>
    );
};

export default ProjectPage;
