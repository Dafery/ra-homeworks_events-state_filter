import React from 'react';
import  { v4 as uuidv4 } from 'uuid';

export const ProjectList = ({filteredProjects}) => {
  
  return (
    <ul className='project-list'>
      {filteredProjects.map((project) => {            
        return (
          <li className='project-item' key={uuidv4()}>
            <img className='project-img' src={project.img} />
          </li>
        );
      })}
    </ul>
  )
}
