import { AppBar, Box, Paper, Stack, styled, Toolbar } from '@mui/material'
import { useState } from 'react'
import SearchBar from '../SearchBar'
import Logo from './Logo'
import User from './User'

const PaperBar = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  zIndex: 1100
}))

const TopBar = () => {
  const [search, setSearch] = useState('')

  const handleSearch = () => {}
  const handleResetSearch = () => {}
  return (
    <AppBar position='static'>
      <PaperBar square>
        <Toolbar disableGutters>
          <Stack
            direction='row'
            justifyContent='space-between'
            alignContent='center'
            width='100%'
            pl={3}
            pr={3}
          >
            <Logo />
            <Box width='40%' pt={1}>
              <SearchBar
                value={search}
                onChange={handleSearch}
                onCancelSearch={handleResetSearch}
              />
            </Box>
            <User />
          </Stack>
        </Toolbar>
      </PaperBar>
    </AppBar>
  )
}

export default TopBar
