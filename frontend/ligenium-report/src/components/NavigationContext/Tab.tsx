import { FC, useContext } from 'react'
import TabContext from './TabContext'

interface Props {
  value: string
  children?: React.ReactNode
}

const Tab = ({ value, children }: Props) => {
  const tab = useContext(TabContext)

  if (value !== tab) return null
  return <>{children}</>
}

export default Tab
