import { Button } from 'antd'
import React, { FC } from 'react'
import { SunOutlined, MoonOutlined } from '@ant-design/icons'

interface IChangeLanguage {
  dark: boolean
  changeDark: () => void
}
const ChangeDark: FC<IChangeLanguage> = ({ dark, changeDark }) => {
  React.useEffect(() => {
    console.log(dark)
  }, [dark])

  return (
    <Button
      icon={dark ? <MoonOutlined /> : <SunOutlined />}
      onClick={() => changeDark()}
    >
      Search
    </Button>
  )
}
export default ChangeDark
