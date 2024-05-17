import React, { FC, useContext } from 'react'
import { ECountry, TUser } from '../../utils/typesFromBackend'
import * as userApi from '../../utils/api/user-api'
import { useLocation } from 'react-router-dom'
import { NotificationContext } from '../../components/notification-provider/notification-provider'

interface IMenu {
  pathRest: string
  t: (arg0: string) => string
  language: ECountry
}

const Home: FC<IMenu> = ({ pathRest, t }) => {
  const { openNotification } = useContext(NotificationContext)

  const [data, setData] = React.useState<TUser>()
  const location = useLocation()

  React.useEffect(() => {
    userApi
      .getAllUsers()
      .then((res) => {
        setData(res[0])
      })
      .catch((e) => openNotification(e, 'topRight'))
    const currentPath = location.pathname
    window.localStorage.setItem('initialRoute', currentPath)
  }, [])
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>{data?.name}</div>
  )
}
export default Home
