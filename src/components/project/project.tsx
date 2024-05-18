import { FC } from 'react'
import ImageNoPhoto from '../../assets/images/no_photo.png'
import { TProject } from '../../utils/typesFromBackend'

interface IProject {
  project: TProject
}
const Project: FC<IProject> = ({ project }) => {
  console.log(project)

  return (
    <div className='flex flex-col border w-60 h-fit rounded cursor-pointer'>
      <img
        src={project.image}
        className='w-full h-40 object-fill'
        onError={(e) => (e.currentTarget.src = ImageNoPhoto)}
      />
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
