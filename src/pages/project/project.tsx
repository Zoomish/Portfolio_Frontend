/* eslint-disable multiline-ternary */
import React, { FC } from 'react'
import { ECountry } from '../../utils/typesFromBackend'

interface IRest {
  t: (arg0: string) => string
  language: ECountry
  pathRest: string
}

const Project: FC<IRest> = ({ t, pathRest, language }) => {
  return (
    <div>AAA</div>
  )
}
export default Project
