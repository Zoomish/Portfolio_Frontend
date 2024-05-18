import { FC } from 'react'
import { TProject } from '../../utils/typesFromBackend'

interface IProject {
  project: TProject
}
const Project: FC<IProject> = ({ project }) => {
  console.log(project)

  return (
    <div className='flex flex-col border w-fit h-fit rounded cursor-pointer'>
      <img src={project.image} className='w-60 h-40 object-fill' />
      <p className='text-center text-sm'>{project.title}</p>
      <p className='text-center text-sm'>
        {project.tags
          .replaceAll(' ', '')
          .split(',')
          .map((tag) => {
            return tag + ' '
          })
          .join(' ')}
      </p>
    </div>
  )
}

export default Project
