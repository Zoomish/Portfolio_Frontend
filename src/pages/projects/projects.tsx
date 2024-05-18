import React, { FC } from 'react'
import { ECountry, TProject } from '../../utils/typesFromBackend'
import { useLocation } from 'react-router-dom'

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
    <div className='flex flex-col justify-center items-center w-full h-full relative mb-60'>
      AAA
    </div>
  )
}
export default Projects
