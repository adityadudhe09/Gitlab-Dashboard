import React from "react";

const ProjectTable = ({ projects }) => {
  return (
    <table className="w-full border-collapse border border-gray-300">
      <thead className="bg-gray-100">
        <tr>
          <th className="border px-4 py-2">Project ID</th>
          <th className="border px-4 py-2">Project URL</th>
          <th className="border px-4 py-2">Issue List</th>
          <th className="border px-4 py-2">Pipeline Status</th>
          <th className="border px-4 py-2">Last Activity</th>
        </tr>
      </thead>
      <tbody>
        {projects.map((p) => (
          <tr key={p.id} className="border-t">
            <td className="border px-4 py-2">{p.id}</td>
            <td className="border px-4 py-2">
              <a href={p.web_url} className="text-blue-600 underline" target="_blank" rel="noreferrer">Visit</a>
            </td>
            <td className="border px-4 py-2">
              <ul className="list-disc pl-5">
                {p.issues.length > 0 ? p.issues.map((issue, i) => (
                  <li key={i}>{issue}</li>
                )) : <li>No Issues</li>}
              </ul>
            </td>
            <td className="border px-4 py-2">{p.pipelineStatus}</td>
            <td className="border px-4 py-2">{new Date(p.lastActivity).toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProjectTable;
