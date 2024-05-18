import React, { FC } from 'react'
import { ECountry, TUser } from '../../utils/typesFromBackend'
import { useLocation } from 'react-router-dom'

interface IMenu {
  pathRest: string
  t: (arg0: string) => string
  language: ECountry
  user: TUser
}

const Home: FC<IMenu> = ({ user }) => {
  const location = useLocation()

  React.useEffect(() => {
    const currentPath = location.pathname
    window.localStorage.setItem('initialRoute', currentPath)
  }, [])
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <a
        href='https://drive.google.com/uc?export=download&id=17lSIxgIi6vfyyz_VfC95nR169hy639FC'
        className='btn'
        download
      >
        Download CV
      </a>
      {user?.name}
    </div>
  )
}
export default Home
