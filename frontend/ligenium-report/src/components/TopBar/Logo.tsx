import { Avatar, Stack, Typography } from '@mui/material'
import logo from './../../assets/Logo.png'

const Logo = () => {
  return (
    <Stack direction="row" alignItems="center" sx={{mr: 10}}>
      <Avatar variant="square" sx={{background: 'transparent'}}>
        <img src={logo} width="80%"/>
      </Avatar>
      <Typography>
        Ligenium Praedictius
        </Typography>
    </Stack>
  )
}

export default Logo;