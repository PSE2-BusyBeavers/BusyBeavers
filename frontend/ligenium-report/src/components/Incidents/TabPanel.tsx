import { Box } from '@mui/material'
import React from 'react'

interface Props {
  children?: React.ReactNode
  index: number
  value: number
}

export default function TabPanel (props: Props) {
  const { children, value, index, ...other } = props

  return (
    <Box
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      height='100%'
    >
      {value === index && <Box sx={{ p: 3, height: '100%' }}>{children}</Box>}
    </Box>
  )
}

function a11yProps (index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}
