import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap
import './styles.css'; // Import custom CSS for styling

function App() {
  const [projects, setProjects] = useState([]);

  // Fetch data from your GitLab API or backend (mock data for now)
  useEffect(() => {
    const mockData = [
      {
        id: '123',
        url: 'https://gitlab.com/project-123',
        issues: ['Issue 1', 'Issue 2'],
        pipelineStatus: 'Passed',
        lastActivity: '2025-05-01 12:34:56'
      },
      {
        id: '456',
        url: 'https://gitlab.com/project-456',
        issues: ['Issue 3'],
        pipelineStatus: 'Failed',
        lastActivity: '2025-05-03 10:15:20'
      },
    ];

    setProjects(mockData);
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100">
        <div className="container">
          <a className="navbar-brand" href="#">GitLab Dashboard</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="https://gitlab.com/dashboard" target='_blank'>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://gitlab.com/dashboard/projects/personal" target='_blank'>Projects</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mt-5">
        <div className="row">
          {/* Project Table */}
          <div className="col-lg-8">
            <h2 className="text-center mb-4">Projects Overview</h2>
            <div className="table-responsive">
              <table className="table table-bordered table-hover">
                <thead className="table-dark">
                  <tr>
                    <th>Project ID</th>
                    <th>Project URL</th>
                    <th>Issue List</th>
                    <th>Recent Pipeline Status</th>
                    <th>Last Activity</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map((project, index) => (
                    <tr key={index}>
                      <td>{project.id}</td>
                      <td>
                        <a href={project.url} target="_blank" rel="noopener noreferrer">{project.url}</a>
                      </td>
                      <td>{project.issues.join(', ')}</td>
                      <td>{project.pipelineStatus}</td>
                      <td>{project.lastActivity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Sidebar with Project Stats */}
          <div className="col-lg-4">
            <h2 className="text-center mb-4">Project Statistics</h2>
            {projects.map((project, index) => (
              <div className="card mb-4" key={index}>
                <div className="card-header bg-primary text-white">
                  Project {project.id}
                </div>
                <div className="card-body">
                  <h5 className="card-title">Pipeline Status: {project.pipelineStatus}</h5>
                  <p className="card-text">Last Activity: {project.lastActivity}</p>
                  <a href={project.url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3 mt-5">
        <p>GitLab Dashboard &copy; 2025. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;

