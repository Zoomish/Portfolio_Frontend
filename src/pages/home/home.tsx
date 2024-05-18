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
  const expirience = Math.ceil(
    (new Date(new Date().toISOString().split('T')[0]).getTime() -
      new Date(user.expirience).getTime()) /
      (1000 * 60 * 60 * 24 * 30)
  )
  const age = (age: number): string => {
    let txt
    let count = age % 100
    if (count >= 5 && count <= 20) {
      txt = 'лет'
    } else {
      count = count % 10
      if (count === 1) {
        txt = 'год'
      } else if (count >= 2 && count <= 4) {
        txt = 'года'
      } else {
        txt = 'лет'
      }
    }
    return txt
  }
  const month = (month: number): string => {
    if (month === 1) {
      return 'месяц'
    } else if (month > 1 && month < 5) {
      return 'месяца'
    } else if (month > 4) {
      return 'месяцев'
    } else {
      return ''
    }
  }
  return (
    <div className='flex flex-col justify-center items-center w-full h-full'>
      <p>
        Привет, я {user?.name}, Frontend Developer с опытом работы&nbsp;
        {Math.floor(expirience / 12)} {age(Math.floor(expirience / 12))}&nbsp;
        {expirience % 12} {month(expirience % 12)}
      </p>
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
