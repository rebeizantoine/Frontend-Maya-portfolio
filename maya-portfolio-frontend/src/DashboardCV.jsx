import React, { useState,useEffect } from 'react';
import axios from 'axios';

function DashboardCV() {
  const [cvFile, setCVFile] = useState(null);
  const [cv,setCv]=useState([]);
  const [doFetch,setDoFetch]=useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/cv');
        setCv(response.data.data);
      } catch (err) {
        console.error(err);
      }
    };
    if (doFetch) {
      fetchData();
      setDoFetch(false);
    }
  }, [doFetch]);
  const handleUploadCV = async (e) => {
    try {
      if (!cvFile) {
        console.error('Please select a CV file.');
        return;
      }
  
      const formData = new FormData();
      formData.append('image', cvFile);
  
      const imgBbResponse = await axios.post(
        'https://api.imgbb.com/1/upload?key=91d27c7f35f4cd3885f4ada2ac3d2c1c',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      const newCv = {
        cv: imgBbResponse.data.data.url,
      };
      await axios.put(`http://localhost:5000/api/cv/update/${e.target.name}`, newCv, {
        headers: { 'Content-Type': 'application/json' },
      });
      setDoFetch(!doFetch);
      console.log('CV uploaded to ImgBB and stored in the database:', newCv);
    } catch (error) {
      console.error('Error uploading CV and storing in the database:', error);
    }
  };
  

  return (
    <fieldset className='cv-fieldset'>
      <div className="cv" id="cv">
        <h1 className='dash-h1'>CV</h1>
        <div className="dash-upload-cv">
        {cv.length>0?(<img src={cv[0].cv} alt="cv-image" width={50} height={50} className="replace-picture" />):(<div>loading...</div>)}
          <p>Upload your CV (pdf file)</p>
          <input type="file" accept=".pdf" onChange={(e) => setCVFile(e.target.files[0])} />
          <button name={cv[0]?._id} onClick={handleUploadCV}>Save</button>
        </div>
      </div>
    </fieldset>
  );
}
export default DashboardCV;
