/* eslint-disable multiline-ternary */
import React, { FC } from 'react'
import { TProject } from '../../utils/typesFromBackend'
import { useLocation } from 'react-router'

interface IRest {
  t: (arg0: string) => string
  project: TProject[]
}

const Project: FC<IRest> = ({ t, project }) => {
  const location = useLocation()
  console.log(project[Number(location.pathname.split('/')[3]) - 1])
  return <div>AAA</div>
}
export default Project
