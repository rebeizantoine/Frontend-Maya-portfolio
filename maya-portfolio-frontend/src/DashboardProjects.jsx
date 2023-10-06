import React, { useEffect, useState } from 'react';
import axios from 'axios';
function DashboardProjects() {
  const [projects, setProjects] = useState([]);
  const [doFetch, setDoFetch] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/projects');
        setProjects(response.data.data);
      } catch (err) {
        console.error(err);
      }
    };
    if (doFetch) {
      fetchData();
      setDoFetch(false);
    }
  }, [doFetch]);

  const handleInputChange = (projectId, field, value) => {
    const updatedProjects = [...projects];
    const projectIndex = updatedProjects.findIndex((project) => project._id === projectId);
    updatedProjects[projectIndex][field] = value;
    setProjects(updatedProjects);
  };

  const handleFileChange = async (projectId, field, file) => {
    try {
      const imageUrl = await uploadImageToImgbb(file);
      const updatedProjects = [...projects];
      const projectIndex = updatedProjects.findIndex((project) => project._id === projectId);
      updatedProjects[projectIndex][field] = imageUrl;
      setProjects(updatedProjects);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClearFileInput = (projectId, field) => {
    const updatedProjects = [...projects];
    const projectIndex = updatedProjects.findIndex((project) => project._id === projectId);
    updatedProjects[projectIndex][field] = null;
    setProjects(updatedProjects);
  };

  const saveChanges = async (projectId) => {
    try {
      const project = projects.find((p) => p._id === projectId);
      const response = await axios.put(
        `http://localhost:5000/api/projects/update/${projectId}`,
        JSON.stringify(project),
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );

      if (!response) {
        throw new Error('An error occurred while updating the project');
      }
      setDoFetch(!doFetch);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const uploadImageToImgbb = async (imageFile) => {
    const formData = new FormData();
    formData.append('image', imageFile);

    const response = await fetch("https://api.imgbb.com/1/upload?key=91d27c7f35f4cd3885f4ada2ac3d2c1c", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    return data.data.url;
  };


  return (
    <fieldset>
      {projects.length > 0 ? (
        <div className="dash-projects" id="projects">
          <h1 className='dash-h1'>Projects</h1>

          {projects.map((project, index) => (
            <div className="dash-single-project" key={index}>
              <form onSubmit={(e) => e.preventDefault()}>
                <p>PROJECT {index + 1}:</p>
                <div className="dash-project-title">
                  <label>Title</label>
                  <input
                    type="text"
                    defaultValue={project.title}
                    onChange={(e) => handleInputChange(project._id, 'title', e.target.value)}
                  />
                  <button onClick={() => handleClearFileInput(project._id, 'title')}>
                    Clear
                  </button>
                  <button onClick={() => saveChanges(project._id)}>Save</button>
                </div>
                <div className="dash-project-subtitle">
                  <label>Subtitle</label>
                  <input
                    type="text"
                    defaultValue={project.subtitle}
                    onChange={(e) => handleInputChange(project._id, 'subtitle', e.target.value)}
                  />
                  <button onClick={() => handleClearFileInput(project._id, 'subtitle')}>
                    Clear
                  </button>
                  <button onClick={() => saveChanges(project._id)}>Save</button>
                </div>
                <div className="dash-project-description">
                  <label>Description</label>
                  <input
                    type="text"
                    defaultValue={project.description}
                    onChange={(e) => handleInputChange(project._id, 'description', e.target.value)}
                  />
                  <button onClick={() => handleClearFileInput(project._id, 'description')}>
                    Clear
                  </button>
                  <button onClick={() => saveChanges(project._id)}>Save</button>
                </div>
                <div className="dash-project-video">
                  <label>Video demo link</label>
                  <input
                    type="text"
                    defaultValue={project.video_link}
                    onChange={(e) => handleInputChange(project._id, 'video_link', e.target.value)}
                  />
                  <button onClick={() => handleClearFileInput(project._id, 'video_link')}>
                    Clear
                  </button>
                  <button onClick={() => saveChanges(project._id)}>Save</button>
                </div>
                <div className="dash-project-deployed">
                  <label>Deployed link</label>
                  <input
                    type="text"
                    defaultValue={project.deployed_link}
                    onChange={(e) => handleInputChange(project._id, 'deployed_link', e.target.value)}
                  />
                  <button onClick={() => handleClearFileInput(project._id, 'deployed_link')}>
                    Clear
                  </button>
                  <button onClick={() => saveChanges(project._id)}>Save</button>
                </div>
                <div className="dash-project-picture">
                  <label>Main picture</label>
                  <img
                    src={project.mainPicture || 'default-image-url'} // Provide a default image URL or placeholder
                    alt="Main"
                    width={50}
                    height={50}
                    className="replace-picture"
                  />
                  <input
                    type="file"
                    onChange={(e) => handleFileChange(project._id, 'mainPicture', e.target.files[0])}
                    accept="image/*"
                    className="upload-image"
                  />
                  <button onClick={() => handleClearFileInput(project._id, 'mainPicture')}>
                    Clear
                  </button>
                  <button onClick={() => saveChanges(project._id)}>Save</button>
                </div>
                <div className="dash-project-picture">
                  <label>Picture 2</label>
                  <img
                    src={project.pic2 || 'default-image-url'}
                    alt="Picture 2"
                    width={50}
                    height={50}
                    className="replace-picture"
                  />
                  <input
                    type="file"
                    onChange={(e) => handleFileChange(project._id, 'pic2', e.target.files[0])}
                    accept="image/*"
                    className="upload-image"
                  />
                  <button onClick={() => handleClearFileInput(project._id, 'pic2')}>
                    Clear
                  </button>
                  <button onClick={() => saveChanges(project._id)}>Save</button>
                </div>
                <div className="dash-project-picture">
                  <label>Picture 3</label>
                  <img
                    src={project.pic3 || 'default-image-url'}
                    alt="Picture 3"
                    width={50}
                    height={50}
                    className="replace-picture"
                  />
                  <input
                    type="file"
                    onChange={(e) => handleFileChange(project._id, 'pic3', e.target.files[0])}
                    accept="image/*"
                    className="upload-image"
                  />
                  <button onClick={() => handleClearFileInput(project._id, 'pic3')}>
                    Clear
                  </button>
                  <button onClick={() => saveChanges(project._id)}>Save</button>
                </div>
                <div className="dash-project-picture">
                  <label>Picture 4</label>
                  <img
                    src={project.pic4 || 'default-image-url'}
                    alt="Picture 4"
                    width={50}
                    height={50}
                    className="replace-picture"
                  />
                  <input
                    type="file"
                    onChange={(e) => handleFileChange(project._id, 'pic4', e.target.files[0])}
                    accept="image/*"
                    className="upload-image"
                  />
                  <button onClick={() => handleClearFileInput(project._id, 'pic4')}>
                    Clear
                  </button>
                  <button onClick={() => saveChanges(project._id)}>Save</button>
                </div>
                <div className="dash-project-picture">
                  <label>Mobile Picture</label>
                  <img
                    src={project.mobile_pic || 'default-image-url'}
                    alt="Mobile Picture"
                    width={50}
                    height={50}
                    className="replace-picture"
                  />
                  <input
                    type="file"
                    onChange={(e) => handleFileChange(project._id, 'mobile_pic', e.target.files[0])}
                    accept="image/*"
                    className="upload-image"
                  />
                  <button onClick={() => handleClearFileInput(project._id, 'mobile_pic')}>
                    Clear
                  </button>
                  <button onClick={() => saveChanges(project._id)}>Save</button>
                </div>
              </form>
            </div>
          ))}
          <br />
          <br />
        </div>
      ) : (
        <div>loading....</div>
      )}
    </fieldset>
  );
}

export default DashboardProjects;
