import React from 'react';

function DashboardAbout() {
  return (
    <fieldset>
      <div className="about" id="about">
        <h1>About</h1>
        <div className="edit-about">
          <p>Edit your about text</p>
          <textarea name="about-zone" cols="80" rows="10"></textarea>
          <button>Edit</button>
          <button>Save</button>
        </div>
      </div>
    </fieldset>
  );
}

export default DashboardAbout;
