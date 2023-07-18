import React from 'react';

const Projects: React.FC = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-200 p-4">
            <h3 className="font-bold mb-2">Electronic medical records (EMRs) </h3>
            <p className="text-gray-600">
                Electronic Medical Records (EMRs) are digital versions of patients' paper medical charts. They contain comprehensive and up-to-date information about an individual's medical history, diagnoses, treatments, medications, and other relevant healthcare data.
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>Medical Institute Specific</li>
              <li>Multi Roles</li>
              <li>Reportings</li>
            </ul>
          </div>
          <div className="bg-gray-200 p-4">
            <h3 className="font-bold mb-2">Covid Tracker</h3>
            <p className="text-gray-600">
            The Covid Tracker is a comprehensive application that not only tracks the latest Covid-19 statistics but also includes additional features to support health care, prevention, and treatment efforts. With the integrated survey feature, users can participate in surveys related to Covid-19 to provide valuable insights for research and data analysis.
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>Surveys</li>
              <li>Heat Map</li>
              <li>Blog Posts</li>
            </ul>
          </div>
          <div className="bg-gray-200 p-4">
            <h3 className="font-bold mb-2">Teleupachar</h3>
            <p className="text-gray-600">
            TeleUpachar is a cutting-edge telemedicine application that revolutionizes the way doctors and patients connect and interact. It offers a wide range of features to facilitate seamless virtual healthcare services. 
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>Video Call Consultation</li>
              <li>Digital Payment Integration</li>
              <li>Digital Prescription Management</li>
              <li>Multi-Role Functionality</li>
              <li>Multi-Tenant Architecture</li>
            </ul>
          </div>
          <div className="bg-gray-200 p-4">
            <h3 className="font-bold mb-2">Stream Harbour</h3>
            <p className="text-gray-600">
              All in one ETL and Reporting Platform
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>Extract and Load from multiple sources</li>
              <li>Scheduling</li>
              <li>Reporting</li>
              <li>Multi-Role Functionality</li>
              <li>Multi-Tenant Architecture</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
