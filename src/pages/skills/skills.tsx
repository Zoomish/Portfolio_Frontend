import React, { FC } from 'react'
import { ECountry, TSkill } from '../../utils/typesFromBackend'
import { useLocation } from 'react-router'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { FreeMode } from 'swiper/modules'

interface ISkill {
  t: (arg0: string) => string
  language: ECountry
  skills: TSkill[]
}

const Skill: FC<ISkill> = ({ t, skills }) => {
  const location = useLocation()
  React.useEffect(() => {
    const currentPath = location.pathname
    window.localStorage.setItem('initialRoute', currentPath)
  }, [])
  return (
    <div className='flex flex-col justify-center  w-full h-full z-10'>
      <p className='text-3xl text-center mb-10'>{t('my_skills')}</p>
      <div className='flex justify-center items-center flex-wrap w-full h-full gap-2 relative'>
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          loop={true}
          modules={[FreeMode]}
          className='w-full h-40 flex items-center justify-center mb-40'
        >
          {skills.map((skill: TSkill, index) => {
            return (
              <SwiperSlide
                key={index}
                className='flex justify-center items-center flex-col '
              >
                <div className='flex justify-center items-center flex-col w-40 h-40'>
                  <img src={skill.image} alt={skill.title} className='w-20 h-20' />
                  <p className='text-2xl'>{skill.title}</p>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}
export default Skill
