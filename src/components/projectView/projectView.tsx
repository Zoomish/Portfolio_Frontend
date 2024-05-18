import { FC } from 'react'
import ImageNoPhoto from '../../assets/images/no_photo.png'
import { TProject } from '../../utils/typesFromBackend'
import { useHistory } from 'react-router'

interface IProject {
  project: TProject
}
const ProjectView: FC<IProject> = ({ project }) => {
  const history = useHistory()
  console.log(project)

  const getProject = (): void => {
    history.push(`${project.id}`)
  }
  return (
    <div
      className='flex flex-col border w-60 h-fit rounded cursor-pointer'
      onClick={getProject}
    >
      <img
        src={project.image}
        className='w-full h-40 object-fill'
        onError={(e) => (e.currentTarget.src = ImageNoPhoto)}
      />
      <p className='text-center text-sm mt-2'>{project.title}</p>
      <p className='text-center text-sm mt-1'>
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

export default ProjectView
