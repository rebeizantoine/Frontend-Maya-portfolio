import React from 'react';

function DashboardExperience() {
  return (
    <fieldset>
      <div className="experience" id="experience">
        <h1>Experience</h1>

        <div className="single-experience">
          <p>EXPERIENCE 1:</p>
          <label>Date</label>
          <input type="text" />
          <label>Description</label>
          <input type="text" />
          <button>Edit</button>
          <button>Save</button>
        </div>
        <br />
        <br />
        <div className="single-experience">
          <p>EXPERIENCE 2:</p>
          <label>Date</label>
          <input type="text" />
          <label>Description</label>
          <input type="text" />
          <button>Edit</button>
          <button>Save</button>
        </div>
        <br />
        <br />
        <div className="single-experience">
          <p>EXPERIENCE 3:</p>
          <label>Date</label>
          <input type="text" />
          <label>Description</label>
          <input type="text" />
          <button>Edit</button>
          <button>Save</button>
        </div>
      </div>
    </fieldset>
  );
}

export default DashboardExperience;
