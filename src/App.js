import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="w-full bg-white rounded-lg shadow-md p-6">
      <div className="mb-4">
        <h1 className="text-2xl font-bold">Mahika Mathur</h1>
        <p>3rd year Computer Science Engineering student</p>
      </div>

      <section id="contact" className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
        <ul>
          <li>Phone: +91 8319720025</li>
          <li>Email: <a href="mailto:mahikamathur07@gmail.com" className="text-blue-500 hover:underline">mahikamathur07@gmail.com</a></li>
          <li>LinkedIn: <a href="https://www.linkedin.com/in/mahika-mathur" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Mahika Mathur</a></li>
        </ul>
      </section>

      <section id="overview" className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Overview</h2>
        <p>
          Enthusiastic and dedicated 3rd year Computer Science Engineering student with a passion for technology and a drive to learn and excel in the field. Proven ability to collaborate effectively in team settings, communicate technical concepts clearly, and adapt to new technologies and challenges. Seeking opportunities to apply and enhance skills in real-world projects and contribute positively to innovative solutions in the realm of computer science and engineering.
        </p>
      </section>

      <section id="education" className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Education</h2>
        <p>
          <strong>2022 - 2026</strong><br />
          Bachelor of Technology - BTech CSE, Engineering<br />
          Symbiosis Institute of Technology, Pune
        </p>
      </section>

      <section id="experience" className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Experience</h2>
        <div className="mb-4">
          <h3 className="text-lg font-bold">Executive Member - Brushes To Pixels, SIT Pune</h3>
          <p><em>Sep 2022 - Present</em></p>
          <ul className="list-disc pl-5">
            <li>Pioneered and collaborated on the production of compelling and engaging official college social media content.</li>
            <li>Adept at thriving under pressure and excelling in time-sensitive environments, ensuring timely delivery of high-quality content without compromising on creativity or attention to detail.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold">Design Head - ACM Student's Chapter, SIT Pune</h3>
          <p><em>Apr 2024 - Present</em></p>
          <ul className="list-disc pl-5">
            <li>Crafted and orchestrated captivating, eye-catching designs for official posters and media announcements.</li>
            <li>Meticulously managed every aspect of the design process, from conception to execution.</li>
          </ul>
        </div>
      </section>

      <section id="technical-skills" className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Technical Skills</h2>
        <ul className="list-disc pl-5">
          <li>SQL</li>
          <li>Microsoft Office</li>
          <li>Java</li>
          <li>JavaScript</li>
          <li>PHP</li>
          <li>C++</li>
          <li>C</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>React</li>
        </ul>
      </section>

      <section id="professional-skills" className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Professional Skills</h2>
        <ul className="list-disc pl-5">
          <li>Writing and Translation</li>
          <li>Management of Events</li>
        </ul>
      </section>
    </div>
  );
};

export default App;