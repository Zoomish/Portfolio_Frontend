import { FC } from 'react'
import ImageNoPhoto from '../../assets/images/no_photo.png'
import { TProject } from '../../utils/typesFromBackend'
import { useHistory, useLocation } from 'react-router'

interface IProject {
  project: TProject
  dark: boolean
}
const ProjectView: FC<IProject> = ({ project, dark }) => {
  const history = useHistory()
  const location = useLocation()
  const getProject = (): void => {
    history.push(`${location.pathname}/${project.id}`)
  }
  return (
    <div
      className={`flex flex-col border w-60 h-fit rounded cursor-pointer ${dark ? '' : 'bg-white'}`}
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
