import React, { useContext, useMemo } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';
import { useSearchParams } from 'react-router-dom';

const ProjectGallery = () => {
  const { singleProjectData } = useContext(SingleProjectContext);
  const [searchParams] = useSearchParams();
  const currentProject = useMemo(() => {
    return searchParams.get('title');
  }, [searchParams]);

  const modifiedProjectData = useMemo(() => {
    return (
      singleProjectData?.filter(
        (item) => item?.ProjectHeader?.mainTitle === currentProject
      ) || []
    );
  }, [singleProjectData, currentProject]);

  return modifiedProjectData?.map((project) => (
    <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
      {project.ProjectImages.map((project) => {
        return (
          <div className="mb-10 sm:mb-0" key={project.id}>
            <img
              src={project.img}
              className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
              alt={project.title}
              key={project.id}
            />
          </div>
        );
      })}
    </div>
  ));
};

export default ProjectGallery;
