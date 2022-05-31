import { Box, Tab, Tabs } from '@mui/material'
import React from 'react'

type Props = {
  value: number
  onChange: (tab: number) => void
  tabs: string[]
}

function a11yProps (index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

function ControlBar ({ value, onChange, tabs }: Props) {
  const handleChange = (_event: React.SyntheticEvent, tab: number) => {
    onChange(tab)
  }

  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label='carrier-tab-navigation'
      >
        {tabs.map((label, index) => (
          <Tab label={label} {...a11yProps(index)} />
        ))}
      </Tabs>
    </Box>
  )
}

export default ControlBar
