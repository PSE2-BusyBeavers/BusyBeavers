import TabContext from './TabContext'

interface Props {
  value: string
  children?: React.ReactNode
}

const NavigationContext = ({ value, children }: Props) => {
  return <TabContext.Provider value={value}>{children}</TabContext.Provider>
}

export default NavigationContext
