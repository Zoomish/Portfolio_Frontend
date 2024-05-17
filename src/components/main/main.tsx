/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React, { useState, useEffect, FC, useContext } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Layout } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import fullscreenIcon from '../../assets/images/fullscreen.svg'
import { ECountry, TUser } from '../../utils/typesFromBackend'
import NotFound from '../../pages/not-found/not-found'
import { useTranslation } from 'react-i18next'
import { NotificationProvider } from '../notification-provider/notification-provider'
import i18n from '../i18n/i18n'
import ChoiseLanguage from '../choise-language/choise-language'
import Sidebar from '../sidebar/sidebar'
import Restaurant from '../../pages/restaurant/restaurant'
import Admins from '../../pages/admins/admins'
import Admin from '../../pages/admin/admin'
import Home from '../../pages/home/home'
import * as userApi from '../../utils/api/user-api'
import { NotificationContext } from '../../components/notification-provider/notification-provider'
import ChangeDark from '../change-dark-mode/change-dark-mode'

const { Header, Sider, Content } = Layout

interface IMain {
  pathRest: string
}

const Main: FC<IMain> = ({ pathRest }) => {
  const { openNotification } = useContext(NotificationContext)
  const [user, setUser] = useState<TUser>()
  const [dark, setDark] = useState<boolean>(false)
  const [language, setLanguage] = useState<ECountry>(
    (localStorage.getItem('language') as ECountry) ?? ECountry.RU
  )
  const { t } = useTranslation()
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/no-unused-vars
  const changeLanguage = (lng: ECountry) => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    i18n.changeLanguage(lng)
    setLanguage(lng)
    localStorage.removeItem('formData')
  }

  React.useEffect(() => {
    userApi
      .getAllUsers()
      .then((res) => {
        setUser(res)
      })
      .catch((e) => openNotification(e, 'topRight'))
  }, [])

  const changeDark = (): void => {
    setDark(!dark)
    localStorage.setItem('dark', String(!dark))
  }

  React.useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    i18n.changeLanguage(language)
  }, [])
  const [collapse, setCollapse] = useState(false)
  let flag = false
  if (typeof window !== 'undefined') {
    window.addEventListener('resize', function resizeHandler() {
      if (window.innerWidth < 768 && !flag) {
        if (document.fullscreenElement != null) {
          void document.exitFullscreen()
        } else {
          void document.body.requestFullscreen()
        }
        setCollapse(true)
        flag = true
      } else if (window.innerWidth >= 768 && flag) {
        setCollapse(false)
        flag = false
      }
    })
  }
  useEffect(() => {
    setDark(Boolean(localStorage.getItem('dark')))
    window.innerWidth <= 760 ? setCollapse(true) : setCollapse(false)
  }, [])

  const handleToggle = (event: any): void => {
    event.preventDefault()
    collapse ? setCollapse(false) : setCollapse(true)
  }

  function handleClickFullScreen(): void {
    if (document.fullscreenElement != null) {
      void document.exitFullscreen()
    } else {
      void document.body.requestFullscreen()
    }
  }
  const color = {
    background: dark ? '#000' : '#fff',
    color: dark ? '#fff' : '#000'
  }

  return (
    <NotificationProvider>
      <Router>
        <Layout>
          <Sider
            trigger={null}
            collapsible
            collapsed={collapse}
            style={color}
            width={'17rem'}
          >
            <Sidebar style={color} pathRest={pathRest} t={t} />
          </Sider>
          <Layout
            style={{
              ...color,
              paddingLeft: '30px',
              paddingRight: '30px'
            }}
          >
            <Header
              className='siteLayoutBackground'
              style={{
                padding: 0,
                ...color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              {React.createElement(
                collapse ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: 'trigger',
                  onClick: handleToggle,
                  style: color
                }
              )}
              <ChoiseLanguage
                dark={dark}
                style={color}
                t={t}
                changeLanguage={changeLanguage}
              />
              <ChangeDark style={color} dark={dark} changeDark={changeDark} />
              <div
                className='fullscreen-btn'
                onClick={handleClickFullScreen}
                title='На весь экран'
                style={{ cursor: 'pointer' }}
              >
                <img src={fullscreenIcon} alt='На весь экран' />
              </div>
            </Header>
            <Content
              style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 'calc(100vh - 114px)',
                ...color
              }}
            >
              <Switch>
                <Route path={`/:${pathRest}/admins`} exact>
                  <Admins pathRest={pathRest} t={t} language={language} />
                </Route>
                <Route path={`/:${pathRest}/admin/:adminId`} exact>
                  <Admin pathRest={pathRest} t={t} />
                </Route>
                <Route path={`/:${pathRest}/home`} exact>
                  {user ? (
                    <Home
                      pathRest={pathRest}
                      t={t}
                      language={language}
                      user={user}
                    />
                  ) : (
                    <></>
                  )}
                </Route>
                <Route path={`/:${pathRest}/restaurant/:restaurantId`} exact>
                  <Restaurant pathRest={pathRest} t={t} language={language} />
                </Route>
                <Route path='*'>
                  <NotFound t={t} />
                </Route>
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Router>
    </NotificationProvider>
  )
}

export default Main
