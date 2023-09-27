import React from 'react';

function DashboardSkills() {
  return (
    <fieldset>
      <div className="skills" id="skills">
        <h1>Skills</h1>
        <div className="single-skill">
          <p>SKILL 1:</p>
          <div className="skill-name">
            <label>Name</label>
            <input type="text" />
            <button>Edit</button>
            <button>Delete</button>
            <button>Save</button>
          </div>
          <div className="skill-icon">
            <label>Icon</label>
            <input type="text" />
            <button>Upload</button>
            <button>Save</button>
          </div>
        </div>
        <br />
        <br />
        <div className="single-skill">
          <p>SKILL 2:</p>
          <div className="skill-name">
            <label>Name</label>
            <input type="text" />
            <button>Edit</button>
            <button>Delete</button>
            <button>Save</button>
          </div>
          <div className="skill-icon">
            <label>Icon</label>
            <input type="text" />
            <button>Upload</button>
            <button>Save</button>
          </div>
        </div>
        <button>ADD SKILL</button>
      </div>
    </fieldset>
  );
}

export default DashboardSkills;
