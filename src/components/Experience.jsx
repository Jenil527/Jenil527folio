import React from 'react';
import './Experience.css';

const experiences = [
  {
    role: 'Loss Prevention',
    company: 'Blackbird Security Inc. | Regina, SK',
    date: '04/2026 – Present',
    points: [
      'Monitored premises through regular patrols to maintain a safe and secure environment.',
      'Controlled access to buildings by verifying identification and authorizing entry.',
      'Responded promptly to alarms, incidents, and emergencies following established procedures.',
      'Prepared accurate daily activity logs and detailed incident reports.'
    ]
  },
  {
    role: 'Food Services Assistant',
    company: 'Regina Public School | SK, Regina',
    date: '03/2026 – Present',
    points: [
      'Prepare and organize the kitchen for the following day which includes cleaning and sanitizing the kitchen area.',
      'Assist with equipment cleaning and maintenance.',
      'Working with the cash register and accounting of daily sales.',
      'Follow safe food handling and operating equipment in a safe manner.'
    ]
  },
  {
    role: 'Customer Fulfillment Associate',
    company: 'Walmart East | SK, Regina',
    date: '03/2025 – 03/2026',
    points: [
      'Resolved 30+ customer inquiries daily, maintaining a 95% satisfaction rate.',
      'Streamlined checkout processes using POS systems, reducing average customer wait times.',
      'Collaborated with team members to manage and restock inventory efficiently.',
      'Trained new team members on POS operation and store procedures, supporting faster onboarding.',
      'Identified and flagged inventory discrepancies to supervisors, helping reduce stock errors.'
    ]
  },
  {
    role: 'Service Desk Associate',
    company: 'Cadila Pharma | Ankleshwar, India',
    date: '02/2023 – 02/2024',
    points: [
      'Technical Support, efficiently diagnosing, troubleshooting and resolving hardware, software, and application issues for end users.',
      'Maintained and organized client information, ensuring it was kept accurate, structured, and up to date.',
      'Handled client inquiries and managed appointment scheduling, coordinating details smoothly between clients and management.',
      'Executed professional phone calls and drafted emails as required by management to ensure seamless operational coordination, follow-ups, and client satisfaction.'
    ]
  }
];

function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div className="experience-card glass" key={index}>
              {exp.image && (
                <div className="experience-image-container">
                  <img src={exp.image} alt={exp.company} className="experience-image" />
                </div>
              )}
              <div className="experience-content">
                <div className="experience-header">
                  <h3 className="experience-role">{exp.role}</h3>
                  <span className="experience-date">{exp.date}</span>
                </div>
                <p className="experience-company">{exp.company}</p>
                {exp.points ? (
                  <ul className="experience-points">
                    {exp.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="experience-desc">{exp.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
