import React, { useState, useEffect } from 'react';
import replaceIcon from './replace-icon.png';
import axios from 'axios';

function DashboardSkills() {
  const [doFetch, setDoFetch] = useState(true);
  const [ourData, setOurData] = useState([]);
  const [skillName, setSkillName] = useState('');
  const [showNewSkillInput, setShowNewSkillInput] = useState(false);

  const [selectedFile, setSelectedFile] = useState(null);
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/skills');
      const dataR = await response.json();
      setOurData(dataR.data);
      if (ourData.length > 0) {
        // setImg(ourData[0].image);
        // setSkillName(ourData[0].name);
      }
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, [doFetch]);

  const changeSkillName = (e) => {
    setSkillName(e.target.value);
  };

  const handleDelete = async (e) => {
    try {
      let Id = e.target.name;
      const d = await fetch(`http://localhost:5000/api/skills/remove/${Id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });
      if (!d.ok) throw new Error('An error occurred');
      let res = await d.json();
      setDoFetch(!doFetch);
      // console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  const changeImg = (e) => {
    setSelectedFile(e.target.files[0]);
  };
  const submitSkill = async (e) => {
    e.preventDefault();
    console.log(selectedFile);
    if (selectedFile) {
      const formData = new FormData();
      formData.append('image', selectedFile);
      try {
        const response = await axios.post('https://api.imgbb.com/1/upload?key=91d27c7f35f4cd3885f4ada2ac3d2c1c', formData);
        const imageUrl = response.data.data.url;
        //  setImg(imageUrl);
        console.log('Image uploaded successfully:', imageUrl);
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    } else {
      console.error('No file selected');
    }
  };
  const handleAddSkill = () => {
    setShowNewSkillInput(true);
  };
  const handleCancle = () => {
    setShowNewSkillInput(!showNewSkillInput);
    setDoFetch(!doFetch);
 }
  const addSkill = async () => {
    try {
      const formData = new FormData();
      formData.append('image', selectedFile);

      const imageResponse = await axios.post('https://api.imgbb.com/1/upload?key=91d27c7f35f4cd3885f4ada2ac3d2c1c', formData);
      const imageUrl = imageResponse.data.data.url;

      const skillData = {
        name: skillName,
        image: imageUrl,
      };
      const skillResponse = await axios.post('http://localhost:5000/api/skills/add', skillData, { headers: { 'Content-Type': 'application/json' }, })
      if (!skillResponse)
        throw new Error('An error occurred while adding the skill');
      console.log(skillResponse);
      setShowNewSkillInput(false);
      setDoFetch(!fetchData);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <fieldset>
      <div className="dash-skills" id="skills">
        <h1 className='dash-h1'>Skills</h1>
        <div className='dash-all-skills'>
        {ourData.length > 0 && (ourData.map((item, index) => (
          <div className="dash-single-skill" key={item._id}>
            <p>SKILL {index + 1}:</p>
            <div className="dash-skill-name">
              <p>Name:{item.name}</p>
            </div>
            <div className="dash-skill-icon">
              <label>Icon</label>
              <img src={item.image} alt="skill-icon" className="replace-icon" width={50} height={50} />
            </div>
            <button name={item._id} onClick={handleDelete}>
                Delete
              </button>
          </div>
        )))}
        {showNewSkillInput ? (
          <div className="dash-single-skill">
            <p>New Skill:</p>
            <div className="dash-skill-name">
              <label>Name</label>
              <input type="text" onChange={changeSkillName} />
            </div>
            <div className="dash-skill-icon">
              <label>Icon</label>
              <img src={replaceIcon} alt="skill-icon" className="replace-icon" width={50} height={50} />
              <input type="file" accept="image/*" className="upload-image" onChange={changeImg} />
            </div>
            <button onClick={handleCancle}>Cancel</button>
            <button onClick={addSkill}>ADD</button>
          </div>
        ) : !showNewSkillInput && (
          <button onClick={handleAddSkill}>ADD SKILL</button>
        )}
                  </div>
      </div>
    </fieldset>

  );
 
}
export default DashboardSkills;
