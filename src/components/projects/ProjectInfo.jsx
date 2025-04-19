import React, { useContext, useMemo } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';
import { useSearchParams } from 'react-router-dom';

const ProjectInfo = () => {
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
    <div className="block sm:flex gap-0 sm:gap-10 mt-14">
      <div className="w-full sm:w-1/3 text-left">
        {/* Single project client details */}
        <div className="mb-7">
          <p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
            {project.ProjectInfo.ClientHeading}
          </p>
          <ul className="leading-loose">
            {project.ProjectInfo.CompanyInfo.map((info) => {
              return (
                <li
                  className="font-general-regular text-ternary-dark dark:text-ternary-light"
                  key={info.id}
                >
                  <span>{info.title}: </span>
                  <a
                    href={info.details}
                    target="_blank"
                    className={
                      info.title === 'Website' || info.title === 'Phone'
                        ? 'hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300'
                        : ''
                    }
                    aria-label="Project Website and Phone"
                  >
                    {info.details}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Single project objectives */}
        <div className="mb-7">
          <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
            {project.ProjectInfo.ObjectivesHeading}
          </p>
          <p className="font-general-regular text-primary-dark dark:text-ternary-light">
            {project.ProjectInfo.ObjectivesDetails}
          </p>
        </div>

        {/* Single project technologies */}
        <div className="mb-7">
          <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
            {project.ProjectInfo.Technologies[0].title}
          </p>
          <p className="font-general-regular text-primary-dark dark:text-ternary-light">
            {project.ProjectInfo.Technologies[0].techs.join(', ')}
          </p>
        </div>

        {/* Single project social sharing */}
        <div>
          <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
            {project.ProjectInfo.SocialSharingHeading}
          </p>
        </div>
      </div>

      {/*  Single project right section */}
      <div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
        <p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
          {project.ProjectInfo.ProjectDetailsHeading}
        </p>
        {project.ProjectInfo.ProjectDetails.map((details) => {
          return (
            <p
              key={details.id}
              className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
            >
              {details.details}
            </p>
          );
        })}
      </div>
    </div>
  ));
};

export default ProjectInfo;
