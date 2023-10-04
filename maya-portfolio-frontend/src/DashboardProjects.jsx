import React from 'react';
import replacePicture from './replace-picture.png'
import { useEffect,useState,useRef } from 'react';
import axios from 'axios';

function DashboardProjects() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const videoLinkRef=useRef(null);
  const deployedLinkRef=useRef(null);
  const mainPicRef=useRef(null);
  const pic2Ref=useRef(null);
  const pic3Ref=useRef(null);
  const pic4Ref=useRef(null);
  const mobilePicRef=useRef(null);
  /*const [ourData,setOurData]=useState([]);
const [doFetch,setDoFetch]=useEffect(false);
const fetchData=async()=>{
  try {
    const response = await fetch('http://localhost:5000/api/projects');
    const dataR = await response.json();
    setOurData(dataR.data);
  } catch (err) {
    console.error(err);
  }
};
  useEffect(()=>{
    fetchData();
  },[doFetch]);*/
  async function uploadImageToImgbb(imageFile) {
    const formData = new FormData();
    formData.append("image", imageFile);
  
    const response = await fetch("https://api.imgbb.com/1/upload?key=91d27c7f35f4cd3885f4ada2ac3d2c1c", {
      method: "POST",
      body: formData,
    });
  
    const data = await response.json();
    return data.data.url;
  }
  const addProject = async (e) => {
    e.preventDefault();
    try {
      const mainPictureUrl = await uploadImageToImgbb(mainPicRef.current.files[0]);
      const pic2Url = await uploadImageToImgbb(pic2Ref.current.files[0]);
      const pic3Url = await uploadImageToImgbb(pic3Ref.current.files[0]);
      const pic4Url = await uploadImageToImgbb(pic4Ref.current.files[0]);
      const mobilePicUrl=await uploadImageToImgbb(mobilePicRef.current.files[0]);
      const project = {
        title: titleRef.current.value,
        subtitle: subtitleRef.current.value,
        description: descriptionRef.current.value,
        video_link: videoLinkRef.current.value,
        deployed_link: deployedLinkRef.current.value,
        mainPicture: mainPictureUrl,
        pic2: pic2Url,
        pic3: pic3Url,
        pic4: pic4Url,
        mobile_pic:mobilePicUrl
      };
      const addResponse = await axios.post(
        'http://localhost:5000/api/projects/add',
        JSON.stringify(project), 
        {
          headers: { 'Content-Type': 'application/json' }, 
        }
      );
      
      if (!addResponse) {
        throw new Error('An error occurred while adding the skill');
      }
      console.log(addResponse);
    } catch (error) {
      console.error(error);
    }
  };
  const handleSave=(ref)=>{
    console.log(ref.current.value);
  }
  const handleDelete = (ref) => {
    ref.current.value = ''; 
  };
  return (
    <fieldset>
      <div className="projects" id="projects">
        <h1>Projects</h1>

        <div className="single-project">
          <form onSubmit={addProject}>
          <p>PROJECT 1:</p>
          <div className="project-title">
            <label>Title</label>
            <input type="text"  ref={titleRef}/>
            <button onClick={() => handleDelete(titleRef)}>Delete</button>
            <button onClick={() => handleSave(titleRef)}>Save</button>
          </div>
          <div className="project-subtitle">
            <label>Subtitle</label>
            <input type="text" ref={subtitleRef}/>
            <button onClick={() => handleDelete(subtitleRef)}>Delete</button>
            <button onClick={() => handleSave(subtitleRef)}>Save</button>
          </div>
          <div className="project-description">
            <label>Description</label>
            <input type="text" ref={descriptionRef}/>
            <button onClick={() =>handleDelete(descriptionRef)}>Delete</button>
            <button onClick={() => handleSave(descriptionRef)}>Save</button>
          </div>
          <div className="project-video">
            <label>Video demo link</label>
            <input type="text" ref={videoLinkRef} />
            <button onClick={() => handleDelete(videoLinkRef)}>Delete</button>
            <button onClick={() => handleSave(videoLinkRef)}>Save</button >
          </div>
          <div className="project-deployed">
            <label>Deployed link</label>
            <input type="text" ref={deployedLinkRef}/>
            <button onClick={() => handleDelete(deployedLinkRef)}>Delete</button>
            <button onClick={() => handleSave(deployedLinkRef)}>Save</button>
          </div>
          <div className="project-picture">
            <label>Main picture</label>
            <img src={replacePicture} alt="skill-icon" className='replace-picture' />
            <input type="file" accept="image/*" className='upload-image' ref={mainPicRef} />
            <button onClick={() => handleDelete(mainPicRef)}>Delete</button>
            <button onClick={() => handleSave(mainPicRef)}>Save</button>
          </div>
          <div className="project-picture">
            <label>Picture 2</label>
            <img src={replacePicture} alt="skill-icon" className='replace-picture' />
            <input type="file" accept="image/*" className='upload-image' ref={pic2Ref} />
            <button onClick={() => handleDelete(pic2Ref)}>Delete</button>
             <button onClick={() => handleSave(pic2Ref)}>Save</button>
          </div>  
          <div className="project-picture">
            <label>Picture 3</label>
            <img src={replacePicture} alt="skill-icon" className='replace-picture' />
            <input type="file" accept="image/*" className='upload-image' ref={pic3Ref} />
            <button>Delete</button>
            <button onClick={() => handleSave(pic3Ref)}>Save</button>
          </div>
          <div className="project-picture">
            <label>Picture 4</label>
            <img src={replacePicture} alt="skill-icon" className='replace-picture' />
            <input type="file" accept="image/*" className='upload-image' ref={pic4Ref}/>
            <button>Delete</button>
            <button onClick={() => handleSave(pic4Ref)}>Save</button>
          </div>
          <div className="project-picture">
            <label>Picture 4</label>
            <img src={replacePicture} alt="skill-icon" className='replace-picture' />
            <input type="file" accept="image/*" className='upload-image'  ref={mobilePicRef}/>
            <button>Delete</button>
            <button onClick={() => handleSave(mobilePicRef)}>Save</button>
          </div>
          <div><button type='submit'>add project</button></div>
          </form>
        </div>
        <br />
        <br />
      </div>
    </fieldset>
  );
}

export default DashboardProjects;
