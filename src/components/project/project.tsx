import { FC } from 'react'
import { TProject } from '../../utils/typesFromBackend'

interface IProject {
  project: TProject
}
const Project: FC<IProject> = ({ project }) => {
  return (
    <>
      <div>AAA</div>
    </>
  )
}

export default Project
