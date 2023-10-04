import React, { useState, useEffect } from 'react';

function Experience() {
    const [experienceData, setExperienceData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('http://localhost:5000/api/experiences');
                const data = await response.json();
                if (data.data.length > 0) {
                    setExperienceData(data.data);
                }
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, []);

    return (
        <div className="experience" id="experience">
            <h1>EXPERIENCE</h1>
            <div className="experiences-container">
                {experienceData.map((experience, index) => (
                    <div className="experience-details" key={experience._id}>
                        <p className="experience-date">{experience.date}</p>
                        <p className="experience-description">{experience.ex_txt}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

<<<<<<< HEAD
export default Experience;
=======
export default Experience;
>>>>>>> dabbf839db3e37b32d23669e38bb36fafc1c3841
