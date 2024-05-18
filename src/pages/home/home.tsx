import React, { FC } from 'react'
import { ECountry, TUser } from '../../utils/typesFromBackend'
import { useLocation } from 'react-router-dom'
import { Button } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'

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
    <div className='flex flex-col justify-center items-center w-full h-full'>
      <p>{user?.name}</p>
      <Button
        type='primary'
        className='flex items-center'
        shape='round'
        href='https://drive.google.com/uc?export=download&id=17lSIxgIi6vfyyz_VfC95nR169hy639FC'
        icon={<DownloadOutlined />}
        size={'large'}
      >
        Download CV
      </Button>
    </div>
  )
}
export default Home
