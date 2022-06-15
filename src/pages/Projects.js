import { useState, useEffect } from "react";

const Projects = (props) => {
  const [ projects, setProjects ] = useState(null);

  const getProjectsData = async () => {
    const response = await fetch(props.URL + 'projects');
    const data = await response.json();
    setProjects(data);
  }
  useEffect(() => {
    getProjectsData();
  }, [])

  const loaded = () => {
    return projects.map((project) => (
      <div className="project">
        <h1>{project.name}</h1>
        <img className="img" src={project.image} />
        <a href={project.git}>
          <button>GitHub</button>
        </a>
        <a href={project.live}>
          <button>Live Site</button>
        </a>
      </div>
    ));
  };

  return projects ? loaded() : <h1>Loading...</h1>
}

export default Projects;