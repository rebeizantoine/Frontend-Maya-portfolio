import React from 'react';

function DashboardCV() {
  return (
    <fieldset>
      <div className="cv" id="cv">
        <h1>CV</h1>
        <div className="upload-cv">
          <p>Upload your CV</p>
          <button>Upload</button>
          <button>Save</button>
        </div>
      </div>
    </fieldset>
  );
}

export default DashboardCV;