import React, { FC } from 'react'
import { ECountry } from '../../utils/typesFromBackend'
import { useLocation } from 'react-router'
interface IContact {
  pathRest: string
  t: (arg0: string) => string
  language: ECountry
}

const Contact: FC<IContact> = ({ pathRest, t }) => {
  const location = useLocation()
  React.useEffect(() => {
    const currentPath = location.pathname
    window.localStorage.setItem('initialRoute', currentPath)
  }, [])
  return (
    <div className='flex flex-col justify-center  w-full h-full z-10'>
      <p className='text-3xl text-center mb-10'>{t('my_projects')}</p>
      <div className='flex justify-center flex-wrap w-full h-full gap-2 relative'></div>
    </div>
  )
}
export default Contact
