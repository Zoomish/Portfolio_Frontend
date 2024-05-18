/* eslint-disable multiline-ternary */
import React, { FC } from 'react'
import { TProject } from '../../utils/typesFromBackend'
import { useLocation } from 'react-router'
import { Button } from 'antd'
import { EyeOutlined } from '@ant-design/icons'

interface IRest {
  t: (arg0: string) => string
  projects: TProject[]
}

const Project: FC<IRest> = ({ t, projects }) => {
  const [project, setProject] = React.useState<TProject>()
  const location = useLocation()
  React.useEffect(() => {
    setProject(projects[Number(location.pathname.split('/')[3]) - 1])
  }, [location.pathname])
  return (
    <div className='w-full h-full flex flex-col justify-start items-center mt-20 z-10'>
      <img src={project?.image} className='w-[450px] h-60 object-contain'></img>
      <p className='text-3xl'>
        {t('title')}: {project?.title}
      </p>
      <p className='text-xl'>
        {t('description')}: {project?.description}
      </p>
      <p className='text-xl'>
        {t('tehnologies')}:{' '}
        {project?.tags
          .replaceAll(' ', '')
          .split(',')
          .map((tag) => {
            return tag + ' '
          })}
      </p>
      <Button type="primary" icon={<EyeOutlined />} className='flex justify-center items-center'>{t('overview')}</Button>
    </div>
  )
}
export default Project
