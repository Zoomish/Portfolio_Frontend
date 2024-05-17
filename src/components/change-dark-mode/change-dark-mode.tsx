import React, { FC } from 'react'

interface IChangeLanguage {
  dark: boolean
  changeDark: () => void
}
const ChangeDark: FC<IChangeLanguage> = ({ dark, changeDark }) => {
  React.useEffect(() => {}, [])

  return <div>AAA</div>
}
export default ChangeDark
