/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React, { useState, useEffect, FC } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Layout } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import fullscreenIcon from '../../assets/images/fullscreen.svg'
import { ECountry } from '../../utils/typesFromBackend'
import NotFound from '../../pages/not-found/not-found'
import { useTranslation } from 'react-i18next'
import { NotificationProvider } from '../notification-provider/notification-provider'
import i18n from '../i18n/i18n'
import ChoiseLanguage from '../choise-language/choise-language'
import Sidebar from '../sidebar/sidebar'
import Restaurants from '../../pages/restaurants/restaurants'
import Restaurant from '../../pages/restaurant/restaurant'
import Admins from '../../pages/admins/admins'
import Admin from '../../pages/admin/admin'

const { Header, Sider, Content } = Layout

interface IMain {
  token: string
  pathRest: string
  setToken: (token: any) => void
}

const Main: FC<IMain> = ({ token, pathRest, setToken }) => {
  // change to TRest
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
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    i18n.changeLanguage(language)
  }, [])
  const [collapse, setCollapse] = useState(false)

  useEffect(() => {
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

  return (
    <NotificationProvider>
      <Router>
        <Layout>
          <Sider
            trigger={null}
            collapsible
            collapsed={collapse}
            style={{ background: '#fff' }}
            width={'17rem'}
          >
            <Sidebar pathRest={pathRest} t={t} />
          </Sider>
          <Layout
            style={{
              background: '#fff',
              paddingLeft: '30px',
              paddingRight: '30px'
            }}
          >
            <Header
              className='siteLayoutBackground'
              style={{
                padding: 0,
                background: '#fff',
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
                  style: { color: '#000' }
                }
              )}
              <ChoiseLanguage t={t} changeLanguage={changeLanguage} />
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
                background: '#fff'
              }}
            >
              <Switch>
                <Route
                  path={`/:${pathRest}/admins`}
                  exact
                >
                  <Admins
                    token={token}
                    pathRest={pathRest}
                    t={t}
                    language={language}
                  />
                </Route>
                <Route
                  path={`/:${pathRest}/admin/:adminId`}
                  exact
                >
                  <Admin token={token} pathRest={pathRest} t={t} />
                </Route>
                <Route
                  path={`/:${pathRest}/restaurants`}
                  exact
                >
                  <Restaurants
                    token={token}
                    pathRest={pathRest}
                    t={t}
                    language={language}
                  />
                </Route>
                <Route
                  path={`/:${pathRest}/restaurant/:restaurantId`}
                  exact
                >
                  <Restaurant
                    token={token}
                    pathRest={pathRest}
                    t={t}
                    language={language}
                  />
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
