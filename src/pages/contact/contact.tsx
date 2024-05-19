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
      <p className='md:text-4xl text-2xl text-center mb-10'>
        {t('my_contacts')}
      </p>
      <div className='flex justify-center items-center flex-wrap w-full h-full relative mb-40'>
        <div className='sm:w-1/2 w-full h-40 flex justify-center'><p>{t('email-address')}</p></div>
        <div className='sm:w-1/2 w-full h-40 flex justify-center'>F</div>
        <div className='sm:w-1/2 w-full h-40 flex justify-center'>F</div>
        <div className='sm:w-1/2 w-full h-40 flex justify-center'>F</div>
      </div>
    </div>
  )
}
export default Contact
