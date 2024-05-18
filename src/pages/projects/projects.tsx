import React, { FC } from 'react'
import { ECountry, TProject } from '../../utils/typesFromBackend'
import { useLocation } from 'react-router-dom'
import Project from '../../components/project/project'

interface IMenu {
  pathRest: string
  t: (arg0: string) => string
  language: ECountry
  projects: TProject[]
  dark: boolean
}

const Projects: FC<IMenu> = ({ projects, dark }) => {
  const location = useLocation()

  console.log(projects)

  React.useEffect(() => {
    const currentPath = location.pathname
    window.localStorage.setItem('initialRoute', currentPath)
  }, [])
  return (
    <div className='flex flex-col justify-center w-full h-full'>
      <p className='text-3xl text-center mb-10'>Мои проекты</p>
      <div className='flex justify-center w-full h-full gap-2 relative'>
        {projects.map((project, index) => (
          <Project key={index} project={project}></Project>
        ))}
      </div>
    </div>
  )
}
export default Projects
