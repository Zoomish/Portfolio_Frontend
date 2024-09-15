import { FC } from 'react'
import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'

const Loading: FC = () => {
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <Spin indicator={<LoadingOutlined style={{ fontSize: 96 }} spin />} />
    </div>
  )
}
export default Loading
