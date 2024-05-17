import { FC } from 'react'
import { Menu } from 'antd'
import { UserOutlined, ContactsOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router'

interface ISidebar {
  pathRest: string
  t: (arg0: string) => string
  style: any
}
const Sidebar: FC<ISidebar> = ({ style, pathRest, t }) => {
  const history = useHistory()
  const handleHomeClick = (): void => {
    history.push(`/${pathRest}/home`)
  }
  const handleAdminsClick = (): void => {
    history.push(`/${pathRest}/admins`)
  }

  return (
    <>
      <div style={{ height: '32px', margin: '16px' }}></div>
      <Menu
        theme='light'
        mode='inline'
        style={{ textAlign: 'left', ...style }}
        defaultSelectedKeys={['1']}
      >
        <Menu.Item key='1' onClick={handleHomeClick}>
          <UserOutlined />
          <span>{t('main')}</span>
        </Menu.Item>
        <Menu.Item key='2' onClick={handleAdminsClick}>
          <ContactsOutlined />
          <span>{t('contacts')}</span>
        </Menu.Item>
      </Menu>
    </>
  )
}

export default Sidebar
