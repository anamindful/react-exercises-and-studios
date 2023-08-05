import data from './../data.json';
import { useState } from 'react';

function MyProjects(){
    const [index, setIndex] = useState(0);
    const projectList = data.projects;
    const currentProject = projectList[index];

    function handleClick() {
        if (index < projectList.length - 1) {
          setIndex(index + 1);
        } else {
          setIndex(0);
        }
      }

    return (
        <div>
          <button onClick={handleClick}>Next</button>
          <div>
            <h2>{currentProject.title}</h2>
            <p>How: {currentProject.how}</p>
            <p>Goal: {currentProject.goal}</p>
            <p>Level: {currentProject.level}</p>
          </div>
        </div>
      );
    };
    
    export default MyProjects;