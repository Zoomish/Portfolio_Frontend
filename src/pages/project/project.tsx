/* eslint-disable multiline-ternary */
import React, { FC } from 'react'
import { TProject } from '../../utils/typesFromBackend'
import { useLocation } from 'react-router'

interface IRest {
  t: (arg0: string) => string
  projects: TProject[]
}

const Project: FC<IRest> = ({ t, projects }) => {
  const [project, setProject] = React.useState<TProject>()
  const location = useLocation()
  React.useEffect(() => {
    setProject(projects[Number(location.pathname.split('/')[3]) - 1])
  }, [location.pathname])
  return (
    <div className='w-full h-full flex flex-col justify-start items-center mt-20 z-10'>
      <p className='text-3xl'>{project?.title}</p>
      <div className='w-80 h-60 flex justify-center items-center'>
        <img src={project?.image} className='object-contain'></img>
      </div>
    </div>
  )
}
export default Project
