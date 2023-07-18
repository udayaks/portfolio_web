import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faChartBar } from "@fortawesome/free-regular-svg-icons";

const About: React.FC = () => {
    return (
        <section className="py-8">
            <div className="container mx-auto">
                <h2 className="text-2xl font-bold mb-4">Experience</h2>
                <div>
                    <div className="flex items-center mb-2">
                        <FontAwesomeIcon
                            icon={faDatabase}
                            className="w-8 h-8 mr-2 text-gray-600"
                        />
                        <div>
                            <h3 className="font-bold">Data Engineer</h3>
                            <p className="text-gray-600">
                                Devfinity
                                <span className="mx-1">&middot;</span>
                                Aug 2022 - Present &middot; 1 yr
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center mb-2">
                        <FontAwesomeIcon
                            icon={faLaptopCode}
                            className="w-8 h-8 mr-2 text-gray-600"
                        />
                        <div>
                            <h3 className="font-bold">Software Engineer</h3>
                            <p className="text-gray-600">
                                Vriya Technologies · Full-time
                                <span className="mx-1">&middot;</span>
                                Mar 2020 - Jun 2022 &middot; 2 yrs 4 mos
                            </p>
                            <ul className="list-disc list-inside ml-4">
                                <li>Designed, developed and maintained various projects like Database Design, Rest API, Website Development, ETL, Lead Generation, etc.</li>
                                <li>Managed and maintained GCP infrastructure for various projects.</li>
                                <li>Automated various recurring tasks.</li>
                                <li>Gathered and defined customer requirements to develop clear specifications for improvements.</li>
                                <li>Worked closely with other business analysts, development teams, and infrastructure specialists to deliver high availability solutions.</li>
                                <li>Improved system performance by making optimizations and resolving bugs.</li>
                                <li>Acquainted with Docker and Kubernetes.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex items-center mb-2">
                        <FontAwesomeIcon 
                            icon={faChartBar} 
                            className="w-8 h-8 mr-2 text-gray-600"
                        />
                        <div>
                            <h3 className="font-bold">Associate Data Analyst</h3>
                            <p className="text-gray-600">
                                GrowByData
                                <span className="mx-1">&middot;</span>
                                Aug 2019 - Mar 2020 &middot; 8 mos
                            </p>
                            <ul className="list-disc list-inside ml-4">
                                <li>Used Google Analytics, Google AdWords, Amazon Reporting tools to gain additional insight into a client’s e-commerce business and define areas of opportunity.</li>
                                <li>Led generation, marketing, and data enrichment activities.</li>
                                <li>Designed and developed automation scripts and web scraping solutions.</li>
                                <li>Completed projects and initiatives in a timely and efficient manner.</li>
                                <li>Acquainted with Project Management Tools like JIRA and Teamwork.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
